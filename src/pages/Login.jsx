import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  Lock,
  Mail,
  Play,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Learn from experts",
    text: "Practical courses designed for real-world skills.",
  },
  {
    icon: Trophy,
    title: "Build your career",
    text: "Track progress and earn certificates.",
  },
  {
    icon: Users,
    title: "Join a community",
    text: "Learn alongside thousands of students.",
  },
];

export default function Login({ navigate }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate?.("dashboard");
    }, 700);
  };

  return (
    <main className="relative min-h-svh w-full overflow-hidden bg-[#0a0d18] font-sans text-slate-100 selection:bg-indigo-500 selection:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[120px]"
        />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-svh w-full max-w-full items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-10">
          
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:col-span-7 lg:block"
          >
            <motion.button
              type="button"
              onClick={() => navigate?.("home")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mb-6 flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-indigo-500/20 ring-1 ring-white/20">
                <GraduationCap size={24} />
              </div>

              <div className="flex flex-col justify-center min-w-0">
                <p className="text-xl font-black leading-none tracking-tight text-white truncate">
                  Learnify
                </p>
                <p className="mt-1 text-[11px] font-medium leading-none text-slate-400 truncate">
                  Learn. Grow. Achieve.
                </p>
              </div>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-bold text-indigo-300 backdrop-blur-md"
            >
              <Sparkles size={13} className="text-indigo-400" />
              Your learning space is ready
            </motion.div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-white xl:text-5xl">
              Learn something{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                amazing today.
              </span>
            </h1>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400 xl:text-base">
              Continue where you left off, explore new skills, and turn your curiosity into meaningful progress with Learnify.
            </p>

            <div
              className="relative mt-6 h-[200px] w-full max-w-[2480px]"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute left-[10%] top-[5%] h-44 w-44 rounded-full border border-indigo-500/15"
              />

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotateY: [0, 4, 0],
                  rotateX: [0, -3, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02, rotateY: -4, rotateX: 2 }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute left-[2%] top-[10px] w-[270px] rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/30">
                    <Play size={15} className="ml-0.5 fill-current" />
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-extrabold text-emerald-400 ring-1 ring-emerald-500/20">
                    IN PROGRESS
                  </span>
                </div>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  CURRENT COURSE
                </p>
                <h3 className="mt-0.5 text-sm font-bold text-white">Modern Web Development</h3>

                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "72%" }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>

                <div className="mt-1.5 flex justify-between text-[10px] font-bold text-slate-400">
                  <span>72% completed</span>
                  <span>18 / 25 lessons</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[2%] top-0 flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                  <Trophy size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Achievement</p>
                  <p className="text-xs font-bold text-white">New Certificate</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 right-[8%] flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                  <Zap size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Learning streak</p>
                  <p className="text-xs font-bold text-white">12 Days 🔥</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-5 grid max-w-lg gap-2.5 sm:grid-cols-3">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-all duration-300"
                  >
                    <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                      <Icon size={14} />
                    </div>
                    <h3 className="text-xs font-bold text-white">{item.title}</h3>
                    <p className="mt-0.5 text-[10px] leading-snug text-slate-400">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: "1000px" }}
            className="mx-auto w-full max-w-[1420px] lg:col-span-5"
          >
            <div className="mb-5 lg:hidden">
              <div className="flex items-center justify-center gap-3">
                <motion.div
                  whileHover={{ rotateY: 180, scale: 1.05 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-indigo-500/20"
                >
                  <GraduationCap size={22} />
                </motion.div>
                <div className="text-left">
                  <h1 className="text-xl font-black leading-none tracking-tight text-white">
                    Learnify
                  </h1>
                  <p className="mt-1 text-[11px] font-medium leading-none text-slate-400">
                    Learn. Grow. Achieve.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ rotateX: 0.5, rotateY: -0.5 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-2xl sm:p-7"
            >
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#6366f1,#a855f7,#ec4899,#6366f1)] bg-[length:200%_100%]"
              />

              <div className="relative mb-5 hidden lg:block">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/30">
                    <Lock size={16} />
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-extrabold text-emerald-400 ring-1 ring-emerald-500/20">
                    <ShieldCheck size={12} />
                    SECURE
                  </div>
                </div>

                <h2 className="text-xl font-black text-white xl:text-2xl">Sign in to Learnify</h2>
                <p className="mt-0.5 text-xs text-slate-400">Enter your credentials to continue learning.</p>
              </div>

              <form onSubmit={handleSubmit} className="relative space-y-3.5">
                <div>
                  <label htmlFor="email" className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    Email address
                  </label>
                  <div
                    className={`flex items-center rounded-xl border bg-slate-950/60 px-3 transition-all duration-200 ${
                      errors.email
                        ? "border-red-500 ring-2 ring-red-500/20"
                        : "border-white/10 focus-within:border-indigo-500 focus-within:bg-slate-950 focus-within:ring-2 focus-within:ring-indigo-500/20"
                    }`}
                  >
                    <Mail size={16} className={errors.email ? "text-red-400" : "text-slate-400"} />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full bg-transparent px-2.5 py-2.5 text-xs font-medium text-white outline-none placeholder:text-slate-500 sm:text-sm"
                    />
                  </div>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 text-[11px] font-medium text-red-400"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <label htmlFor="password" className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => navigate?.("forgot-password")}
                      className="text-[11px] font-bold text-indigo-400 transition hover:text-indigo-300"
                    >
                      Forgot?
                    </button>
                  </div>
                  <div
                    className={`flex items-center rounded-xl border bg-slate-950/60 px-3 transition-all duration-200 ${
                      errors.password
                        ? "border-red-500 ring-2 ring-red-500/20"
                        : "border-white/10 focus-within:border-indigo-500 focus-within:bg-slate-950 focus-within:ring-2 focus-within:ring-indigo-500/20"
                    }`}
                  >
                    <Lock size={16} className={errors.password ? "text-red-400" : "text-slate-400"} />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      autoComplete="current-password"
                      className="w-full bg-transparent px-2.5 py-2.5 text-xs font-medium text-white outline-none placeholder:text-slate-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-slate-400 transition hover:text-white"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.password && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-1 text-[11px] font-medium text-red-400"
                      >
                        {errors.password}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex cursor-pointer items-center gap-1.5">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 rounded border-white/20 bg-slate-950 accent-indigo-500 focus:ring-0"
                    />
                    <span className="text-[11px] font-medium text-slate-400">Remember me</span>
                  </label>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                    <CheckCircle2 size={12} />
                    Protected
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={!isLoading ? { scale: 1.01, boxShadow: "0px 0px 20px rgba(99,102,241,0.35)" } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 text-xs font-extrabold text-white shadow-md transition-all sm:text-sm disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white"
                      />
                      <span>Signing in...</span>
                    </>
                  ) : (
                    <>
                      <span>Continue Learning</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </form>

              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[9px] font-bold text-slate-500">OR</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="text-center">
                <span className="text-xs text-slate-400">New to Learnify? </span>
                <button
                  type="button"
                  onClick={() => navigate?.("register")}
                  className="text-xs font-bold text-indigo-400 underline-offset-4 hover:underline"
                >
                  Create your account
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-1 border-t border-white/10 pt-3 text-[9px] font-medium text-slate-400">
                <ShieldCheck size={12} className="text-emerald-400" />
                Secure 256-bit SSL encrypted connection
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mt-3 flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/60 px-3.5 py-1 text-[10px] font-bold text-slate-400 backdrop-blur-md"
            >
              <Sparkles size={12} className="text-indigo-400" />
              Learn today. Lead tomorrow.
            </motion.div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}