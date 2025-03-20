# Prometheus - Mathematical Visualization Platform

Prometheus is a web application that combines the power of Large Language Models with mathematical visualization to help users understand and visualize mathematical concepts. Using Manim for animations and Groq's LLM capabilities, it creates beautiful, interactive visualizations of mathematical problems and provides step-by-step explanations.

## Features

- Interactive mathematical problem input
- Real-time visualization generation
- Step-by-step problem explanations
- Beautiful animations using Manim
- Responsive design
- Real-time status updates

## Tech Stack

- **Frontend Framework**: Next.js
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Video Player**: ReactPlayer
- **API Integration**: Axios

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend server running (see prometheus-backend project)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/prometheus.git
cd prometheus
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter a mathematical problem or concept in the input field
2. Click "Generate" to create the visualization
3. Watch the animation and read the step-by-step explanation
4. The video can be replayed and the explanation can be reviewed at any time

## Project Structure

```
prometheus/
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   └── styles/       # CSS styles
├── public/           # Static files
└── package.json      # Project dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Manim](https://www.manim.community/) for mathematical animations
- [Groq](https://groq.com/) for LLM capabilities
- [Next.js](https://nextjs.org/) for the frontend framework
