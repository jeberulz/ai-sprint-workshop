#!/usr/bin/env node

// Test script for Beehiiv API integration
// Run with: node test-beehiiv.js

const testBeehiivIntegration = async () => {
  console.log('🧪 Testing Beehiiv Integration\n')
  
  // Check environment variables
  console.log('📋 Environment Variables:')
  console.log('BEEHIIV_API_KEY:', process.env.BEEHIIV_API_KEY ? '✅ Set' : '❌ Missing')
  console.log('BEEHIIV_PUBLICATION_ID:', process.env.BEEHIIV_PUBLICATION_ID ? '✅ Set' : '❌ Missing')
  console.log('BEEHIIV_AUTOMATION_IDS:', process.env.BEEHIIV_AUTOMATION_IDS ? '✅ Set' : '⚠️  Optional (not set)')
  
  if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
    console.log('\n❌ Missing required environment variables!')
    console.log('Please create a .env.local file with:')
    console.log('BEEHIIV_API_KEY=your_api_key')
    console.log('BEEHIIV_PUBLICATION_ID=your_publication_id')
    return
  }
  
  console.log('\n🔄 Testing API endpoint...')
  
  const testData = {
    email: 'test@example.com',
    name: 'Test User'
  }
  
  try {
    const response = await fetch('http://localhost:3000/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
      signal: AbortSignal.timeout(10000) // 10s timeout
    })
    
    // Clone response for fallback in case JSON parsing fails
    const responseClone = response.clone()
    
    // Parse response body only once
    let result
    try {
      result = await response.json()
    } catch (parseError) {
      // Use cloned response to get text when JSON parsing fails
      const rawText = await responseClone.text()
      result = { 
        error: 'Invalid JSON response', 
        rawResponse: rawText,
        parseError: parseError.message 
      }
    }
    
    console.log('📊 Response Status:', response.status)
    console.log('📄 Response Body:', JSON.stringify(result, null, 2))
    
    if (response.ok) {
      console.log('✅ Success! Check your Beehiiv account for the new subscriber.')
    } else {
      console.log('❌ Error occurred. Check the response above for details.')
    }
    
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('❌ Request Timeout: The API request took too long to respond.')
    } else if (error.code === 'ECONNREFUSED') {
      console.error('❌ Connection Refused: Make sure your development server is running: npm run dev')
    } else {
      console.error('❌ Network Error:', error.message)
    }
  }
}

testBeehiivIntegration()