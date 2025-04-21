import { motion } from 'framer-motion';
import ReactAnimatedWeather from 'react-animated-weather';
import { HeartIcon } from '@heroicons/react/24/outline';

const WeatherCard = ({ data }) => {
  const {
    name,
    main: { temp, feels_like, humidity },
    weather: [{ description, icon }],
    wind: { speed },
    sys: { sunrise, sunset },
  } = data;

  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': 'CLEAR_DAY',
      '01n': 'CLEAR_NIGHT',
      '02d': 'PARTLY_CLOUDY_DAY',
      '02n': 'PARTLY_CLOUDY_NIGHT',
      '03d': 'CLOUDY',
      '03n': 'CLOUDY',
      '04d': 'CLOUDY',
      '04n': 'CLOUDY',
      '09d': 'RAIN',
      '09n': 'RAIN',
      '10d': 'RAIN',
      '10n': 'RAIN',
      '11d': 'RAIN',
      '11n': 'RAIN',
      '13d': 'SNOW',
      '13n': 'SNOW',
      '50d': 'FOG',
      '50n': 'FOG',
    };
    return iconMap[iconCode] || 'CLEAR_DAY';
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
          <HeartIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-6xl font-bold">{Math.round(temp)}°C</div>
        <ReactAnimatedWeather
          icon={getWeatherIcon(icon)}
          color="#3B82F6"
          size={64}
          animate={true}
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-400">Feels like</p>
          <p className="text-xl font-semibold">{Math.round(feels_like)}°C</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-400">Humidity</p>
          <p className="text-xl font-semibold">{humidity}%</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-400">Wind</p>
          <p className="text-xl font-semibold">{speed} m/s</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-400">Sunrise/Sunset</p>
          <p className="text-xl font-semibold">
            {formatTime(sunrise)} / {formatTime(sunset)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard; 