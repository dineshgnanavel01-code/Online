import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  LayoutDashboard,
  Menu,
  Sparkles,
  User,
  X,
} from "lucide-react";

export default function Navbar({ page, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    {
      label: "Home",
      page: "home",
      icon: BookOpen,
    },
    {
      label: "Courses",
      page: "courses",
      icon: BookOpen,
    },
    {
      label: "Dashboard",
      page: "dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Profile",
      page: "profile",
      icon: User,
    },
  ];

  const go = (target) => {
    navigate?.(target);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-4 sm:pt-4 md:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-full"
      >
        <motion.div
          whileHover={{
            rotateX: 1,
            rotateY: -1,
            y: -1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="
            relative overflow-hidden
            rounded-2xl
            border border-white/20
            bg-slate-950/80
            text-white
            backdrop-blur-2xl
            shadow-[0_20px_50px_rgba(0,0,0,0.4)]
          "
        >
          {/* Background glow */}
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -20, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none absolute
              -left-20 -top-20
              h-40 w-40
              rounded-full
              bg-indigo-600/30
              blur-3xl
            "
          />

          <motion.div
            animate={{
              x: [0, -70, 0],
              y: [0, 25, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none absolute
              -right-20 -bottom-20
              h-44 w-44
              rounded-full
              bg-purple-600/25
              blur-3xl
            "
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <div className="relative flex min-h-[56px] items-center justify-between px-3 sm:min-h-[64px] sm:px-5 md:px-6">

            {/* LOGO / LEARNIFY */}
            <motion.button
              type="button"
              onClick={() => go("profile")}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 sm:gap-3"
              title="Open Profile"
            >
              <motion.div
                variants={{
                  hover: {
                    scale: 1.4,
                    opacity: 0.8,
                  },
                }}
                className="
                  absolute left-0
                  h-8 w-8 sm:h-10 sm:w-10
                  rounded-xl
                  bg-indigo-500/40
                  blur-xl
                "
              />

              <motion.div
                variants={{
                  hover: {
                    rotateY: 180,
                    rotateX: 10,
                    scale: 1.12,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 14,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="
                  relative flex
                  h-8 w-8 sm:h-9 sm:w-9
                  items-center justify-center
                  rounded-xl
                  border border-indigo-300/30
                  bg-gradient-to-br
                  from-indigo-500
                  via-purple-500
                  to-fuchsia-500
                  text-white
                  shadow-[0_4px_20px_rgba(99,102,241,0.45)]
                "
              >
                <BookOpen size={18} className="sm:hidden" />
                <BookOpen size={20} className="hidden sm:block" />

                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute -right-0.5 -top-0.5
                    h-2 w-2 sm:h-2.5 sm:w-2.5
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_10px_rgba(103,232,249,1)]
                  "
                />
              </motion.div>

              <span className="relative text-base font-black tracking-tight sm:text-lg">
                Learn
                <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  ify
                </span>
              </span>
            </motion.button>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-1 md:flex">
              {links.map((link) => {
                const Icon = link.icon;
                const active = page === link.page;

                return (
                  <motion.button
                    key={link.page}
                    type="button"
                    onClick={() => go(link.page)}
                    whileHover={{
                      y: -2,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="relative"
                  >
                    {active && (
                      <motion.div
                        layoutId="activeNavPill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 28,
                        }}
                        className="
                          absolute inset-0
                          rounded-xl
                          bg-gradient-to-r
                          from-indigo-500/30
                          via-purple-500/30
                          to-indigo-500/20
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_25px_rgba(99,102,241,0.2)]
                        "
                      />
                    )}

                    <div
                      className={`
                        relative flex min-h-10
                        items-center gap-1.5
                        rounded-xl px-3
                        text-xs font-bold
                        transition-colors
                        lg:px-4 lg:text-sm
                        ${
                          active
                            ? "text-white"
                            : "text-white/70 hover:text-white"
                        }
                      `}
                    >
                      <Icon size={15} />

                      {link.label}

                      {active && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="
                            absolute bottom-1 left-3 right-3
                            h-[2px]
                            rounded-full
                            bg-gradient-to-r
                            from-indigo-400
                            to-purple-400
                            shadow-[0_0_10px_rgba(129,140,248,0.9)]
                          "
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* DESKTOP BUTTONS */}
            <div className="hidden items-center gap-2 md:flex">
              <motion.button
                type="button"
                onClick={() => go("login")}
                whileHover={{
                  scale: 1.04,
                  rotateX: 4,
                  rotateY: -4,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  via-indigo-600
                  to-purple-600
                  px-3.5 py-2
                  text-xs font-black
                  text-white
                  shadow-[0_8px_25px_rgba(124,58,237,0.4)]
                  lg:px-5 lg:py-2.5 lg:text-sm
                "
              >
                Login
              </motion.button>

              <motion.button
                type="button"
                onClick={() => go("register")}
                whileHover={{
                  scale: 1.04,
                  rotateX: 4,
                  rotateY: -4,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="
                  flex items-center gap-1.5
                  rounded-xl
                  bg-gradient-to-r
                  from-indigo-500
                  via-purple-500
                  to-fuchsia-500
                  px-3.5 py-2
                  text-xs font-black
                  text-white
                  shadow-[0_8px_25px_rgba(99,102,241,0.4)]
                  lg:px-5 lg:py-2.5 lg:text-sm
                "
              >
                <Sparkles size={14} />
                Get Started
                <ArrowRight size={15} />
              </motion.button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              type="button"
              whileTap={{
                scale: 0.88,
                rotate: 8,
              }}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                border border-white/20
                bg-white/10
                text-white
                shadow-md
                md:hidden
              "
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* MOBILE NAVIGATION */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden border-t border-white/10 md:hidden"
              >
                <div className="space-y-2 p-3 sm:p-4">

                  {links.map((link, index) => {
                    const Icon = link.icon;
                    const active = page === link.page;

                    return (
                      <motion.button
                        key={link.page}
                        type="button"
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        whileHover={{
                          x: 4,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() => go(link.page)}
                        className={`
                          flex w-full
                          items-center justify-between
                          rounded-xl border
                          px-3.5 py-2.5
                          text-xs font-bold
                          sm:text-sm
                          ${
                            active
                              ? "border-indigo-400/30 bg-indigo-500/20 text-white"
                              : "border-white/5 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                          }
                        `}
                      >
                        <span className="flex items-center gap-2.5">
                          <span
                            className={`
                              flex h-7 w-7
                              items-center justify-center
                              rounded-lg
                              ${
                                active
                                  ? "bg-indigo-500 text-white"
                                  : "bg-white/10"
                              }
                            `}
                          >
                            <Icon size={15} />
                          </span>

                          {link.label}
                        </span>

                        <ChevronRight
                          size={15}
                          className="opacity-50"
                        />
                      </motion.button>
                    );
                  })}

                  {/* MOBILE LOGIN / REGISTER */}
                  <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => go("login")}
                      className="
                        rounded-xl
                        bg-gradient-to-r
                        from-violet-600
                        to-indigo-600
                        py-2.5
                        text-xs font-black
                        text-white
                        sm:text-sm
                      "
                    >
                      Login
                    </motion.button>

                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => go("register")}
                      className="
                        flex items-center justify-center gap-1.5
                        rounded-xl
                        bg-gradient-to-r
                        from-indigo-500
                        to-purple-500
                        py-2.5
                        text-xs font-black
                        text-white
                        sm:text-sm
                      "
                    >
                      Get started
                      <ArrowRight size={15} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </header>
  );
}