# Weather App ⛅

A modern, responsive weather application built with React and Vite that provides real-time weather information and forecasts.

![Weather App Screenshot](image.png)

## 🌐 Live Demo
[View Live Demo](https://sky-cast-pro.vercel.app/)

## Features 🌟

- **Real-time Weather Data**: Get current weather conditions for any location
- **5-Day Forecast**: View detailed weather forecasts for the next 5 days
- **Location-based Weather**: Automatically fetch weather for user's location
- **Search Functionality**: Search for weather information by city name
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Weather Trends**: View weather trends with interactive charts
- **Favorites**: Save your favorite locations for quick access

## Technologies Used 💻

- React 18
- Vite
- Tailwind CSS
- OpenWeather API
- Chart.js
- React Router
- Framer Motion
- Heroicons

## Prerequisites 📋

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/Vaishnavi4104/SkyCast-Pro.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```env
   VITE_OPENWEATHER_API_KEY=5d202a459d1b0ecafc0daadf790043f5
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables 🔑

The following environment variables are required:

- `VITE_OPENWEATHER_API_KEY`: 5d202a459d1b0ecafc0daadf790043f5

To obtain an API key:
1. Sign up at [OpenWeather](https://openweathermap.org/)
2. Go to your API keys section
3. Copy your API key
4. Paste it in your `.env` file

## Usage 📱

1. Allow location access when prompted to get weather for your current location
2. Use the search bar to find weather information for any city
3. Toggle dark mode using the sun/moon icon in the navigation bar
4. Click on "Favorites" to save and manage your favorite locations
5. View detailed forecasts and weather trends in the main dashboard

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Weather data provided by [OpenWeather](https://openweathermap.org/)
- Icons by [Heroicons](https://heroicons.com/)
- Charts powered by [Chart.js](https://www.chartjs.org/)

## Contact 📧

Vaishnavi Shinde - [@vaishnavibs241@gmail.com](https://github.com/vaishnavi4104)

Project Link: [https://github.com/Vaishnavi4104/SkyCast-Pro.git](https://github.com/vaishnavi4104/SkyCast-Pro)

## Deployment 🚀

This project is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Create a [Vercel account](https://vercel.com)
3. Click on "Add New Project"
4. Import your GitHub repository
5. Configure the build settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add your environment variable:
   - VITE_OPENWEATHER_API_KEY: Your OpenWeather API key
7. Click "Deploy"

Your app will be automatically deployed and you'll get a production URL. Vercel will automatically redeploy whenever you push changes to your GitHub repository. 