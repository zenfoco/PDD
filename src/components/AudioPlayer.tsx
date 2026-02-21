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

    // Tentar tocar automaticamente ao abrir a página
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch((err) => {
                console.warn("Autoplay bloqueado pelo navegador. Iniciando na primeira interação.");
                // TRUQUE: Como o navegador bloqueia o auto-play sem interação,
                // vamos escutar o primeiro click que o usuário der EM QUALQUER LUGAR da tela
                // para dar play na música silenciosamente e remover o listener.
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
        <div className="fixed bottom-0 left-0 w-full z-50">
            <div className="bg-black/70 backdrop-blur-2xl border-t border-[#e81919]/30 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] h-20 md:h-24 px-4 md:px-8 flex items-center justify-between w-full">

                {/* Lateral Esquerda: Logo Rádio */}
                <div className="flex items-center gap-3 flex-1 min-w-[40px] md:min-w-0">
                    <div className="relative flex items-center justify-center">
                        <span className="absolute w-3 h-3 rounded-full bg-[#e81919] animate-ping opacity-75"></span>
                        <span className="relative w-2 h-2 rounded-full bg-[#e81919]"></span>
                    </div>
                    <h4 className="text-[#e81919] font-bold uppercase tracking-widest text-xs md:text-sm hidden sm:block truncate font-[family-name:var(--font-cinzel)]">
                        Rádio PDD
                    </h4>
                </div>

                {/* Centro: Controles de Áudio */}
                <div className="flex flex-col items-center justify-center w-auto shrink-0 drop-shadow-md">
                    <div className="flex items-center gap-6 md:gap-8 mb-1">
                        <button
                            onClick={prevTrack}
                            className="text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                            </svg>
                        </button>

                        <button
                            onClick={togglePlay}
                            className="text-white hover:text-[#e81919] hover:scale-110 active:scale-95 transition-all drop-shadow-[0_0_15px_rgba(232,25,25,0.4)]"
                        >
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

                        <button
                            onClick={nextTrack}
                            className="text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                            </svg>
                        </button>
                    </div>

                    {/* Faixa atual */}
                    <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-widest truncate max-w-[200px] sm:max-w-full px-2 text-center">
                        {tracks[currentTrackIndex].title}
                    </div>
                </div>

                {/* Lateral Direita: Espaçador para manter o Flexbox perfeitamente centralizado no Mobile */}
                <div className="flex-1 flex justify-end items-center gap-2 min-w-[40px] md:min-w-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                </div>
            </div>

            <audio
                ref={audioRef}
                src={tracks[currentTrackIndex].src}
                onEnded={nextTrack}
            />
        </div>
    );
}
