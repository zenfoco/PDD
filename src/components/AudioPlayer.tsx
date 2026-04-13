"use client";

import { useState, useRef, useEffect } from "react";

const tracks = [
    { title: "Jogando e Levando Rola", src: "/media/Jogando-e-Levando-Rola-PDD-.mp3" },
    { title: "Os PDD", src: "/media/Os-PDD.mp3" },
    { title: "PDD V2", src: "/media/PDD-V2.mp3" },
    { title: "PDD Zuero", src: "/media/PDD-Zuero.mp3" },
    { title: "PDD V1", src: "/media/PDD-v1.mp3" },
    { title: "Coringa, Cadê a BKB?", src: "/media/Coringa-Cade-a-BKB.mp3" },
];

export default function AudioPlayer() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(() => {
                const playOnInteraction = () => {
                    if (audioRef.current) {
                        audioRef.current.play();
                        setIsPlaying(true);
                        document.removeEventListener("click", playOnInteraction);
                    }
                };
                document.addEventListener("click", playOnInteraction);
            });
        }
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(console.error);
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrackIndex]);

    useEffect(() => {
        const handler = (e: CustomEvent<{ trackIndex: number }>) => {
            setCurrentTrackIndex(e.detail.trackIndex);
            setIsPlaying(true);
        };
        document.addEventListener("pdd:play-track", handler as EventListener);
        return () => document.removeEventListener("pdd:play-track", handler as EventListener);
    }, []);

    const togglePlay = () => setIsPlaying(!isPlaying);
    const nextTrack = () => { setCurrentTrackIndex((p) => (p + 1) % tracks.length); setIsPlaying(true); };
    const prevTrack = () => { setCurrentTrackIndex((p) => (p - 1 + tracks.length) % tracks.length); setIsPlaying(true); };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const t = parseFloat(e.target.value);
        if (audioRef.current) audioRef.current.currentTime = t;
        setCurrentTime(t);
    };

    const formatTime = (s: number) => {
        if (!s || isNaN(s)) return "0:00";
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2, "0")}`;
    };

    const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-black/70 backdrop-blur-2xl border-t border-[#e81919]/30 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">

            {/* Linha 1: controles */}
            <div className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between w-full">

                {/* Esquerda: badge Rádio PDD */}
                <div className="flex items-center gap-3 flex-1 min-w-[40px] md:min-w-0">
                    <div className="relative flex items-center justify-center shrink-0">
                        <span className="absolute w-3 h-3 rounded-full bg-[#e81919] animate-ping opacity-75"></span>
                        <span className="relative w-2 h-2 rounded-full bg-[#e81919]"></span>
                    </div>
                    <h4 className="text-[#e81919] font-bold uppercase tracking-widest text-xs md:text-sm hidden sm:block truncate font-[family-name:var(--font-cinzel)]">
                        Rádio PDD
                    </h4>
                </div>

                {/* Centro: prev / play / next + nome da faixa */}
                <div className="flex flex-col items-center gap-0.5 shrink-0">
                    <div className="flex items-center gap-6 md:gap-8">
                        <button onClick={prevTrack} className="text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                            </svg>
                        </button>
                        <button onClick={togglePlay} className="text-white hover:text-[#e81919] hover:scale-110 active:scale-95 transition-all drop-shadow-[0_0_15px_rgba(232,25,25,0.4)]">
                            {isPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </button>
                        <button onClick={nextTrack} className="text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                            </svg>
                        </button>
                    </div>
                    <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest truncate max-w-[160px] sm:max-w-[240px] text-center mt-0.5">
                        {tracks[currentTrackIndex].title}
                    </span>
                </div>

                {/* Direita: ícone decorativo */}
                <div className="flex-1 flex justify-end items-center min-w-[40px] md:min-w-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                </div>
            </div>

            {/* Linha 2: barra de progresso com timestamps */}
            <div className="flex items-center gap-3 px-4 md:px-8 pb-3">
                <span className="text-[10px] tabular-nums text-gray-500 w-8 text-right shrink-0">
                    {formatTime(currentTime)}
                </span>

                <div className="relative flex-1 h-1.5 bg-white/20 rounded-full cursor-pointer group">
                    {/* Preenchimento */}
                    <div
                        className="absolute inset-y-0 left-0 bg-[#e81919] rounded-full pointer-events-none"
                        style={{ width: `${progressPercent}%` }}
                    />
                    {/* Bolinha no hover */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ left: `calc(${progressPercent}% - 6px)` }}
                    />
                    {/* Input transparente por cima para capturar clique */}
                    <input
                        type="range"
                        min={0}
                        max={duration || 0}
                        step={0.1}
                        value={currentTime}
                        onChange={handleSeek}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>

                <span className="text-[10px] tabular-nums text-gray-500 w-8 shrink-0">
                    {formatTime(duration)}
                </span>
            </div>

            <audio
                ref={audioRef}
                src={tracks[currentTrackIndex].src}
                onEnded={nextTrack}
                onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
                onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
            />
        </div>
    );
}
