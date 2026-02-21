"use client";
import { useState } from "react";
import { members } from "../data/members";
import AudioPlayer from '../components/AudioPlayer';
import LoreSection from '../components/LoreSection';

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
          {members.map((member, index) => (
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
                  onClick={() => setSelectedIndex(index)}
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

      {/* Modal Biografia Carousel 3D */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-hidden perspective-[2000px]">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedIndex(null)}
          ></div>

          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-gray-500 hover:text-white hover:rotate-90 transition-all duration-300 z-[80]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Lateral Nav Left */}
          <button
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[70] text-gray-600 hover:text-white hover:scale-125 transition-all p-4 bg-black/50 rounded-full hover:bg-[#e81919]/80"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex - 1 + members.length) % members.length); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
          </button>

          {/* Lateral Nav Right */}
          <button
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[70] text-gray-600 hover:text-white hover:scale-125 transition-all p-4 bg-black/50 rounded-full hover:bg-[#e81919]/80"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex + 1) % members.length); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
          </button>

          <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center transform-style-3d z-10 pointer-events-none">
            {members.map((member, i) => {
              let offset = i - selectedIndex;
              if (offset < -Math.floor(members.length / 2)) offset += members.length;
              if (offset > Math.floor(members.length / 2)) offset -= members.length;

              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);

              if (absOffset > 2) return null; // Show only -2, -1, 0, 1, 2

              const zIndex = 60 - absOffset * 10;
              const scale = isCenter ? 1 : (absOffset === 1 ? 0.7 : 0.5);
              const translateX = offset * 45; // percentage width shift
              const rotateY = offset * -35;
              const filter = isCenter ? 'brightness(1)' : 'brightness(0.3) blur(4px)';
              const opacity = isCenter ? 1 : (absOffset === 1 ? 0.8 : 0.4);

              return (
                <div
                  key={member.name}
                  onClick={(e) => { e.stopPropagation(); if (!isCenter) setSelectedIndex(i); }}
                  className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] pointer-events-auto
                        bg-neutral-900 border ${isCenter ? 'border-[#e81919]/60 shadow-[0_0_50px_rgba(232,25,25,0.3)]' : 'border-gray-800 shadow-xl cursor-pointer'}
                        w-[95vw] md:w-[90vw] max-w-[1000px] p-6 md:p-10 rounded-3xl
                        max-h-[85vh] overflow-y-auto hidden-scrollbar
                     `}
                  style={{
                    zIndex,
                    opacity,
                    left: '50%',
                    top: '50%',
                    filter,
                    transform: `translate(-50%, -50%) translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                  }}
                >
                  <div className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start transition-opacity duration-500`}>
                    <div className="shrink-0 relative group">
                      {isCenter && <div className="absolute inset-0 bg-[#e81919] rounded-2xl blur-xl opacity-40 animate-pulse"></div>}
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className={`w-36 h-36 md:w-56 md:h-56 object-cover rounded-2xl border-4 ${isCenter ? 'border-[#e81919] z-10' : 'border-gray-800'} relative transition-colors`}
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl md:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 tracking-wide">
                        {member.name}
                      </h3>
                      {isCenter && <div className="h-[2px] w-16 bg-[#e81919] mb-4 mx-auto md:mx-0"></div>}

                      <div className={`overflow-hidden transition-all duration-700 ease-in-out pb-2 ${isCenter ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-300 leading-relaxed text-base md:text-xl font-light whitespace-pre-wrap">
                          {member.bio}
                        </p>
                        <div className="mt-8">
                          <a
                            href={member.steamUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center bg-transparent border-2 border-[#e81919] text-[#e81919] font-black uppercase tracking-[0.2em] py-3 px-8 md:py-4 md:px-12 hover:bg-[#e81919] hover:text-white hover:scale-105 transition-all duration-300 w-full md:w-auto rounded-xl shadow-[0_0_15px_rgba(232,25,25,0.1)] hover:shadow-[0_0_30px_rgba(232,25,25,0.4)]"
                          >
                            Acessar Perfil Steam
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
