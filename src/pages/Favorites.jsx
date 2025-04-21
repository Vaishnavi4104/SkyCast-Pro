import { motion } from 'framer-motion';

const Favorites = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Favorite Locations</h1>
      <p className="text-gray-600 dark:text-gray-400">Your favorite locations will appear here.</p>
    </motion.div>
  );
};

export default Favorites; 