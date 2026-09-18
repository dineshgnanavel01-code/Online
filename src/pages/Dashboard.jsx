import { motion } from "framer-motion";
import { BookOpen, PlayCircle, Award, Clock, ArrowRight, TrendingUp, CheckCircle, Sparkles,} from "lucide-react";

export default function Dashboard({ navigate }) {
  const stats = [
    {
      label: "Enrolled Courses",
      value: "3",
      icon: BookOpen,
      gradient: "from-blue-500 to-indigo-600",
      shadow: "shadow-indigo-500/20",
    },
    {
      label: "Hours Learned",
      value: "24",
      icon: Clock,
      gradient: "from-purple-500 to-pink-600",
      shadow: "shadow-purple-500/20",
    },
    {
      label: "Completed",
      value: "1",
      icon: CheckCircle,
      gradient: "from-emerald-400 to-teal-600",
      shadow: "shadow-teal-500/20",
    },
    {
      label: "Certificates",
      value: "1",
      icon: Award,
      gradient: "from-amber-400 to-orange-500",
      shadow: "shadow-amber-500/20",
    },
  ];

  const learningCourses = [
    {
      title: "Complete Web Development Bootcamp",
      progress: 68,
      lessons: "32 / 48 lessons",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    },
    {
      title: "React.js Modern Development",
      progress: 42,
      lessons: "17 / 40 lessons",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    },
    {
      title: "Python Programming for Beginners",
      progress: 25,
      lessons: "11 / 42 lessons",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-24 pt-24 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ perspective: 1000 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />

          <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-300">
                <Sparkles size={14} className="text-amber-400" />
                Student Dashboard
              </div>

              <h1 className="text-3xl font-black text-white sm:text-4xl">
                Welcome back,{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Learner!
                </span>{" "}
                👋
              </h1>

              <p className="mt-2 max-w-xl text-xs text-slate-300 sm:text-sm">
                Continue your courses and keep building your skills every day.
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotateY: 180, scale: 1.1 }}
              style={{ transformStyle: "preserve-3d" }}
              className="hidden h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-indigo-300 shadow-xl backdrop-blur-md md:flex"
            >
              <TrendingUp size={36} />
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{
                  rotateX: 8,
                  rotateY: -8,
                  y: -6,
                  scale: 1.02,
                }}
                style={{ perspective: 1000 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-indigo-500/40"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-black text-white">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${stat.gradient} text-white shadow-lg ${stat.shadow} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={22} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">
                Continue Learning
              </h2>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                Pick up where you left off.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate?.("courses")}
              className="hidden items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-400 transition-all hover:gap-3 hover:text-indigo-300 sm:flex"
            >
              <span>Browse Courses</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {learningCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  rotateX: 4,
                  rotateY: -4,
                  y: -8,
                }}
                style={{ perspective: 1000 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="line-clamp-2 text-base font-black text-white group-hover:text-indigo-300 transition-colors">
                    {course.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-400">{course.lessons}</span>
                    <span className="font-black text-indigo-400">
                      {course.progress}%
                    </span>
                  </div>

                  <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-sm"
                    />
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-indigo-600/25 transition-all hover:from-indigo-500 hover:to-purple-500"
                  >
                    <PlayCircle size={18} />
                    <span>Continue Learning</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.button
          type="button"
          onClick={() => navigate?.("courses")}
          whileTap={{ scale: 0.96 }}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-indigo-500/20 sm:hidden"
        >
          <span>Browse More Courses</span>
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </main>
  );
}