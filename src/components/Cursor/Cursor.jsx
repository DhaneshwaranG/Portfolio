import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-4 h-4 rounded-full pointer-events-none z-[100000] bg-white border-2 border-red-500 shadow-[0_0_20px_#ff0000]"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
      }}
    />
  );
}

export default Cursor;
