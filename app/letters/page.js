"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- IMPORTANT: Personalize these letters! ---
const lettersData = [
  {
    title: "Open When You Miss Me",
    content: "Hey my love. I know it's hard being apart. Just close your eyes and imagine I'm right there with you, holding your hand. Think about our laughs, our dreams, and know that every second apart is a second closer to being together again. I miss you more than words can say. ❤️"
  },
  {
    title: "Open When You Need a Laugh",
    content: "Remember that time we [insert a funny shared memory here]? I still crack up thinking about it. You have the best laugh in the world, and I can't wait to hear it again. For now, just picture me doing a silly dance for you. I hope it makes you smile. 😄"
  },
  {
    title: "Open On Our Next Anniversary",
    content: "Happy Anniversary, my love! I can't believe another year has passed. Being with you has been the greatest adventure of my life. I cherish every moment and can't wait to see what our future holds. I love you more every day."
  },
  {
    title: "Open When You Want to Feel Loved",
    content: "Just a reminder: You are the most incredible person I've ever met. You are smart, beautiful, kind, and strong. I am so lucky to have you in my life. Never forget how much you are loved, not just by me, but by everyone whose life you touch. You are my everything."
  }
];

const LettersPage = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <div className="min-h-screen bg-rose-50 p-4 sm:p-8">
      {/* Back Button */}
      <div className="absolute top-5 left-5 z-20">
        <Link href="/celebrate" className="px-4 py-2 bg-white text-rose-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          ← Back
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-greatvibes text-rose-600 mb-8">A Few Letters For You</h1>
        
        {/* Envelopes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {lettersData.map((letter, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 bg-white rounded-lg shadow-lg cursor-pointer border-2 border-rose-200"
              onClick={() => setSelectedLetter(letter)}
            >
              <p className="text-2xl text-rose-500 font-semibold">💌</p>
              <h2 className="text-xl font-bold text-gray-700 mt-2">{letter.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the letter */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.7, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.7, y: 50 }}
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative"
              onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
            >
              <h2 className="text-2xl font-bold text-rose-600 mb-4">{selectedLetter.title}</h2>
              <p className="text-gray-600 whitespace-pre-wrap">{selectedLetter.content}</p>
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LettersPage;