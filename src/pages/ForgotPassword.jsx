import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Send, GraduationCap, Sparkles } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email address is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setSent(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 flex items-center justify-center px-4 py-20 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md perspective-1000"
      >
        <div className="text-center mb-8">
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotateZ: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-600/30 mb-4"
          >
            <GraduationCap size={32} />
          </motion.div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-600 shadow-sm mb-3">
            <Sparkles size={13} /> Secure Account Recovery
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Forgot Password?
          </h1>

          <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto">
            No worries! Enter your registered email address and we'll send you a secure link.
          </p>
        </div>

        <motion.div
          whileHover={{
            y: -6,
            rotateX: 2,
            boxShadow: "0px 30px 60px rgba(79, 70, 229, 0.15)",
          }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100/80 backdrop-blur-xl"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-4"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner border border-emerald-100">
                <Send size={26} />
              </div>

              <h2 className="text-2xl font-bold text-gray-900">
                Check Your Email
              </h2>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                We've sent a password reset link to{" "}
                <strong className="text-gray-900 font-semibold">{email}</strong>. Please check your inbox.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="/login"
                  className="group inline-flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                  Back to Login
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Email Address
                </label>

                <div
                  className={`flex items-center rounded-2xl border bg-gray-50/50 px-4 transition-all duration-300 ${
                    error
                      ? "border-red-500 bg-red-50/20 ring-4 ring-red-100"
                      : "border-gray-200 focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10 hover:border-gray-300"
                  }`}
                >
                  <Mail size={18} className="text-gray-400 shrink-0" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="you@example.com"
                    className="w-full bg-transparent px-3 py-3.5 text-sm font-medium text-gray-900 outline-none"
                  />
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs font-semibold text-red-500 mt-2"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="group w-full rounded-2xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-600/50 flex items-center justify-center gap-2"
              >
                <span>Send Reset Link</span>
                <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <div className="text-center pt-2">
                <a
                  href="/login"
                  className="group inline-flex items-center justify-center gap-2 text-xs font-semibold text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
                  Back to Login
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}