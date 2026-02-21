"use client";
import { useState } from "react";
import { members, Member } from "../data/members";
import AudioPlayer from '../components/AudioPlayer';
import LoreSection from '../components/LoreSection';

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <main className="min-h-screen bg-black text-white relative flex flex-col items-center overflow-x-hidden pb-24 md:pb-28">
      {/* Background YouTube Video - Fixed globally, original zoom scale */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-center">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-screen min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/-xLXLnrYDtw?start=61&autoplay=1&mute=1&loop=1&playlist=-xLXLnrYDtw&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
          allow="autoplay; fullscreen; encrypted-media"
        ></iframe>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center px-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          <h1
            className="text-8xl md:text-[8rem] xl:text-[10rem] font-black tracking-widest text-white hover:scale-105 transition-transform duration-500 cursor-default select-none font-[family-name:var(--font-cinzel)]"
            style={{
              textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}
          >
            PDD
          </h1>
          <h2
            className="text-3xl md:text-5xl font-bold text-gray-200 mt-2 tracking-widest select-none font-[family-name:var(--font-cinzel)] uppercase"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}
          >
            Parças Do Dota
          </h2>
        </div>
      </section>

      {/* Members Section */}
      <section className="relative z-10 w-full max-w-7xl px-4 py-24 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-[#e81919]"></div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-md text-center font-[family-name:var(--font-cinzel)]">
            Quem são os PDD?
          </h2>
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-[#e81919]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="group relative bg-black/40 backdrop-blur-md border border-white/10 p-6 flex flex-col items-center text-center rounded-2xl shadow-xl hover:bg-black/60 hover:border-[#e81919]/60 hover:shadow-[#e81919]/20 transition-all duration-500"
            >
              <div className="relative w-40 h-40 mb-6 rounded-full p-1 bg-gradient-to-b from-gray-700 to-black group-hover:from-[#e81919] group-hover:to-orange-600 transition-colors duration-500">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full rounded-full border-4 border-black object-cover z-10 relative"
                />
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(232,25,25,0)] group-hover:shadow-[0_0_30px_rgba(232,25,25,0.6)] transition-shadow duration-500 z-0"></div>
              </div>

              <h3 className="text-lg font-bold mb-2 uppercase min-h-[48px] flex items-center justify-center group-hover:text-[#e81919] transition-colors duration-300 font-[family-name:var(--font-cinzel)]">
                {member.name}
              </h3>

              <div className="flex items-center gap-2 mb-6 text-sm text-gray-400 bg-black/50 px-3 py-1.5 rounded-full border border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#e81919]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{member.dotaHours === "Steam Privado" ? "Horas Ocultas" : `${member.dotaHours} Horas`}</span>
              </div>

              <div className="flex flex-col w-full gap-3 mt-auto">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="relative overflow-hidden bg-transparent border-2 border-white/30 text-white font-bold py-3 px-4 uppercase rounded-lg hover:border-white transition-all group/btn"
                >
                  <span className="relative z-10">Biografia</span>
                  <div className="absolute inset-0 w-full h-full bg-white scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-black opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-20">
                    Biografia
                  </span>
                </button>
                <a
                  href={member.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#e81919] to-red-800 text-white font-bold py-3 px-4 uppercase rounded-lg hover:shadow-[0_0_20px_rgba(232,25,25,0.6)] hover:brightness-110 transition-all"
                >
                  Ver na Steam
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Empty Space & Lore Divider */}
      <section className="relative z-10 w-full h-[15vh] flex items-center justify-center mt-12">
        <div className="opacity-30 pointer-events-none">
          <div className="w-[2px] h-32 bg-gradient-to-b from-[#e81919] to-transparent mx-auto"></div>
        </div>
      </section>

      <LoreSection />

      <section className="relative z-10 w-full h-[15vh] flex items-center justify-center mb-12">
        <div className="opacity-20 pointer-events-none">
          <div className="w-[2px] h-32 bg-gradient-to-b from-transparent to-[#e81919] mx-auto"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-auto py-12 text-center flex flex-col items-center w-full border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="w-24 h-[1px] bg-[#e81919]/50 mb-6"></div>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] font-[family-name:var(--font-cinzel)]">Clã PDD – 2026</p>
      </footer>

      {/* Modal Biografia */}
      {selectedMember && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          ></div>
          <div
            className="bg-neutral-900/90 backdrop-blur-xl border border-[#e81919]/50 max-w-4xl w-full p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(232,25,25,0.2)] relative z-10 transform transition-all max-h-[90vh] overflow-y-auto"
            style={{ animation: 'modalSlideUp 0.4s ease-out forwards' }}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white hover:rotate-90 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start pt-6 md:pt-0">
              <div className="shrink-0 relative">
                <div className="absolute inset-0 bg-[#e81919] rounded-2xl blur-xl opacity-30"></div>
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl border-2 border-[#e81919] relative z-10"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-wide">
                  {selectedMember.name}
                </h3>
                <div className="h-[2px] w-20 bg-[#e81919] mb-6"></div>
                <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light whitespace-pre-wrap">
                  {selectedMember.bio}
                </p>
                <div className="mt-10">
                  <a
                    href={selectedMember.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-transparent border-2 border-[#e81919] text-[#e81919] font-black uppercase tracking-[0.2em] py-4 px-12 hover:bg-[#e81919] hover:text-white hover:scale-105 transition-all duration-300 w-full md:w-auto rounded-xl shadow-[0_0_15px_rgba(232,25,25,0.1)] hover:shadow-[0_0_30px_rgba(232,25,25,0.4)]"
                  >
                    Acessar Perfil Steam
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Audio Player */}
      <AudioPlayer />

      {/* Global generic animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}} />
    </main>
  );
}
