"use client";

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/file';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORTANT: Personalize these moments! ---
// Time is in seconds.
const songMoments = [
  { time: 5, text: "This song always makes me think of you..." },
  { time: 25, text: "Remember listening to this on our first call?" },
  { time: 50, text: "I love this part..." },
  { time: 80, text: "Can't wait to dance to this with you for real." },
  { time: 120, text: "I love you. ❤️" }
];

const SongPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the component only renders on the client, avoiding hydration errors.
    setIsClient(true); 
  }, []);

  useEffect(() => {
    const moment = songMoments.find(m => Math.abs(m.time - progress) < 1);
    if (moment) {
      setCurrentText(moment.text);
    }
  }, [progress]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-4 overflow-hidden">
      <div className="absolute top-5 left-5 z-20">
        <Link href="/celebrate" className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
          ← Back
        </Link>
      </div>

      {/* ReactPlayer is hidden but controls the audio */}
      <div className="hidden">
        {isClient && (
          <ReactPlayer
            url="/our-song.mp3" // Make sure your song is in /public/our-song.mp3
            playing={isPlaying}
            onProgress={(p) => setProgress(p.playedSeconds)}
            onEnded={() => setIsPlaying(false)}
          />
        )}
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Song</h1>
      <p className="text-lg text-gray-400 mb-8">Press play</p>

      {/* Play/Pause Button */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)} 
        className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg hover:bg-rose-600 transition"
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>

      {/* Animated Text Display */}
      <div className="absolute bottom-20 left-0 right-0 p-4">
        <AnimatePresence>
          {currentText && isPlaying && (
            <motion.p
              key={currentText} // Key change triggers re-animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
              className="text-2xl md:text-3xl font-greatvibes text-rose-300"
            >
              {currentText}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SongPage;