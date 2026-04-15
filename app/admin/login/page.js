"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, User, ChevronRight, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result.error) {
      setError("Invalid Administrative Credentials");
      setLoading(false);
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#020205] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B0000]/10 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <h1 className="text-white font-black text-3xl tracking-tighter uppercase mb-2">
            Control <span className="text-[#8B0000]">Center</span>
          </h1>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
            Ortus Audios Management Portal
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] space-y-6 shadow-2xl"
        >
          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#8B0000] text-xs font-bold text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20"
            >
              {error}
            </motion.p>
          )}

          <div className="space-y-4">
            {/* Username Field */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#8B0000] transition-colors" size={18} />
              <input
                type="text"
                placeholder="Admin ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 outline-none focus:border-[#8B0000]/50 transition-all font-medium"
              />
            </div>

            {/* Password Field */}
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#8B0000] transition-colors" size={18} />
              <input
                type="password"
                placeholder="Access Key"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 outline-none focus:border-[#8B0000]/50 transition-all font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B0000] hover:bg-red-700 text-white font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                AUTHENTICATE <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="text-center mt-8 text-white/10 text-[9px] uppercase tracking-widest leading-loose">
          Authorized Access Only <br /> All attempts are logged and monitored
        </p>
      </motion.div>
    </div>
  );
}