import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-red-500 z-[9999] origin-left"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default ScrollProgress;
