"use client";

import { useState } from "react";
import TeamRoster from "@/app/components/TeamRoster";
import Schedule from "@/app/components/Schedule";
import TeamStats from "@/app/components/TeamStats";
import Standings from "@/app/components/Standings";
import GameLocations from "@/app/components/GameLocations";
import Image from "next/image";

type Tab = "roster" | "schedule" | "stats" | "standings" | "locations";

export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("roster");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-overlay blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-center gap-8 animate-fadeInDown">
            <div className="flex-shrink-0 animate-slideInLeft">
              <Image
                src="/images/wolfhounds.png"
                alt="Wolfhounds Logo"
                width={90}
                height={90}
                className="rounded-2xl bg-white/20 backdrop-blur p-2 shadow-xl hover:scale-110 transition-all duration-300 border border-white/30"
              />
            </div>

            <div className="flex-1 animate-slideInRight">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-green-50 to-white bg-clip-text text-transparent drop-shadow-lg">
                St. Patrick Catholic School
              </h1>
              <p className="text-green-100 text-lg mt-2 font-semibold tracking-wider">
                Girls Basketball Team • Wolfhounds 🏀
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative border-t border-green-400/40 backdrop-blur-md bg-green-600/50">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-green-500/0 via-white/10 to-green-500/0" />
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="flex gap-1 overflow-x-auto py-0">
              {(["roster", "schedule", "stats", "standings", "locations"] as Tab[]).map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-4 font-semibold text-sm transition-all duration-300 whitespace-nowrap rounded-t-lg ${
                    activeTab === tab
                      ? "text-white bg-white/20 backdrop-blur-md border-t-2 border-white/60 shadow-lg"
                      : "text-green-100 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
                  }`}
                  style={{
                    animation: `fadeInDown 0.6s ease-out ${0.1 * idx}s both`,
                  }}
                >
                  {tab === "roster"
                    ? "Roster"
                    : tab === "schedule"
                    ? "Schedule"
                    : tab === "stats"
                    ? "Stats"
                    : tab === "standings"
                    ? "Standings"
                    : "Locations"}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Sponsor Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Katie Howlett Real Estate */}
          <a
            href="https://www.bhhs.com/rw-towne-realty-va307/norfolk/katie-howlett/cid-1125672"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-400/30"
            style={{ animation: "slideInLeft 0.8s ease-out" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
            <div className="relative px-6 py-4 flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-white/40 shadow-lg">
                  <Image
                    src="/images/katie.png"
                    alt="Katie Howlett"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-100 uppercase tracking-wider">BHHS Towne Realty</p>
                  <h3 className="text-xl font-bold text-white">Katie Howlett</h3>
                </div>
              </div>
              <svg className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          {/* Howlett Law */}
          <a
            href="https://howlett-law.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-600/30"
            style={{ animation: "slideInRight 0.8s ease-out" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
            <div className="relative px-6 py-4 flex items-center justify-between backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-white/40 shadow-lg">
                  <Image
                    src="/images/bobby.png"
                    alt="Bobby Howlett"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Legal Services</p>
                  <h3 className="text-xl font-bold text-white">Howlett Law</h3>
                </div>
              </div>
              <svg className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        </div>

        {/* Content Area with Fade */}
        <div
          className="animate-fadeInUp"
          key={activeTab}
        >
          {activeTab === "roster" && <TeamRoster />}
          {activeTab === "schedule" && <Schedule />}
          {activeTab === "stats" && <TeamStats />}
          {activeTab === "standings" && <Standings />}
          {activeTab === "locations" && <GameLocations />}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-20 py-12 text-center bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white border-t-4 border-green-400 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-overlay blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-3xl" />
        </div>
        
        <div className="relative space-y-4 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          <p className="text-2xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Go Wolfhounds! 🏀
          </p>
          <p className="text-green-100 font-semibold tracking-wide">
            St. Patrick Catholic School • Girls Basketball
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-green-300 to-transparent rounded-full" />
          </div>
          <p className="text-xs text-green-200/70 pt-4">
            © 2026 St. Patrick Catholic School Athletics • Powered by Modern Web
          </p>
        </div>
      </footer>
    </div>
  );
}