import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.button
        onClick={toggleTheme}
        className="relative p-4 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          boxShadow: theme === 'dark' 
            ? "0 20px 40px rgba(251, 191, 36, 0.3)" 
            : "0 20px 40px rgba(59, 130, 246, 0.3)"
        }}
        whileTap={{ scale: 0.9, rotate: -5 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-600 dark:to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          animate={{
            background: theme === 'dark' 
              ? 'linear-gradient(45deg, #FCD34D, #F59E0B)' 
              : 'linear-gradient(45deg, #3B82F6, #8B5CF6)'
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon container */}
        <motion.div
          className="relative z-10"
          animate={{ 
            rotate: theme === 'dark' ? 0 : 180,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                transition={{ duration: 0.4 }}
                className="text-yellow-400"
              >
                <Sun className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -180, scale: 0.5 }}
                transition={{ duration: 0.4 }}
                className="text-blue-600"
              >
                <Moon className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-current rounded-full opacity-60"
            animate={{
              x: [0, Math.cos(i * 1.5) * 20, 0],
              y: [0, Math.sin(i * 1.5) * 20, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </motion.button>

      {/* Tooltip */}
      <motion.div
        className="absolute top-full right-0 mt-2 px-3 py-1 bg-black/80 dark:bg-white/80 text-white dark:text-black text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </motion.div>
    </motion.div>
  );
};

const AnimatePresence = motion.div;