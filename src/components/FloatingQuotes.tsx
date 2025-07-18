import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const quotes = [
    "Automation empowers humans to focus on innovation",
    "Security is a journey, not a destination",
    "Cloud scalability transforms problem-solving mindset",
    "Every deployment failure teaches valuable lessons",
    "Infrastructure excellence means invisible reliability"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, quotes.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-40 pointer-events-none hidden xl:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, x: -50, rotateY: -45 }}
          animate={{ opacity: 0.7, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, x: 50, rotateY: 45 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700 rounded-xl p-4 max-w-xs"
        >
          <p className="text-sm text-gray-700 dark:text-gray-300 italic">
            "{quotes[currentQuote]}"
          </p>
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 opacity-50"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};