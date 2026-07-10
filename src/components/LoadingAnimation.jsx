import { motion } from 'framer-motion';

export default function LoadingAnimation({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-gray-950 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="relative inline-block mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-md opacity-40 animate-pulse-glow"></div>
        <img
          src="/logo.jpeg"
          alt="PixelVerse Logo"
          className="relative h-20 md:h-28 w-auto aspect-square object-cover rounded-full border-2 border-gray-800 shadow-2xl"
        />
      </motion.div>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-violet-500"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
