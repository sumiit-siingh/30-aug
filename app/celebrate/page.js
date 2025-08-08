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
        className="text-lg text-gray-700 mb-12 max-w-xl"
      >
        I've put together a few little things to show you just how much you mean to me. I hope you like them.
      </motion.p>

      {/* Grid for Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/memories" className="nav-button">
            Our Memories Spin ✨
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/letters" className="nav-button">
            Some Letters For You 💌
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/song" className="nav-button">
            Listen To Our Song 🎵
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/quiz" className="nav-button">
            A Little Quiz! 🤔
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/world" className="nav-button">
            Explore Our World 🌍
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CelebratePage;