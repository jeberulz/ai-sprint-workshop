import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = body

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const apiKey = process.env.BEEHIIV_API_KEY
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID
    const automationIds = process.env.BEEHIIV_AUTOMATION_IDS

    if (!apiKey || !publicationId) {
      console.error('Missing Beehiiv configuration:', {
        hasApiKey: !!apiKey,
        hasPublicationId: !!publicationId
      })
      return NextResponse.json(
        { error: 'Server configuration error: Missing Beehiiv API credentials' },
        { status: 500 }
      )
    }

    console.log('Attempting to subscribe:', { email, name, publicationId: publicationId.substring(0, 8) + '...' })

    // Parse automation IDs
    const parsedAutomationIds = automationIds ? automationIds.split(',').map(id => id.trim()) : []
    console.log('Automation IDs from env:', automationIds)
    console.log('Parsed automation IDs:', parsedAutomationIds)

    // Call Beehiiv API
    const requestBody = {
      email: email,
      reactivate_existing: true,
      send_welcome_email: false,
      custom_fields: [
        {
          name: "name",
          value: name
        }
      ],
      ...(parsedAutomationIds.length > 0 && {
        automation_ids: parsedAutomationIds
      })
    }

    console.log('Beehiiv API request:', {
      url: `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      body: requestBody
    })

    const beehiivResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    )

    if (!beehiivResponse.ok) {
      const errorData = await beehiivResponse.text()
      console.error('Beehiiv API error:', {
        status: beehiivResponse.status,
        statusText: beehiivResponse.statusText,
        errorData
      })
      
      if (beehiivResponse.status === 409) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { error: `Failed to subscribe: ${beehiivResponse.status} ${beehiivResponse.statusText}` },
        { status: 500 }
      )
    }

    const result = await beehiivResponse.json()
    console.log('Beehiiv API success:', result)
    
    // If automation enrollment was requested, try the dedicated automation endpoint
    if (parsedAutomationIds.length > 0 && result.data && result.data.id) {
      console.log('Attempting automation enrollment via dedicated endpoint for subscriber:', result.data.id)
      
      for (const automationId of parsedAutomationIds) {
        try {
          console.log(`Adding subscriber ${result.data.id} to automation ${automationId}`)
          
          const automationResponse = await fetch(
            `https://api.beehiiv.com/v2/publications/${publicationId}/automations/${automationId}/journeys`,
            {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                subscription_id: result.data.id
              }),
            }
          )

          if (automationResponse.ok) {
            const automationResult = await automationResponse.json()
            console.log(`Successfully enrolled in automation ${automationId}:`, automationResult)
          } else {
            const errorData = await automationResponse.text()
            console.error(`Failed to enroll in automation ${automationId}:`, {
              status: automationResponse.status,
              error: errorData
            })
          }
        } catch (automationError) {
          console.error(`Error enrolling in automation ${automationId}:`, automationError)
        }
      }
    }
    
    return NextResponse.json(
      { message: 'Successfully subscribed!', data: result },
      { status: 200 }
    )

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}