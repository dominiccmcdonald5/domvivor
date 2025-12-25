import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#87CEEB] via-[#4A90E2] to-[#2C5F8D] flex items-center justify-center relative">
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src="/Domvivor_S5_The_Frozen_Cavern.png"
        alt="Domvivor Season 5: The Frozen Cavern"
        className="w-full h-full object-contain p-8 max-w-7xl"
      />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/idol-hunt')}
        className="absolute bottom-12 right-12 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-bold shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
      >
        Idol
      </motion.button>
    </div>
  );
}
