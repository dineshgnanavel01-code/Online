import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Mail, MapPin, Phone, Send, Sparkles, Heart, ChevronRight,} from "lucide-react";

export default function Footer({ navigate }) {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { label: "Courses", page: "courses" },
    { label: "Dashboard", page: "dashboard" },
    { label: "Become a Student", page: "register" },
    { label: "Login", page: "login" },
  ];

  const categories = [
    "Development",
    "Design",
    "Marketing",
    "Data Science",
  ];

  const supportLinks = [
    "Help Center",
    "Contact Us",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <footer className="relative mt-0 overflow-hidden bg-[#070b16] pt-6 text-slate-300">

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]"
        />

        {[...Array(8)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-indigo-400/40"
            style={{
              left: `${10 + index * 11}%`,
              top: `${20 + ((index * 17) % 60)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-full px-4 pt-0 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            rotateX: 1.5,
            rotateY: -1.5,
            scale: 1.005,
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-2xl sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-indigo-300">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                Keep Learning
              </div>

              <h2 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                Take your skills to the{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  next level
                </span>
              </h2>

              <p className="mt-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
                Get the latest courses, learning tips, and career guides delivered directly to your inbox.
              </p>
            </div>

            <motion.form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 pl-11 pr-4 text-xs font-medium text-white outline-none transition-all placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="group flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/25 transition-all"
              >
                <span>Subscribe</span>
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-full gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 lg:col-span-1"
        >
          <button
            type="button"
            onClick={() => navigate?.("home")}
            className="group mb-4 flex items-center gap-3 text-left focus:outline-none"
            style={{ perspective: 1000 }}
          >
            <motion.div
              whileHover={{ rotateY: 180, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
            >
              <BookOpen className="h-5 w-5" />
            </motion.div>

            <span className="text-2xl font-black tracking-tight text-white">
              Learn
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ify
              </span>
            </span>
          </button>

          <p className="max-w-sm text-xs leading-relaxed text-slate-400">
            Empowering students worldwide with practical skills, expert mentorship, and industry-ready career paths.
          </p>

          <div className="mt-5 space-y-2.5 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-indigo-400" />
              <span>Learnify Tech Campus, India</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-indigo-400" />
              <span>hello@learnify.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-indigo-400" />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2.5">
            <SocialButton name="Facebook" href="#">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.04 10.125 11.927v-8.432H7.078v-3.495h3.047V9.415c0-3.032 1.791-4.708 4.533-4.708 1.312 0 2.686.236 2.686.236v2.98h-1.514c-1.491 0-1.956.93-1.956 1.887v2.263h3.328l-.532 3.495h-2.796V24C19.612 23.113 24 18.092 24 12.073Z" />
              </svg>
            </SocialButton>

            <SocialButton name="Instagram" href="#">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6ZM17.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </SocialButton>

            <SocialButton name="Twitter" href="#">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
              </svg>
            </SocialButton>

            <SocialButton name="LinkedIn" href="#">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V8.998h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.564V8.998H3.555v11.454ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </SocialButton>
          </div>
        </motion.div>

        <FooterColumn title="Platform">
          {platformLinks.map((item) => (
            <motion.button
              key={item.label}
              type="button"
              onClick={() => navigate?.(item.page)}
              whileHover={{ x: 6 }}
              className="group flex w-full items-center justify-between rounded-xl py-2 text-left text-xs font-semibold text-slate-400 transition-colors hover:text-white"
            >
              <span className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-indigo-400 opacity-0 transition-opacity group-hover:opacity-100" />
                {item.label}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </motion.button>
          ))}
        </FooterColumn>

        <FooterColumn title="Categories">
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              onClick={() => navigate?.("courses")}
              whileHover={{ x: 6 }}
              className="group flex w-full items-center gap-1.5 rounded-xl py-2 text-left text-xs font-semibold text-slate-400 transition-colors hover:text-white"
            >
              <ChevronRight className="h-3.5 w-3.5 text-purple-400 opacity-0 transition-opacity group-hover:opacity-100" />
              {category}
            </motion.button>
          ))}
        </FooterColumn>

        <FooterColumn title="Support">
          {supportLinks.map((item) => (
            <motion.button
              key={item}
              type="button"
              whileHover={{ x: 6 }}
              className="group flex w-full items-center gap-1.5 rounded-xl py-2 text-left text-xs font-semibold text-slate-400 transition-colors hover:text-white"
            >
              <ChevronRight className="h-3.5 w-3.5 text-pink-400 opacity-0 transition-opacity group-hover:opacity-100" />
              {item}
            </motion.button>
          ))}
        </FooterColumn>
      </div>

      <div className="relative border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-full flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-xs font-semibold text-slate-500">
            © {currentYear} Learnify. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Heart className="h-3.5 w-3.5 fill-pink-500 text-pink-500" />
            </motion.span>
            <span>for learners worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ name, href, children }) {
  return (
    <motion.a
      href={href}
      aria-label={name}
      whileHover={{ y: -3, scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-400 transition-colors hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white"
    >
      {children}
    </motion.a>
  );
}

function FooterColumn({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white">
        <span className="h-4 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-purple-500" />
        {title}
      </h3>
      <div className="space-y-1">{children}</div>
    </motion.div>
  );
}