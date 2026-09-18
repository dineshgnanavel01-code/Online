import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Sparkles, BookOpen } from "lucide-react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Courses({ openCourse }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Development",
    "Design",
    "Programming",
    "Business",
    "Marketing",
    "Data Science",
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const text = `${course.title} ${course.instructor} ${course.category}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      const matchesCategory = category === "All" || course.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0a0d18] px-4 pb-24 pt-28 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-indigo-600/30 blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-purple-600/30 blur-[140px]"
        />
        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-extrabold text-indigo-300 shadow-sm backdrop-blur-md"
          >
            <Sparkles size={14} className="text-indigo-400" />
            Learnify Courses
          </motion.div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Explore Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-full text-sm leading-relaxed text-slate-400 sm:text-base">
            Learn practical skills from expert instructors and build your future with Learnify.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{ perspective: "1000px" }}
          className="mb-8 rounded-3xl border border-white/15 bg-slate-900/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses, instructors..."
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 py-3.5 pl-11 pr-4 text-sm font-medium text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-slate-950 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3 text-slate-300 transition-all hover:border-indigo-500/50 hover:bg-slate-950 hover:text-white active:scale-95 sm:w-auto"
            >
              <SlidersHorizontal size={18} className="text-indigo-400" />
              <span className="text-xs font-bold sm:hidden">Filter Options</span>
            </button>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((item) => {
              const isSelected = category === item;
              return (
                <motion.button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative whitespace-nowrap rounded-full px-4 py-2 text-xs font-extrabold transition-all duration-300 ${
                    isSelected
                      ? "text-white shadow-lg shadow-indigo-500/30"
                      : "border border-white/5 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <div className="mb-6 flex items-center justify-between px-1">
          <p className="text-xs font-bold text-slate-400">
            Showing{" "}
            <span className="font-black text-indigo-400">{filteredCourses.length}</span>{" "}
            available courses
          </p>
        </div>

        <AnimatePresence mode="wait">
          {filteredCourses.length ? (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                  style={{ perspective: "1000px" }}
                  className="transition-transform duration-300"
                >
                  <CourseCard course={course} openCourse={openCourse} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-12 text-center shadow-2xl backdrop-blur-2xl"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                <BookOpen size={32} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-white">No courses found</h3>
              <p className="mt-1 text-xs text-slate-400">
                Try adjusting your search query or selecting a different category filter.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}