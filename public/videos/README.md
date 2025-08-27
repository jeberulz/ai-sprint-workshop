# Video Files for Workshop Components

This directory contains video files used in the Workshop components.

## Required Video Files

Each day component expects the following video files:

### Day 1: AI-Powered Research & Strategy
- `day1-research-strategy.mp4` - Primary video file in MP4 format
- `day1-research-strategy.webm` - Fallback video file in WebM format
- **Content**: Competitive analysis with Perplexity, user persona generation, brand direction with Midjourney

### Day 2: AI-Generated Product Specs & Design
- `day2-product-specs-design.mp4` - Primary video file in MP4 format
- `day2-product-specs-design.webm` - Fallback video file in WebM format
- **Content**: ChatGPT-4 feature specs, user stories, Uizard prototype generation

### Day 3: No-Code Frontend Build & MVP Roadmap
- `day3-nocode-frontend-mvp.mp4` - Primary video file in MP4 format
- `day3-nocode-frontend-mvp.webm` - Fallback video file in WebM format
- **Content**: Bubble development, MVP roadmap creation, core feature implementation

### Day 4: AI-Assisted Backend & Business Logic
- `day4-backend-business-logic.mp4` - Primary video file in MP4 format
- `day4-backend-business-logic.webm` - Fallback video file in WebM format
- **Content**: OpenAI API integration, Cursor coding assistant, pricing strategy implementation

### Day 5: GTM Strategy & Live Deployment
- `day5-gtm-deployment.mp4` - Primary video file in MP4 format
- `day5-gtm-deployment.webm` - Fallback video file in WebM format
- **Content**: Go-To-Market strategy creation, launch announcement, live deployment in Bubble

## Video Specifications (All Days)
- **Duration**: Recommended 45-60 minutes per session (matching "→ [Topic] in 60 minutes")
- **Resolution**: 1920x1080 (16:9 aspect ratio) recommended
- **Format**: 
  - MP4: H.264 codec, AAC audio
  - WebM: VP9 codec, Vorbis/Opus audio
- **File Size**: Optimize for web delivery (consider compression)

## File Placement
Place video files directly in this `/public/videos/` directory:
```
public/
└── videos/
    ├── day1-research-strategy.mp4
    ├── day1-research-strategy.webm
    ├── day2-product-specs-design.mp4
    ├── day2-product-specs-design.webm
    ├── day3-nocode-frontend-mvp.mp4
    ├── day3-nocode-frontend-mvp.webm
    ├── day4-backend-business-logic.mp4
    ├── day4-backend-business-logic.webm
    ├── day5-gtm-deployment.mp4
    ├── day5-gtm-deployment.webm
    └── README.md (this file)
```

## Video Features Implemented
- **Auto-Play on Scroll**: Videos automatically start playing (muted) when 50% of the section is visible
- **Smart Audio Control**: Auto-play is muted, but clicking play button enables audio
- **Intersection Observer**: Uses modern browser API for efficient scroll detection
- **Pause on Exit**: Videos pause when scrolled out of view (during auto-play mode)
- **Click-to-Play**: Users can still click the play button for full control with audio
- **Responsive Design**: Videos fill containers and maintain aspect ratio
- **Seamless Transition**: Smooth change from thumbnail to video player
- **Browser Compatibility**: Multiple format support for broad compatibility
- **Loading Optimization**: Only metadata loads initially (`preload="metadata"`)
- **Native Controls**: Shows browser controls only when user manually plays
- **Graceful Fallback**: Error message for unsupported browsers or auto-play restrictions
- **Design Consistency**: Maintains existing component styling and overlays

## User Experience Flow
1. **Section Entry**: When user scrolls to a day section, video auto-plays muted
2. **Background Playback**: Video continues playing silently as user reads content
3. **Manual Interaction**: User can click play button to enable audio and full controls
4. **Section Exit**: If still in auto-play mode, video pauses when scrolled away
5. **Re-entry**: Video resumes auto-play if user scrolls back to the section

## Browser Support & Considerations
- **Auto-play Policies**: Modern browsers may block auto-play; graceful fallback to click-to-play
- **Mobile Optimization**: Auto-play respects device power-saving and data usage settings
- **Performance**: Intersection Observer provides efficient scroll detection
- **Accessibility**: Maintains keyboard navigation and screen reader compatibility

### Alternative Options:
If self-hosting is not preferred, you can:
1. Upload to YouTube and use iframe embed
2. Use Vimeo with their embed player
3. Use a video hosting service like Wistia or JW Player
4. Implement react-player for multiple platform support