import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play, Star, Award, Code2, Palette, Megaphone, Database, Sparkles, CheckCircle, Users, BookOpen, ChevronRight, ShieldCheck, TrendingUp,} from "lucide-react";

import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const instructors = [
  {
    name: "Arun Kumar",
    role: "Web Development Expert",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "4.9",
    students: "12K+",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Design Lead",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: "4.8",
    students: "9.5K+",
  },
  {
    name: "Vikram Singh",
    role: "Data Science Specialist",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: "4.9",
    students: "15K+",
  },
];

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Frontend Developer @ TechCorp",
    text: "Learnify transformed my learning path. The practical hands-on projects helped me build a portfolio that landed my first engineering job.",
    avatar: "RK",
  },
  {
    name: "Anjali Sharma",
    role: "UI Designer @ CreativeLab",
    text: "The course structure and interactive layout make design concepts easy to master. High-quality instruction with real-world applications.",
    avatar: "AS",
  },
  {
    name: "Arun Raj",
    role: "Python Developer",
    text: "From complete beginner to confident developer. The step-by-step curriculum and quick support made all the difference in my career switch.",
    avatar: "AR",
  },
];

const categories = [
  { name: "Development", icon: Code2, count: "45+ Courses", color: "from-blue-500 to-indigo-600" },
  { name: "Design", icon: Palette, count: "30+ Courses", color: "from-purple-500 to-pink-600" },
  { name: "Marketing", icon: Megaphone, count: "20+ Courses", color: "from-amber-500 to-orange-600" },
  { name: "Data Science", icon: Database, count: "25+ Courses", color: "from-emerald-500 to-teal-600" },
];

export default function Home({ navigate, openCourse }) {
  // Hero 3D Card Tilt States
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]), {
    stiffness: 250,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]), {
    stiffness: 250,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#080b14] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-indigo-950/40 via-[#0a0d18] to-[#080b14] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 -top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[140px]"
          />
        </div>

        <div className="relative mx-auto grid max-w-full items-center gap-12 lg:grid-cols-2 lg:py-12">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-black text-indigo-300 backdrop-blur-md">
              <Sparkles size={14} className="text-amber-400" />
              <span>Learn Smarter • Build Faster</span>
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-6xl">
              Master New Skills.
              <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Accelerate Your Future.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Gain job-ready practical knowledge through industry-aligned courses, real-world development challenges, and continuous expert mentorship.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.button
                type="button"
                onClick={() => navigate?.("courses")}
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 25px rgba(99,102,241,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-indigo-500/20 transition-all"
              >
                <span>Explore Courses</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => navigate?.("register")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-extrabold text-slate-200 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
              >
                <Play size={16} className="fill-indigo-400 text-indigo-400" />
                <span>Start Learning Free</span>
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">25K+</p>
                <p className="mt-1 text-xs font-semibold text-slate-400">Active Students</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">120+</p>
                <p className="mt-1 text-xs font-semibold text-slate-400">Expert Courses</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">98%</p>
                <p className="mt-1 text-xs font-semibold text-slate-400">Success Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: "1200px",
            }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative rounded-3xl border border-white/15 bg-slate-900/80 p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
                  alt="Students learning"
                  className="h-[320px] w-full object-cover sm:h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>

              <motion.div
                style={{ transform: "translateZ(40px)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/90 p-3.5 shadow-2xl backdrop-blur-xl sm:-left-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Certificates</p>
                  <p className="text-sm font-black text-white">10,000+ Issued</p>
                </div>
              </motion.div>

              <motion.div
                style={{ transform: "translateZ(50px)" }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/90 p-3.5 shadow-2xl backdrop-blur-xl sm:-right-6"
              >
                <div className="flex items-center gap-1.5 rounded-xl bg-amber-400/20 px-2.5 py-1 text-amber-400">
                  <Star size={16} className="fill-amber-400" />
                  <span className="text-sm font-black">4.9</span>
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Rating</p>
                  <p className="text-xs font-bold text-slate-200">Top Rated Academy</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">Explore Domains</p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">What Do You Want to Learn?</h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => navigate?.("courses")}
                  className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-900/90"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${category.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-base font-black text-white">{category.name}</h3>
                  <p className="mt-1 text-xs text-slate-400">{category.count}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
                    <span>Browse Courses</span>
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-slate-900/40 px-4 py-16 backdrop-blur-2xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">Curated Library</p>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">Popular Courses</h2>
            </div>
            <button
              type="button"
              onClick={() => navigate?.("courses")}
              className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-indigo-400 transition hover:text-white"
            >
              <span>View All Courses</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} openCourse={openCourse} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">Mentorship</p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">Learn From Industry Professionals</h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="h-16 w-16 rounded-2xl object-cover ring-2 ring-indigo-500/40"
                  />
                  <div>
                    <h3 className="text-base font-extrabold text-white">{instructor.name}</h3>
                    <p className="mt-0.5 text-xs text-slate-400">{instructor.role}</p>
                    <div className="mt-2 flex items-center gap-3 text-xs font-semibold text-slate-300">
                      <span className="flex items-center gap-1 text-amber-400">
                        <Star size={13} className="fill-amber-400" />
                        {instructor.rating}
                      </span>
                      <span>•</span>
                      <span>{instructor.students} Students</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-gradient-to-b from-slate-900/80 to-[#080b14] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-400">Testimonials</p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">Trusted By Ambitious Learners</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl"
              >
                <div>
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">“{item.text}”</p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-xs font-black text-white">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-white">{item.name}</p>
                    <p className="text-[11px] text-slate-400">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-full overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-slate-900/80 p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/40">
            <CheckCircle size={28} />
          </div>

          <h2 className="mt-5 text-2xl font-black text-white sm:text-4xl">Ready to Start Your Learning Journey?</h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            Join thousands of developers, designers, and marketers who are upgrading their skills every day.
          </p>

          <motion.button
            type="button"
            onClick={() => navigate?.("register")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-4 text-xs font-extrabold text-white shadow-xl shadow-indigo-500/25 sm:text-sm"
          >
            <span>Create Free Account</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </section>
    </main>
  );
}