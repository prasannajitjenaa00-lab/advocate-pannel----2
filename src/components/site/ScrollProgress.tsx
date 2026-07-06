import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
    >
      <div className="h-full w-full bg-gradient-to-r from-primary via-gold to-hover" />
    </motion.div>
  );
}