"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const CelebratePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-center p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-rose-500 font-greatvibes mb-8"
      >
        Happy Birthday My Love!
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg text-gray-700 mb-12"
      >
        Here are a couple more surprises for you...
      </motion.p>

      <div className="flex flex-col md:flex-row gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/memories" className="px-8 py-4 bg-white text-rose-500 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-3">
            See Our Memories Spin ✨
          </Link>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/world" className="px-8 py-4 bg-white text-rose-500 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-3">
            Explore Our World 🌍
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CelebratePage;