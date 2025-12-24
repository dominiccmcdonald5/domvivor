import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function IdolHunt() {
  const tabs = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#87CEEB] via-[#4A90E2] to-[#2C5F8D] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 px-6 py-3 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-xl text-white font-bold shadow-lg hover:bg-white/30 transition-all duration-300"
          >
            ← Back to Home
          </motion.button>
        </Link>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            🔍 IDOL HUNT 🔍
          </h1>
          <div className="h-1 w-48 bg-gradient-to-r from-white/60 to-white/20 mx-auto rounded-full"></div>
        </motion.div>

        {/* Description Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/20 backdrop-blur-md border-4 border-white/40 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl"
        >
          <div className="text-center">
            <div className="text-6xl mb-6">🗿</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              How to Find the Hidden Immunity Idol
            </h2>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              In this website is key letters that you must unscramble to make a word, once you do that, you have your idol.
            </p>
            <div className="mt-8 p-6 bg-white/10 rounded-2xl border-2 border-white/30">
              <p className="text-lg text-white/90 italic">
                💡 Search through all the tabs below to find hidden letters. Unscramble them to discover the secret word and claim your immunity!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Search These Locations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tabs.map((num) => (
              <Link key={num} to={`/idol-hunt/location-${num}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-md border-3 border-white/30 rounded-xl p-6 text-center shadow-xl hover:bg-white/30 hover:border-white/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl mb-2">📍</div>
                  <p className="text-xl font-bold text-white drop-shadow-md">
                    Location {num}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-white/70 py-8"
        >
          <p className="text-sm drop-shadow">Good luck, castaways! 🏝️</p>
        </motion.div>
      </div>
    </div>
  );
}
