# Changelog

## [Unreleased]

## [0.1.0] - 2024-03-18

### Added

- Initial project setup with Next.js frontend and FastAPI backend
- Integration with Claude AI for LLM capabilities (started with Groq and changed to Claude)
- Manim integration for mathematical visualizations
- Real-time job status updates
- Video rendering capabilities

### Fixed Issues and Solutions

#### Backend Issues

1. **Groq API Authentication (401 Error)**

   - Issue: Unauthorized access to Groq API
   - Solution: Updated environment variable loading and API key configuration
   - Fixed by ensuring proper .env file location and API key format

2. **UTF-8 Encoding Issues**

   - Issue: 'charmap' codec couldn't encode character '\u03c0' (π symbol)
   - Solution: Implemented comprehensive UTF-8 encoding support:
     - Added UTF-8 encoding declarations in Python files
     - Configured system-wide UTF-8 encoding for Windows
     - Updated file operations to use UTF-8
     - Added proper font handling for mathematical symbols

3. **Manim Rendering Issues**

   - Issue: Failed to render animations due to missing dependencies
   - Solution:
     - Installed ffmpeg and related dependencies
     - Added proper error handling and logging
     - Improved scene name extraction
     - Added validation for generated code

4. **Code Generation Issues**
   - Issue: Syntax errors in generated Manim code
   - Solution:
     - Improved LLM prompt engineering
     - Added code validation before rendering
     - Implemented better error handling and logging
     - Added specific guidelines for code generation

#### Frontend Issues

1. **Video Playback**

   - Issue: Video rendering and display issues
   - Solution: Implemented proper video serving and playback using ReactPlayer

2. **Real-time Updates**
   - Issue: Job status updates not showing in real-time
   - Solution: Implemented polling mechanism for job status

### Technical Improvements

1. **Code Quality**

   - Added comprehensive error handling
   - Implemented detailed logging
   - Added input validation
   - Improved code organization

2. **Development Environment**
   - Added requirements.txt for Python dependencies
   - Created comprehensive .gitignore
   - Added documentation
   - Implemented proper project structure

### Dependencies Added

- FastAPI for backend API
- Manim for mathematical animations
- ffmpeg for video processing
- Groq API for LLM capabilities
- Next.js for frontend
- ReactPlayer for video playback
