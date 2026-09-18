import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Clock, Play, Star, Users, Award, Globe, ChevronDown, Lock, PlayCircle, Sparkles, ShieldCheck,} from "lucide-react";

export default function CourseDetails({ course, navigate }) {
  const [openSection, setOpenSection] = useState(0);

  if (!course) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0d18] px-6 text-slate-100 font-sans">
        <div className="text-center">
          <h1 className="text-3xl font-black text-white">Course not found</h1>
          <p className="mt-3 text-sm text-slate-400">Please return to the courses page.</p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate?.("courses")}
            className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 font-extrabold text-white shadow-lg"
          >
            Back to Courses
          </motion.button>
        </div>
      </main>
    );
  }

  const curriculum = [
    {
      title: "Introduction & Getting Started",
      lessons: [
        "Course Introduction",
        "Understanding the Fundamentals",
        "Setting Up Your Learning Environment",
        "Tools and Resources",
      ],
    },
    {
      title: "Core Concepts",
      lessons: [
        "Understanding the Core Concepts",
        "Working with Essential Tools",
        "Best Practices",
        "Common Mistakes to Avoid",
      ],
    },
    {
      title: "Practical Development",
      lessons: [
        "Building Your First Project",
        "Working with Real-World Examples",
        "Problem Solving Techniques",
        "Debugging and Optimization",
      ],
    },
    {
      title: "Advanced Concepts",
      lessons: [
        "Advanced Techniques",
        "Industry Best Practices",
        "Performance Optimization",
        "Professional Workflow",
      ],
    },
    {
      title: "Final Project",
      lessons: [
        "Project Planning",
        "Building the Complete Project",
        "Testing and Improvements",
        "Final Project Review",
      ],
    },
  ];

  const reviews = [
    {
      name: "Rahul Kumar",
      rating: 5,
      comment:
        "Excellent course! The lessons are easy to understand and the practical examples helped me learn much faster.",
      avatar: "RK",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment:
        "Very well structured course. The instructor explains everything clearly and the projects are really useful.",
      avatar: "PS",
    },
    {
      name: "Arun Raj",
      rating: 4,
      comment:
        "Great learning experience. I especially enjoyed the practical sections and real-world examples.",
      avatar: "AR",
    },
  ];

  const handleEnroll = () => {
    navigate?.("register");
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0d18] pb-20 pt-20 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 -top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 top-1/3 h-[550px] w-[550px] rounded-full bg-purple-600/30 blur-[140px]"
        />
      </div>

      <section className="relative overflow-hidden border-b border-white/10 bg-slate-900/50 backdrop-blur-2xl">
        <div className="mx-auto max-w-full px-4 py-10 sm:px-6 lg:px-8">
          <motion.button
            type="button"
            onClick={() => navigate?.("courses")}
            whileHover={{ x: -4 }}
            className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </motion.button>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-extrabold text-indigo-300 backdrop-blur-md">
                <Sparkles size={14} className="text-indigo-400" />
                {course.category}
              </div>

              <h1 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-5xl">
                {course.title}
              </h1>

              <p className="mt-4 max-w-full text-sm leading-relaxed text-slate-300 sm:text-base">
                {course.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <span className="font-black text-white">{course.rating}</span>
                </div>

                <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-slate-300 backdrop-blur-md">
                  <Users size={16} className="text-indigo-400" />
                  {course.students} students enrolled
                </div>

                <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-slate-300 backdrop-blur-md">
                  Created by <span className="font-bold text-white">{course.instructor}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ rotateY: -6, rotateX: 3, scale: 1.02 }}
              style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-slate-900/80 p-3 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-[280px] w-full object-cover sm:h-[340px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-indigo-500/50 ring-4 ring-white/20 sm:h-20 sm:w-20"
                  >
                    <Play size={26} className="ml-1 fill-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <div className="grid gap-3 sm:grid-cols-3">
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg backdrop-blur-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Clock size={20} />
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">Duration</p>
                <p className="mt-0.5 text-base font-black text-white">{course.duration}</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg backdrop-blur-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                  <BookOpen size={20} />
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">Lessons</p>
                <p className="mt-0.5 text-base font-black text-white">{course.lessons}</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg backdrop-blur-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-400">
                  <Award size={20} />
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">Skill Level</p>
                <p className="mt-0.5 text-base font-black text-white">{course.level}</p>
              </motion.div>
            </div>

        *  
            <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-2xl sm:p-8">
              <h2 className="text-xl font-black text-white sm:text-2xl">About This Course</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {course.description} This course is carefully crafted to deliver practical, job-ready knowledge using hands-on exercises, real-world case studies, and modern production workflows.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-2xl sm:p-8">
              <h2 className="text-xl font-black text-white sm:text-2xl">What You Will Learn</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Build practical real-world projects",
                  "Understand professional workflows",
                  "Learn industry best practices",
                  "Improve problem-solving skills",
                  "Work confidently with modern tools",
                  "Create portfolio-ready projects",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-950/40 p-3.5">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-300 sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-2xl sm:p-8">
              <div className="mb-5">
                <h2 className="text-xl font-black text-white sm:text-2xl">Course Curriculum</h2>
                <p className="mt-1 text-xs text-slate-400">
                  {course.lessons} lessons • {course.duration} total duration
                </p>
              </div>

              <div className="space-y-3">
                {curriculum.map((section, index) => {
                  const isOpen = openSection === index;
                  return (
                    <div key={section.title} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
                      <button
                        type="button"
                        onClick={() => setOpenSection(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-white/5 sm:p-5"
                      >
                        <div>
                          <p className="text-sm font-extrabold text-white sm:text-base">{section.title}</p>
                          <p className="mt-0.5 text-xs text-slate-400">{section.lessons.length} lessons</p>
                        </div>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-slate-400">
                          <ChevronDown size={18} />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden border-t border-white/5 bg-slate-900/40"
                          >
                            <div className="space-y-2 p-4">
                              {section.lessons.map((lesson) => (
                                <div key={lesson} className="flex items-center gap-3 rounded-xl p-2.5 text-xs text-slate-300 transition hover:bg-white/5 sm:text-sm">
                                  <PlayCircle size={16} className="text-indigo-400 shrink-0" />
                                  <span className="font-medium">{lesson}</span>
                                  <Lock size={13} className="ml-auto text-slate-500" />
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-2xl sm:p-8">
              <h2 className="text-xl font-black text-white sm:text-2xl">Student Reviews</h2>
              <div className="mt-5 space-y-4">
                {reviews.map((review) => (
                  <div key={review.name} className="rounded-2xl border border-white/5 bg-slate-950/40 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-xs font-black text-white shadow-md">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white sm:text-sm">{review.name}</p>
                        <div className="mt-0.5 flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-700"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ perspective: "1000px" }}
              className="overflow-hidden rounded-3xl border border-white/15 bg-slate-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            >
              <div className="p-6 sm:p-7">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Course Price</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ₹{course.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">₹{Number(course.price) + 2000}</span>
                </div>

                <motion.button
                  type="button"
                  onClick={handleEnroll}
                  whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px rgba(99,102,241,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 text-sm font-extrabold text-white shadow-xl transition-all"
                >
                  <span>Enroll Now</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-bold text-emerald-400">
                  <ShieldCheck size={14} />
                  30-Day Money-Back Guarantee
                </div>

                {/* INCLUDES LIST */}
                <div className="mt-6 border-t border-white/10 pt-6">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                    This course includes:
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <PlayCircle size={16} className="text-indigo-400" />
                      On-demand HD video lessons
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <BookOpen size={16} className="text-indigo-400" />
                      {course.lessons} comprehensive modules
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <Globe size={16} className="text-indigo-400" />
                      Full lifetime access
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <Award size={16} className="text-indigo-400" />
                      Certificate of completion
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 bg-slate-950/60 p-6">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Instructor</p>
                <div className="mt-3 flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-sm font-black text-white shadow-lg ring-1 ring-white/20">
                    {course.instructor
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-white">{course.instructor}</p>
                    <p className="text-xs text-slate-400">Senior Industry Specialist</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </main>
  );
}