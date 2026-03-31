# DublAi

## Project Overview
DublAi is an innovative video dubbing application that utilizes advanced AI algorithms to synchronize voice dubbing with video content in multiple languages. This application aims to provide a seamless viewing experience across various cultures while maintaining the original context and emotions of the dialogue.

## Features
- **AI-Powered Voice Dubbing**: Automatically footage and dubbing in over 10 languages.
- **Real-Time Synchronization**: The application synchronizes the dubbing with the speaker's lip movements.
- **User-Friendly Interface**: An intuitive interface for both users and administrators.
- **API Endpoints for Integration**: Well-documented API endpoints for integration with other services.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/monicacristina073-sys/dublai.git
   cd dublai
   ```
2. **Install Dependencies**:
   Make sure you have Node.js installed. Install the necessary packages using:
   ```bash
   npm install
   ```
3. **Configuration**:
   Create a `.env` file in the root directory and define the following environment variables:
   ```plaintext
   DB_CONNECTION_STRING=your_connection_string
   API_KEY=your_api_key
   ```
4. **Run the Application**:
   Start the server using:
   ```bash
   npm start
   ```

## API Endpoints
- **POST /api/dub**: Upload a video for dubbing.
  - Request Body: `{ "videoUrl": "<your_video_url>", "languages": ["en", "es"] }`
  - Response: `{ "status": "success", "dubbedVideoUrl": "<url_to_dubbed_video>" }`

- **GET /api/status/:id**: Check the status of the dubbing process.
  - Response: `{ "status": "completed", "dubbedVideoUrl": "<url_to_dubbed_video>" }`

## Deployment Guidelines
1. **Choose a Hosting Provider**: DublAi can be deployed on AWS, Heroku, or any other cloud provider.
2. **Environment Setup**: Ensure that your cloud environment has Node.js and the necessary database set up.
3. **Deployment Commands**:
   Follow the provider-specific deployment configuration to push your code to the live environment.
4. **Monitoring**: Utilize monitoring services to check the uptime and performance.

## Conclusion
DublAi strives to bridge language barriers in media through technology. Explore the project and contribute to its growth!