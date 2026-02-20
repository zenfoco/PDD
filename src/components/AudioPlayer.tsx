"use client";

import { useState, useRef, useEffect } from "react";

const tracks = [
    { title: "Jogando e Levando Rola", src: "/media/Jogando-e-Levando-Rola-PDD-.mp3" },
    { title: "Os PDD", src: "/media/Os-PDD.mp3" },
    { title: "PDD V2", src: "/media/PDD-V2.mp3" },
    { title: "PDD Zuero", src: "/media/PDD-Zuero.mp3" },
    { title: "PDD V1", src: "/media/PDD-v1.mp3" },
];

export default function AudioPlayer() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(console.error);
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentTrackIndex]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
        setIsPlaying(true);
    };

    return (
        <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out ${isOpen ? "w-80" : "w-16 h-16"}`}>
            <div
                className="bg-black/40 backdrop-blur-xl border border-red-900/50 shadow-[#e81919]/20 shadow-xl overflow-hidden rounded-2xl flex flex-col"
            >
                {!isOpen ? (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-full h-full flex items-center justify-center p-4 hover:bg-white/5 transition-colors group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e81919] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                    </button>
                ) : (
                    <div className="p-4 flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h4 className="text-[#e81919] font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#e81919] animate-pulse"></span>
                                Rádio PDD
                            </h4>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="text-white font-medium text-lg truncate">
                            {tracks[currentTrackIndex].title}
                        </div>

                        <div className="flex items-center justify-center gap-6">
                            <button onClick={prevTrack} className="text-gray-300 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                                </svg>
                            </button>

                            <button
                                onClick={togglePlay}
                                className="bg-[#e81919] text-white rounded-full p-4 hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(232,25,25,0.5)]"
                            >
                                {isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>

                            <button onClick={nextTrack} className="text-gray-300 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <audio
                ref={audioRef}
                src={tracks[currentTrackIndex].src}
                onEnded={nextTrack}
            />
        </div>
    );
}
