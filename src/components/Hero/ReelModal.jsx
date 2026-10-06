import { motion, AnimatePresence } from "framer-motion";
import reelVideo from "../../assets/videos/Portfolio-Self-Intro.mp4";

function ReelModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[99990] bg-black/90 flex items-center justify-center p-4 md:p-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute
              top-4
              right-4
              md:top-8
              md:right-8
              text-white
              text-3xl
              md:text-5xl
              hover:text-red-500
              transition
            "
          >
            ✕
          </button>

          {/* Video Container */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl"
          >
            <video controls autoPlay className="w-full rounded-3xl shadow-2xl">
              <source src={reelVideo} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ReelModal;
