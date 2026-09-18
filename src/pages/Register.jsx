import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function Register({ navigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Enter at least 3 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      setSuccess(true);
      setTimeout(() => {
        navigate?.("login");
      }, 1800);
    }, 900);
  };

  const passwordStrength =
    form.password.length === 0
      ? 0
      : form.password.length < 6
      ? 1
      : form.password.length < 10
      ? 2
      : 3;

  return (
    <main className="relative min-h-screen w-full bg-slate-950 font-sans text-slate-100 selection:bg-purple-500 selection:text-white">
      {/* Background Animated Gradient Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[130px]"
        />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-full flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Desktop Left Section */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden lg:col-span-7 lg:block"
          >
            <motion.button
              type="button"
              onClick={() => navigate?.("home")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mb-6 flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 text-white shadow-md shadow-purple-500/30 ring-1 ring-white/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col justify-center text-left min-w-0">
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
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-bold text-purple-300 backdrop-blur-md"
            >
              <Sparkles size={13} className="text-purple-400" />
              Start Your Learning Journey
            </motion.div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-white xl:text-5xl">
              Build Your
              <span className="block bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
                Future With Learnify.
              </span>
            </h1>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400 xl:text-base">
              Create your free account and unlock practical courses, expert instructors, certificates, and a smarter way to learn online.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  icon: BookOpen,
                  title: "Learn From Industry Experts",
                  text: "Practical lessons designed for real-world skills.",
                },
                {
                  icon: CheckCircle2,
                  title: "Track Your Progress",
                  text: "Keep your learning journey organized.",
                },
                {
                  icon: ShieldCheck,
                  title: "Earn Certificates",
                  text: "Showcase your achievements with confidence.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 6, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    className="flex max-w-md items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-all duration-300"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/20 text-purple-400 border border-purple-500/30">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-100">{item.title}</h3>
                      <p className="mt-0.5 text-[11px] text-slate-400">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto w-full max-w-[1420px] lg:col-span-5"
          >
<div className="mb-6 flex justify-center pt-9 pb-2 lg:hidden">
  <button
    type="button"
    onClick={() => navigate?.("home")}
    className="inline-flex items-center gap-3 focus:outline-none"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/30 ring-1 ring-white/20 sm:h-12 sm:w-12">
      <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />
    </div>
    <div className="flex flex-col justify-center text-left min-w-0">
      <h1 className="text-xl font-black leading-none tracking-tight text-white truncate sm:text-2xl">
        Learnify
      </h1>
      <p className="mt-1 text-xs font-medium leading-none text-purple-300 truncate">
        Create Account
      </p>
    </div>
  </button>
</div>

            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-2xl sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500" />

              <div className="relative mb-5 hidden lg:block">
                <h2 className="text-2xl font-black text-white">Create your account 🚀</h2>
                <p className="mt-0.5 text-xs text-slate-400">Join thousands of learners growing with Learnify.</p>
              </div>

              <form onSubmit={handleSubmit} className="relative space-y-3">
                <div>
                  <label htmlFor="name" className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    Full Name
                  </label>
                  <div
                    className={`group flex items-center rounded-xl border bg-slate-950/60 px-3 transition-all duration-200 ${
                      errors.name
                        ? "border-red-500/80 ring-2 ring-red-500/20"
                        : "border-white/10 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 hover:border-white/20"
                    }`}
                  >
                    <User size={16} className={errors.name ? "text-red-400" : "text-slate-400 group-focus-within:text-purple-400"} />
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      autoComplete="name"
                      className="w-full bg-transparent px-2.5 py-2 text-xs font-medium text-white outline-none placeholder:text-slate-500 sm:text-sm"
                    />
                  </div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 text-[11px] font-medium text-red-400">
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    Email Address
                  </label>
                  <div
                    className={`group flex items-center rounded-xl border bg-slate-950/60 px-3 transition-all duration-200 ${
                      errors.email
                        ? "border-red-500/80 ring-2 ring-red-500/20"
                        : "border-white/10 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 hover:border-white/20"
                    }`}
                  >
                    <Mail size={16} className={errors.email ? "text-red-400" : "text-slate-400 group-focus-within:text-purple-400"} />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full bg-transparent px-2.5 py-2 text-xs font-medium text-white outline-none placeholder:text-slate-500 sm:text-sm"
                    />
                  </div>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 text-[11px] font-medium text-red-400">
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="password" className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    Password
                  </label>
                  <div
                    className={`group flex items-center rounded-xl border bg-slate-950/60 px-3 transition-all duration-200 ${
                      errors.password
                        ? "border-red-500/80 ring-2 ring-red-500/20"
                        : "border-white/10 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 hover:border-white/20"
                    }`}
                  >
                    <Lock size={16} className={errors.password ? "text-red-400" : "text-slate-400 group-focus-within:text-purple-400"} />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Create password"
                      autoComplete="new-password"
                      className="w-full bg-transparent px-2.5 py-2 text-xs font-medium text-white outline-none placeholder:text-slate-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-slate-400 transition hover:text-purple-400"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  {form.password && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1.5">
                      <div className="flex gap-1">
                        {[1, 2, 3].map((level) => (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                              passwordStrength >= level
                                ? level === 1
                                  ? "bg-red-500"
                                  : level === 2
                                  ? "bg-amber-400"
                                  : "bg-emerald-400"
                                : "bg-slate-800"
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <AnimatePresence>
                    {errors.password && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 text-[11px] font-medium text-red-400">
                        {errors.password}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    Confirm Password
                  </label>
                  <div
                    className={`group flex items-center rounded-xl border bg-slate-950/60 px-3 transition-all duration-200 ${
                      errors.confirmPassword
                        ? "border-red-500/80 ring-2 ring-red-500/20"
                        : "border-white/10 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 hover:border-white/20"
                    }`}
                  >
                    <Lock size={16} className={errors.confirmPassword ? "text-red-400" : "text-slate-400 group-focus-within:text-purple-400"} />
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      autoComplete="new-password"
                      className="w-full bg-transparent px-2.5 py-2 text-xs font-medium text-white outline-none placeholder:text-slate-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="text-slate-400 transition hover:text-purple-400"
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.confirmPassword && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 text-[11px] font-medium text-red-400">
                        {errors.confirmPassword}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <label className="flex cursor-pointer items-start gap-2 pt-1 text-[11px] text-slate-400">
                  <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 rounded border-slate-700 bg-slate-950 accent-purple-500 focus:ring-0" />
                  <span>
                    I agree to the{" "}
                    <button type="button" className="font-bold text-purple-400 hover:underline">
                      Terms
                    </button>{" "}
                    and{" "}
                    <button type="button" className="font-bold text-purple-400 hover:underline">
                      Privacy Policy
                    </button>
                    .
                  </span>
                </label>

                <motion.button
                  type="submit"
                  disabled={isLoading || success}
                  whileHover={!isLoading && !success ? { scale: 1.01, boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.4)" } : {}}
                  whileTap={!isLoading && !success ? { scale: 0.98 } : {}}
                  className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 py-2.5 text-xs font-extrabold text-white shadow-md transition-all sm:text-sm disabled:opacity-70"
                >
                  {success ? (
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={16} />
                      Account Created!
                    </span>
                  ) : isLoading ? (
                    <span className="flex items-center gap-1.5">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white"
                      />
                      Creating Account...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      Create Free Account
                      <ArrowRight size={16} />
                    </span>
                  )}
                </motion.button>
              </form>

              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[9px] font-bold tracking-wider text-slate-500">ALREADY A LEARNER?</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <p className="text-center text-xs text-slate-400">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate?.("login")}
                  className="font-bold text-purple-400 transition-colors hover:text-purple-300 hover:underline"
                >
                  Login
                </button>
              </p>

              <div className="mt-3 flex items-center justify-center gap-1 border-t border-white/10 pt-3 text-[9px] text-slate-400">
                <ShieldCheck size={12} className="text-emerald-400" />
                Your information is protected and secure
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mt-3 flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/60 px-3.5 py-1 text-[10px] font-bold text-slate-400 backdrop-blur-md"
            >
              <Zap size={12} className="fill-amber-400 text-amber-400" />
              Learn today. Grow tomorrow.
            </motion.div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}