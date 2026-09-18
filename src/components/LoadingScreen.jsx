import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const interval = 30;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete?.();
          }, 300);

          return 100;
        }

        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.08,
          filter: "blur(15px)",
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          overflow-hidden
          bg-slate-950
        "
      >
        {/* Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-600/30
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-10
            h-72
            w-72
            rounded-full
            bg-purple-600/20
            blur-[100px]
          "
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-0
            h-80
            w-80
            rounded-full
            bg-fuchsia-500/20
            blur-[110px]
          "
        />

        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [-20, -140],
              x: [0, (index % 2 === 0 ? 1 : -1) * 40],
            }}
            transition={{
              duration: 2.5 + (index % 4),
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-indigo-300
              shadow-[0_0_10px_rgba(129,140,248,0.9)]
            "
            style={{
              left: `${10 + ((index * 17) % 80)}%`,
              top: `${30 + ((index * 13) % 50)}%`,
            }}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center">
          <div
            className="relative mb-8"
            style={{
              perspective: "1000px",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                absolute
                inset-[-30px]
                rounded-[40px]
                bg-indigo-500/30
                blur-3xl
              "
            />

            {/* Rotating Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -inset-5
                rounded-[35px]
                border
                border-dashed
                border-indigo-400/30
              "
            />

            <motion.div
              animate={{
                rotateY: [-12, 12, -12],
                rotateX: [5, -5, 5],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="
                relative
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-[28px]
                border
                border-white/20
                bg-gradient-to-br
                from-indigo-500
                via-purple-600
                to-fuchsia-600
                shadow-[0_25px_60px_rgba(99,102,241,0.5)]
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              >
                <BookOpen
                  size={52}
                  strokeWidth={1.5}
                  className="text-white"
                />
              </motion.div>

              <motion.div
                animate={{
                  x: ["-150%", "150%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="
                  absolute
                  inset-y-0
                  w-8
                  rotate-12
                  bg-white/30
                  blur-md
                "
              />

              <motion.div
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -right-3
                  -top-3
                  text-cyan-300
                "
              >
                <Sparkles size={22} />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="text-center"
          >
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Learn
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                ify
              </span>
            </h1>

            <motion.p
              animate={{
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="mt-2 text-sm font-medium tracking-[0.3em] text-white/50 uppercase"
            >
              Learn • Build • Grow
            </motion.p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="mt-10 w-64 sm:w-80">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-white/40">
                Preparing your learning space
              </span>

              <span className="text-xs font-bold text-indigo-300">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="relative h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="
                  absolute
                  inset-y-0
                  left-0
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-500
                  via-purple-500
                  to-fuchsia-500
                  shadow-[0_0_15px_rgba(139,92,246,0.8)]
                "
                style={{
                  width: `${progress}%`,
                }}
              />

              {/* Progress Bar Shine */}
              <motion.div
                animate={{
                  x: ["-100%", "500%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  inset-y-0
                  w-16
                  bg-white/40
                  blur-sm
                "
              />
            </div>
          </div>

          {/* Animated Loading Dots */}
          <div className="mt-6 flex gap-1.5">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: dot * 0.15,
                }}
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-indigo-400
                "
              />
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-6 text-center">
          <p className="text-[11px] text-white/25">
            Your journey to smarter learning starts here
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}