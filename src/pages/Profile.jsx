import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, BookOpen, Award, Clock, Settings, Edit3, Sparkles, GraduationCap, Trophy, Target, Zap,} from "lucide-react";

function TiltCard({ children, className = "" }) {
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    );
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ transform }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}

function FloatingParticle({ className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.7, 0],
        y: [0, -40, -80],
        x: [0, 15, -10],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute h-1.5 w-1.5 rounded-full bg-indigo-400 blur-[1px] ${className}`}
    />
  );
}

export default function Profile() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 pb-20 pt-32 text-white">


      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-indigo-600/20
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 70, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-80
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-600/20
          blur-[130px]
        "
      />

      <FloatingParticle className="left-[15%] top-[30%]" delay={0} />
      <FloatingParticle className="left-[30%] top-[70%]" delay={1} />
      <FloatingParticle className="left-[70%] top-[25%]" delay={2} />
      <FloatingParticle className="left-[82%] top-[65%]" delay={3} />
      <FloatingParticle className="left-[55%] top-[85%]" delay={1.5} />

      <div className="relative mx-auto max-w-6xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            rotateX: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <TiltCard>
            <section
              className="
                group
                relative
                mb-8
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.06]
                p-6
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                backdrop-blur-2xl
                sm:p-8
              "
            >

              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-px
                  w-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-indigo-400
                  to-transparent
                "
              />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  border
                  border-indigo-400/10
                "
              />

              <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-5">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotateY: 180,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    className="
                      relative
                      flex
                      h-24
                      w-24
                      shrink-0
                      items-center
                      justify-center
                      rounded-[28px]
                      bg-gradient-to-br
                      from-indigo-500
                      via-purple-500
                      to-fuchsia-500
                      text-4xl
                      font-black
                      shadow-[0_20px_50px_rgba(99,102,241,0.35)]
                    "
                  >
                    D

                    <motion.div
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 0.1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-[28px]
                        bg-indigo-400
                        blur-xl
                        -z-10
                      "
                    />

                    <span
                      className="
                        absolute
                        -right-1
                        -top-1
                        h-5
                        w-5
                        rounded-full
                        border-4
                        border-slate-950
                        bg-emerald-400
                        shadow-[0_0_15px_rgba(52,211,153,0.9)]
                      "
                    />
                  </motion.div>

                  <div>

                    <motion.p
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="
                        mb-1
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-indigo-300
                      "
                    >
                      <Sparkles size={15} />
                      Welcome back
                    </motion.p>

                    <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                      Dinesh
                    </h1>

                    <p className="mt-1 text-sm text-white/45">
                      Learnify Student
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                        ● Active
                      </span>

                      <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-bold text-indigo-300">
                        Intermediate
                      </span>
                    </div>
                  </div>
                </div>


                <motion.button
                  whileHover={{
                    scale: 1.06,
                    rotateX: 5,
                    rotateY: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    px-5
                    py-3
                    text-sm
                    font-bold
                    shadow-lg
                    transition
                    hover:bg-white/15
                  "
                >
                  <Edit3 size={16} />
                  Edit Profile
                </motion.button>

              </div>
            </section>
          </TiltCard>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">


          <TiltCard className="lg:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                h-full
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.05]
                p-6
                shadow-[0_25px_70px_rgba(0,0,0,0.25)]
                backdrop-blur-2xl
                sm:p-7
              "
            >
              <div className="mb-6 flex items-center justify-between">

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                    Account
                  </p>

                  <h2 className="text-xl font-black">
                    Personal Information
                  </h2>
                </div>

                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
                    rounded-xl
                    bg-indigo-500/10
                    p-3
                    text-indigo-300
                  "
                >
                  <User size={20} />
                </motion.div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <InfoCard
                  icon={User}
                  label="Full Name"
                  value="Dinesh"
                />

                <InfoCard
                  icon={Mail}
                  label="Email"
                  value="dinesh@example.com"
                />

                <InfoCard
                  icon={BookOpen}
                  label="Learning Level"
                  value="Intermediate"
                />

                <InfoCard
                  icon={Clock}
                  label="Member Since"
                  value="2026"
                />

              </div>
            </motion.section>
          </TiltCard>

       

          <TiltCard>
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                h-full
                rounded-[30px]
                border
                border-indigo-400/10
                bg-gradient-to-br
                from-indigo-500/20
                via-purple-500/10
                to-fuchsia-500/10
                p-6
                shadow-[0_25px_70px_rgba(99,102,241,0.15)]
                backdrop-blur-2xl
              "
            >
              <div className="mb-6">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
                  Progress
                </p>

                <h2 className="text-xl font-black">
                  Learning Stats
                </h2>
              </div>

              <div className="space-y-4">

                <Stat
                  icon={BookOpen}
                  label="Courses Enrolled"
                  value="8"
                />

                <Stat
                  icon={Trophy}
                  label="Courses Completed"
                  value="4"
                />

                <Stat
                  icon={Clock}
                  label="Learning Hours"
                  value="32h"
                />

              </div>
            </motion.section>
          </TiltCard>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            mt-6
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.05]
            p-6
            backdrop-blur-2xl
            sm:p-7
          "
        >
          <div className="mb-6">

            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
              Milestones
            </p>

            <h2 className="text-xl font-black">
              Your Achievements
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            <Achievement
              icon={GraduationCap}
              title="Fast Learner"
              text="Completed your first course"
            />

            <Achievement
              icon={Target}
              title="Goal Setter"
              text="Reached your weekly learning goal"
            />

            <Achievement
              icon={Zap}
              title="Learning Streak"
              text="7 days continuous learning"
            />

          </div>
        </motion.section>


        <TiltCard>
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              mt-6
              rounded-[30px]
              border
              border-white/10
              bg-white/[0.05]
              p-6
              backdrop-blur-2xl
              sm:p-7
            "
          >
            <motion.div
              whileHover={{
                x: 5,
              }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">

                <motion.div
                  whileHover={{
                    rotate: 180,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                  }}
                  className="
                    rounded-2xl
                    bg-indigo-500/15
                    p-3
                    text-indigo-300
                  "
                >
                  <Settings size={22} />
                </motion.div>

                <div>
                  <h2 className="font-black">
                    Account Settings
                  </h2>

                  <p className="mt-1 text-sm text-white/45">
                    Manage your Learnify account preferences
                  </p>
                </div>

              </div>

              <motion.div
                whileHover={{
                  x: 5,
                }}
                className="hidden text-white/30 sm:block"
              >
                →
              </motion.div>
            </motion.div>
          </motion.section>
        </TiltCard>

      </div>
    </main>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
        rotateX: 3,
        rotateY: -3,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
        group
        rounded-2xl
        border
        border-white/10
        bg-black/10
        p-4
        transition
        hover:border-indigo-400/20
        hover:bg-indigo-500/[0.07]
      "
    >
      <div className="mb-3 flex items-center gap-2 text-indigo-300">

        <motion.div
          whileHover={{
            rotate: 15,
            scale: 1.15,
          }}
          className="
            rounded-lg
            bg-indigo-500/10
            p-2
          "
        >
          <Icon size={16} />
        </motion.div>

        <span className="text-[11px] font-bold uppercase tracking-wider">
          {label}
        </span>

      </div>

      <p className="truncate font-bold text-white">
        {value}
      </p>
    </motion.div>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <motion.div
      whileHover={{
        x: 5,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-black/10
        p-4
        transition
        hover:border-indigo-400/20
        hover:bg-white/[0.06]
      "
    >
      <div className="flex items-center gap-3">

        <motion.div
          whileHover={{
            rotateY: 180,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            rounded-xl
            bg-indigo-500/15
            p-2.5
            text-indigo-300
          "
        >
          <Icon size={18} />
        </motion.div>

        <span className="text-sm text-white/65">
          {label}
        </span>

      </div>

      <motion.span
        whileHover={{
          scale: 1.15,
        }}
        className="text-xl font-black"
      >
        {value}
      </motion.span>
    </motion.div>
  );
}

function Achievement({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        rotateX: 5,
        rotateY: -4,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-black/10
        p-5
      "
    >
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="
          absolute
          left-0
          top-0
          h-full
          w-1/3
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      <div className="relative">

        <motion.div
          whileHover={{
            rotate: 360,
            scale: 1.1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-indigo-500/20
            to-purple-500/20
            text-indigo-300
          "
        >
          <Icon size={22} />
        </motion.div>

        <h3 className="font-black">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-white/45">
          {text}
        </p>

      </div>
    </motion.div>
  );
}