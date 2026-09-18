import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Star, Clock, BookOpen, ArrowRight, Sparkles, User,Tag, ShieldCheck,} from "lucide-react";

export default function CourseCard({ course, openCourse, onEnroll }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleViewCourse = () => {
    if (course && typeof openCourse === "function") {
      openCourse(course);
    }
  };

  const handleEnrollClick = (e) => {
    e.stopPropagation();
    if (typeof onEnroll === "function") {
      onEnroll(course);
    } else {
      handleViewCourse();
    }
  };

  if (!course) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full select-none"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onClick={handleViewCourse}
        className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-3 shadow-xl backdrop-blur-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 active:scale-[0.99]"
      >
        <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-indigo-500/0 via-purple-500/20 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
        >
          <motion.img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-indigo-300 backdrop-blur-md">
            <Tag size={12} className="text-indigo-400" />
            {course.category}
          </div>

          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 ring-2 ring-white/20">
            <Sparkles size={15} />
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-900/80 px-2.5 py-1 text-xs font-black text-amber-400 backdrop-blur-md">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span>{course.rating}</span>
            {course.students && (
              <span className="text-[10px] font-normal text-slate-400">
                ({course.students})
              </span>
            )}
          </div>
        </div>

        <div
          style={{ transform: "translateZ(20px)" }}
          className="flex flex-col justify-between p-4 sm:p-5"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <User size={13} className="text-indigo-400" />
              <span>
                By <strong className="text-slate-200">{course.instructor}</strong>
              </span>
            </div>

            <h3 className="mt-2 line-clamp-2 text-base font-black leading-snug text-white transition-colors group-hover:text-indigo-400 sm:text-lg">
              {course.title}
            </h3>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-y border-white/10 py-2.5 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock size={14} className="text-indigo-400" />
                {course.duration}
              </span>

              <span className="flex items-center gap-1.5 font-medium">
                <BookOpen size={14} className="text-purple-400" />
                {course.lessons} Lessons
              </span>

              {course.level && (
                <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-bold text-slate-400 border border-white/5">
                  {course.level}
                </span>
              )}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                Course Price
              </p>
              <div className="flex items-baseline gap-1.5">
                <p className="text-xl font-black bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent sm:text-2xl">
                  ₹{course.price}
                </p>
                {course.originalPrice && (
                  <p className="text-xs text-slate-500 line-through">
                    ₹{course.originalPrice}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={handleEnrollClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2.5 text-xs font-black text-white shadow-md shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 sm:px-5 sm:py-3 sm:text-sm"
              >
                <span>Enroll Now</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}