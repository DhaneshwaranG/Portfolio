import { motion, AnimatePresence } from "framer-motion";

function Preloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[999999] bg-black flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            {/* Glowing Circle */}
            <motion.div
              initial={{
                scale: 0,
                rotate: -180,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                w-28 h-28
                md:w-40 md:h-40
                rounded-full
                bg-red-500
                flex
                items-center
                justify-center
                shadow-[0_0_60px_rgba(255,42,42,0.8)]
              "
            >
              <h1 className="text-white text-4xl md:text-6xl font-black">DG</h1>
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="
                mt-8
                text-white
                text-xl
                md:text-4xl
                font-bold
                text-center
              "
            >
              Dhaneshwaran G
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className="
                text-red-500
                mt-3
                uppercase
                tracking-[4px]
                text-xs
                md:text-sm
              "
            >
              Java Full Stack Developer
            </motion.p>

            {/* Loading Dots */}
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
              }}
              className="
                mt-8
                text-gray-400
                text-sm
                tracking-widest
              "
            >
              LOADING...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
