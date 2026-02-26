"use client";

import * as React from "react";
import WalletButton from "@/components/WalletButton";

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="relative z-50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-5 sm:pt-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px]" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-fuchsia-400/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

          <div className="relative p-4 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-2xl border border-white/12 bg-white/7 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-300/35 via-blue-500/20 to-fuchsia-500/25" />
                  <div className="absolute left-2 top-2 h-3 w-3 rounded-md bg-gradient-to-br from-cyan-200 to-fuchsia-300 opacity-90" />
                  <div className="absolute right-2 bottom-2 h-2 w-2 rounded bg-white/40" />
                </div>

                <div className="leading-tight">
                  <div className="text-xs sm:text-sm opacity-70">swap.turkscan.com</div>
                  <div className="text-base sm:text-lg font-semibold tracking-tight">
                    Turkchain DEX
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden sm:flex items-center gap-2">
                  <span className="rounded-full bg-emerald-400/15 border border-emerald-400/25 px-3 py-1 text-xs text-emerald-200">
                    Live
                  </span>
                  <span className="rounded-full bg-white/7 border border-white/12 px-3 py-1 text-xs text-white/80">
                    Chain 1919
                  </span>
                </div>

                <div className="shrink-0">
                  <WalletButton />
                </div>

                <button
                  type="button"
                  className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Menu"
                  onClick={() => setOpen((v) => !v)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 7h16" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12h16" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 17h16" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="mt-4 hidden sm:flex flex-wrap items-center gap-2">
  <a
    className="inline-flex items-center justify-center rounded-xl bg-white/12 hover:bg-white/18 border border-white/12 px-4 py-2 text-sm transition"
    href="/"
  >
    Home
  </a>

  <a
    className="inline-flex items-center justify-center rounded-xl bg-white/12 hover:bg-white/18 border border-white/12 px-4 py-2 text-sm transition"
    href="/swap"
  >
    Swap
  </a>

  <a
    className="inline-flex items-center justify-center rounded-xl bg-white/7 hover:bg-white/12 border border-white/12 px-4 py-2 text-sm transition"
    href="/pool"
  >
    Pool
  </a>

  <a
    className="inline-flex items-center justify-center rounded-xl bg-white/7 hover:bg-white/12 border border-white/12 px-4 py-2 text-sm transition"
    href="/positions"
  >
    My Pools
  </a>
</nav>
            {/* Mobile nav */}
            {open ? (
  <div className="sm:hidden mt-4 grid grid-cols-1 gap-2">
    <a
      className="inline-flex items-center justify-center rounded-xl bg-white/12 hover:bg-white/18 border border-white/12 px-4 py-3 text-sm transition"
      href="/"
      onClick={() => setOpen(false)}
    >
      Home
    </a>

    <a
      className="inline-flex items-center justify-center rounded-xl bg-white/12 hover:bg-white/18 border border-white/12 px-4 py-3 text-sm transition"
      href="/swap"
      onClick={() => setOpen(false)}
    >
      Swap
    </a>

    <a
      className="inline-flex items-center justify-center rounded-xl bg-white/7 hover:bg-white/12 border border-white/12 px-4 py-3 text-sm transition"
      href="/pool"
      onClick={() => setOpen(false)}
    >
      Pool
    </a>

    <a
      className="inline-flex items-center justify-center rounded-xl bg-white/7 hover:bg-white/12 border border-white/12 px-4 py-3 text-sm transition"
      href="/positions"
      onClick={() => setOpen(false)}
    >
      My Pools
    </a>
                <div className="mt-1 flex items-center gap-2 text-xs opacity-70">
                  <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2 py-1">
                    Live
                  </span>
                  <span className="rounded-full bg-white/5 border border-white/10 px-2 py-1">
                    Chain 1919
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}