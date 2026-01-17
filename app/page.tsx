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
      <header className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white shadow-2xl">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-center gap-8 animate-fadeInDown">
            <div className="flex-shrink-0 animate-slideInLeft">
              <Image
                src="/images/wolfhounds.png"
                alt="Wolfhounds Logo"
                width={90}
                height={90}
                className="rounded-xl bg-white p-2 shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 animate-slideInRight">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                St. Patrick Catholic School
              </h1>
              <p className="text-green-100 text-lg mt-2 font-semibold tracking-wide">
                Girls Basketball Team • Wolfhounds 🏀
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-green-500/40 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex gap-2 overflow-x-auto py-0">
              {(["roster", "schedule", "stats", "standings", "locations"] as Tab[]).map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-4 font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? "text-white"
                      : "text-green-200 hover:text-white hover:bg-green-500/20"
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
      <footer className="mt-20 py-10 text-center bg-gradient-to-r from-green-50 to-green-50 border-t border-green-200">
        <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          <p className="text-lg font-bold text-green-700 mb-2">Go Wolfhounds! 🏀</p>
          <p className="text-sm text-green-600">St. Patrick Catholic School • Girls Basketball</p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full" />
          </div>
        </div>
      </footer>
    </div>
  );
}