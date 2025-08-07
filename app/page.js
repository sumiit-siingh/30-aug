"use client"; // This is a client component

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showInitialQuestion, setShowInitialQuestion] = useState(true);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
    setShowInitialQuestion(false); // Hide the initial question and buttons

    // Navigate to the next page after a short delay
    setTimeout(() => {
        router.push('/celebrate');
    }, 2500); // 2.5 second delay
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Really no?",
      "Are you sure?",
      "Pakka soch lo!",
      "Last chance!",
      "Soch lijiye fir se",
      "Please?",
      "Don't do this to me :(",
      "I'm gonna cry...",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-pink-100">
      {/* Hearts background */}
      <AnimatePresence>
        {!yesPressed &&
          [...Array(10)].map((_, i) => {
            const isBroken = i < noCount;
            const style = {
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            };
            return (
              <motion.div
                key={i}
                className="absolute text-red-400"
                style={style}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {isBroken ? "💔" : "❤️"}
              </motion.div>
            );
          })}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <AnimatePresence>
          {showInitialQuestion && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="my-4 text-4xl md:text-6xl font-greatvibes text-rose-500">
                I have made something for you, wanna see?
              </h1>
              <div className="flex items-center justify-center gap-4">
                <button
                  className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
                  style={{ fontSize: `${yesButtonSize}px` }}
                  onClick={handleYesClick}
                >
                  Yes
                </button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  onClick={handleNoClick}
                >
                  {getNoButtonText()}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {yesPressed && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
                <h2 className="text-2xl md:text-4xl font-bold text-rose-500 mb-4">
                    Yay! I knew it ki aap mujhe mana nahi karogi 🥰
                </h2>
                {/* Beating hearts */}
                <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.1 }}
                        >
                            <span className="text-5xl text-red-500 mx-1">❤️</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}