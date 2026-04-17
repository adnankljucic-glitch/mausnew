import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-0 w-[96%] md:w-[88%] mx-auto right-0 px-4 md:px-[clamp(20px,2vw,40px)] cursor-pointer z-10"
      onClick={scrollToContent}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-start gap-1 text-white/50 hover:text-white transition-colors"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">
          Scroll
        </span>
        <ArrowDown size={20} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
}
