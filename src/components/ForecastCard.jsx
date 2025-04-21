import { motion } from 'framer-motion';
import ReactAnimatedWeather from 'react-animated-weather';

const ForecastCard = ({ data }) => {
  const {
    dt,
    main: { temp, humidity },
    weather: [{ description, icon }],
    wind: { speed },
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

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString([], {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="card"
    >
      <div className="text-center">
        <p className="font-semibold">{formatDate(dt)}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{formatTime(dt)}</p>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <ReactAnimatedWeather
          icon={getWeatherIcon(icon)}
          color="#3B82F6"
          size={48}
          animate={true}
        />
        <p className="mt-2 text-2xl font-bold">{Math.round(temp)}°C</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="text-gray-600 dark:text-gray-400">Humidity</p>
          <p className="font-semibold">{humidity}%</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Wind</p>
          <p className="font-semibold">{speed} m/s</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ForecastCard; 