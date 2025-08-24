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
    const result = await beehiivResponse.json()
    console.log('Successfully created Beehiiv subscription'))
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

    // Environment-gated logging - only log detailed info in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Beehiiv subscription request (dev only):', {
        status: 'attempting',
        publicationId: publicationId.substring(0, 8) + '...',
        hasEmail: !!requestBody.email,
        hasName: !!requestBody.custom_fields?.[0]?.value,
        automationCount: requestBody.automation_ids?.length || 0
      })
    } else {
      console.log('Beehiiv subscription request initiated')
    }

    const beehiivResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
      if (!beehiivResponse.ok) {
        const errorData = await beehiivResponse.text()
        console.error('Beehiiv API error:', {
          status: beehiivResponse.status,
          statusText: beehiivResponse.statusText
        })
      }

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
    
    // Log success with minimal sensitive data exposure
    if (process.env.NODE_ENV === 'development') {
      console.log('Beehiiv API success (dev only):', {
        status: 'success',
        subscriberId: result.data?.id ? result.data.id.substring(0, 8) + '...' : 'unknown',
        hasData: !!result.data
      })
    } else {
      console.log('Beehiiv subscription successful')
    }
    
    // If automation enrollment was requested, try the dedicated automation endpoint
    if (parsedAutomationIds.length > 0 && result.data && result.data.id) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Attempting automation enrollment (dev only):', {
          subscriberId: result.data.id.substring(0, 8) + '...',
          automationCount: parsedAutomationIds.length
        })
      } else {
        console.log('Attempting automation enrollment for subscriber')
      }
      
      for (const automationId of parsedAutomationIds) {
        try {
          if (process.env.NODE_ENV === 'development') {
            console.log(`Adding subscriber to automation (dev only):`, {
              subscriberId: result.data.id.substring(0, 8) + '...',
              automationId: automationId.substring(0, 8) + '...'
            })
          }
          
          const automationResponse = await fetch(
            `https://api.beehiiv.com/v2/publications/${publicationId}/automations/${automationId}/journeys`,
            {
              method: 'POST',
  } catch (error) {
    console.error('Subscription error:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
            }
          )

          if (automationResponse.ok) {
            const automationResult = await automationResponse.json()
            if (process.env.NODE_ENV === 'development') {
              console.log(`Successfully enrolled in automation (dev only):`, {
                automationId: automationId.substring(0, 8) + '...',
                hasResult: !!automationResult
              })
            } else {
              console.log('Successfully enrolled subscriber in automation')
            }
          } else {
            const errorData = await automationResponse.text()
            if (process.env.NODE_ENV === 'development') {
              console.error(`Failed to enroll in automation (dev only):`, {
                automationId: automationId.substring(0, 8) + '...',
                status: automationResponse.status,
                error: errorData
              })
            } else {
              console.error('Failed to enroll subscriber in automation:', {
                status: automationResponse.status
              })
            }
          }
        } catch (automationError) {
          if (process.env.NODE_ENV === 'development') {
            console.error(`Error enrolling in automation (dev only):`, {
              automationId: automationId.substring(0, 8) + '...',
              error: automationError
            })
          } else {
            console.error('Error enrolling subscriber in automation')
          }
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