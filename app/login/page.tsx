"use client";

import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { BrandMark } from "@/components/layout/brand-mark";

export default function LoginPage() {
  const [accountType, setAccountType] = useState<"agent" | "member">("agent");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [ssoMessage, setSsoMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSsoMessage("");

    window.setTimeout(() => {
      setIsSubmitting(false);
      setErrorMessage("Login belum dapat diproses karena API autentikasi belum terhubung.");
    }, 500);
  }

  function handleGoogleLogin() {
    setErrorMessage("");
    setSsoMessage("Menghubungkan ke Google Single Sign-On (SSO)...");
    // Ready for NextAuth / Firebase / Supabase Google OAuth redirection:
    // window.location.href = `/api/auth/signin/google?role=${accountType}`;
  }

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden bg-neutral-900">
      {/* Dominant Architectural Image Background */}
      <Image
        src="/property-senja-residence.jpg"
        alt="Eagletree Property Architecture"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-neutral-950/45 backdrop-blur-[5px] pointer-events-none" />

      {/* Centered Glassmorphic Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-7 sm:p-9 shadow-2xl border border-white/60 flex flex-col items-center text-center">
        {/* Logo centered */}
        <Link
          className="inline-flex items-center justify-center mb-3 focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md"
          href="/"
          aria-label="Kembali ke beranda Eagletree"
        >
          <BrandMark />
        </Link>

        {/* Text in the Middle */}
        <p className="text-[11px] font-bold uppercase tracking-widest text-accent-700">
          {accountType === "agent" ? "Agent Workspace" : "Member Portal"}
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-1">
          Selamat Datang
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-xs leading-relaxed">
          {accountType === "agent"
            ? "Masuk ke portal agen untuk mengelola portofolio & leads properti Anda."
            : "Masuk untuk menyimpan properti favorit & riwayat simulasi KPR Anda."}
        </p>

        {/* Role Switcher (Agent / Member) */}
        <div
          className="grid grid-cols-2 gap-1 p-1 bg-neutral-100 rounded-xl w-full mt-5 mb-5 border border-border-subtle"
          role="tablist"
          aria-label="Jenis akun"
        >
          <button
            className={`flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              accountType === "agent"
                ? "bg-brand-950 text-white shadow-xs"
                : "text-neutral-600 hover:text-brand-950"
            }`}
            type="button"
            role="tab"
            aria-selected={accountType === "agent"}
            onClick={() => {
              setAccountType("agent");
              setErrorMessage("");
              setSsoMessage("");
            }}
          >
            <ShieldCheck size={15} aria-hidden="true" />
            <span>Agent</span>
          </button>
          <button
            className={`flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              accountType === "member"
                ? "bg-brand-950 text-white shadow-xs"
                : "text-neutral-600 hover:text-brand-950"
            }`}
            type="button"
            role="tab"
            aria-selected={accountType === "member"}
            onClick={() => {
              setAccountType("member");
              setErrorMessage("");
              setSsoMessage("");
            }}
          >
            <UserRound size={15} aria-hidden="true" />
            <span>Member</span>
          </button>
        </div>

        {/* Primary Google SSO Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-3 px-4 rounded-xl bg-white hover:bg-neutral-50/90 text-neutral-800 font-semibold text-sm flex items-center justify-center gap-3 border border-neutral-300 shadow-xs hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
          <span>Lanjutkan dengan Google</span>
        </button>

        {ssoMessage && (
          <p className="w-full mt-2 p-2.5 bg-blue-50 border border-blue-200 text-blue-800 text-xs rounded-xl font-medium" role="status">
            {ssoMessage}
          </p>
        )}

        {/* Divider with Text in Middle */}
        <div className="relative flex items-center justify-center w-full my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border-subtle" />
          </div>
          <span className="relative bg-white px-3 text-xs text-neutral-500 font-medium">
            atau gunakan email
          </span>
        </div>

        {/* Email & Password Form */}
        <form className="w-full flex flex-col gap-3.5 text-left" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="login-email" className="text-xs font-semibold text-neutral-700">
              {accountType === "agent" ? "Email atau Username Agen" : "Alamat Email"}
            </label>
            <div className="relative flex items-center">
              <Mail size={16} className="absolute left-3.5 text-neutral-400 pointer-events-none" aria-hidden="true" />
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={accountType === "agent" ? "agen@eagletree.id" : "nama@email.com"}
                required
                className="w-full pl-9 pr-3.5 py-2.5 bg-neutral-50/90 border border-border-subtle rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-800/10 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="login-password" className="font-semibold text-neutral-700">Password</label>
              <Link href="/login?mode=forgot" className="text-accent-700 hover:text-accent-600 font-medium">
                Lupa password?
              </Link>
            </div>
            <div className="relative flex items-center">
              <LockKeyhole size={16} className="absolute left-3.5 text-neutral-400 pointer-events-none" aria-hidden="true" />
              <input
                id="login-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Minimal 8 karakter"
                minLength={8}
                required
                className="w-full pl-9 pr-10 py-2.5 bg-neutral-50/90 border border-border-subtle rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-brand-800 focus:ring-2 focus:ring-brand-800/10 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                className="absolute right-3 text-neutral-400 hover:text-neutral-700 cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
              </button>
            </div>
          </div>

          {errorMessage && (
            <p className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            className="mt-1 w-full py-3 px-4 rounded-xl bg-brand-950 hover:bg-brand-900 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.99] cursor-pointer disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Memeriksa..." : accountType === "agent" ? "Masuk sebagai Agen" : "Masuk sebagai Member"}
            {!isSubmitting && <ArrowRight size={16} aria-hidden="true" />}
          </button>
        </form>

        {/* Security badge & Register links (centered) */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 pt-4 mt-2 border-t border-border-subtle w-full">
          <ShieldCheck size={15} className="text-accent-700 shrink-0" aria-hidden="true" />
          <span>Keamanan akun terenkripsi SSL 256-bit</span>
        </div>

        <p className="text-xs text-neutral-600 text-center mt-3">
          {accountType === "agent" ? "Belum terdaftar sebagai agen?" : "Belum punya akun?"}{" "}
          <Link
            href={accountType === "agent" ? "/join" : "/register"}
            className="font-bold text-accent-700 hover:text-accent-600 inline-flex items-center gap-0.5"
          >
            {accountType === "agent" ? "Daftar Agen Eagletree" : "Daftar Akun Baru"}
            <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </main>
  );
}
