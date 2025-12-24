import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const taigaTribe = [
  'Ariel', 'Charizard', 'Dillon', 'Dize', 'Gamer', 'John',
  'Michie', 'Morgan', 'Oopma', 'Pluto', 'Theo', 'Treyvor'
];

const uralTribe = [
  'Drew', 'Elsa', 'Everest', 'Kahn', 'Jeremiah', 'JR',
  'Okie', 'Rich', 'Ryan', 'Slim', 'Wat', 'Zaltan'
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#87CEEB] via-[#4A90E2] to-[#2C5F8D]">
      {/* Hero Section */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="Domvivor Logo" 
              className="w-64 md:w-96 mx-auto drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider drop-shadow-lg">
            DOMVIVOR
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-white/90 mb-4 drop-shadow-md">
            THE FROZEN CAVERN
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Season 19 • New Era Season 5
          </p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-8"
          >
            Outwit. Outplay. Outlast.
          </motion.p>
          
          {/* Idol Hunt Button */}
          <Link to="/idol-hunt">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-xl text-white text-xl font-bold shadow-2xl hover:bg-white/30 transition-all duration-300"
            >
              🔍 Enter Idol Hunt
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Tribes Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Taiga Tribe */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-green-900/60 to-green-700/60 backdrop-blur-md border-4 border-white/30 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                🏔️ TAIGA 🏔️
              </h3>
              <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-green-200 mx-auto rounded-full shadow-lg"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {taigaTribe.map((member, idx) => (
                <motion.div
                  key={member}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border-2 border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
                >
                  <p className="text-white font-bold text-lg drop-shadow-md">{member}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ural Tribe */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 bg-gradient-to-br from-cyan-600/60 to-blue-500/60 backdrop-blur-md border-4 border-white/30 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                ❄️ URAL ❄️
              </h3>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-200 to-blue-200 mx-auto rounded-full shadow-lg"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {uralTribe.map((member, idx) => (
                <motion.div
                  key={member}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border-2 border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
                >
                  <p className="text-white font-bold text-lg drop-shadow-md">{member}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Season Info Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
            Season Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 shadow-xl">
              <div className="text-5xl mb-4">👥</div>
              <h4 className="text-2xl font-bold text-white mb-3">24 Castaways</h4>
              <p className="text-white/90">Two tribes enter the frozen cavern, but only one will outwit, outplay, and outlast to become the Sole Survivor.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 shadow-xl">
              <div className="text-5xl mb-4">🏆</div>
              <h4 className="text-2xl font-bold text-white mb-3">New Era Season 5</h4>
              <p className="text-white/90">The evolution of Domvivor continues with new twists, advantages, and challenges in the harshest environment yet.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 shadow-xl">
              <div className="text-5xl mb-4">🏔️</div>
              <h4 className="text-2xl font-bold text-white mb-3">The Frozen Cavern</h4>
              <p className="text-white/90">Navigate through treacherous ice caves, frozen tundras, and harsh winter conditions to prove you have what it takes.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 shadow-xl">
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-2xl font-bold text-white mb-3">Season 19</h4>
              <p className="text-white/90">The 19th chapter in Domvivor history brings unprecedented gameplay and unforgettable moments.</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-white/70 py-8"
        >
          <p className="text-sm drop-shadow">© 2025 Domvivor: The Frozen Cavern</p>
          <p className="text-xs mt-2 drop-shadow">Discord Survivor Community</p>
        </motion.div>
      </div>
    </div>
  );
}
