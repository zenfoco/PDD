"use client";

import { useEffect, useState } from "react";

const quotes = [
    { text: "Meu primooo porraa!!", author: "Monstro da Jaula" },
    { text: "Cadê sua BKB, Coringa?", author: "Geral" },
    { text: "Óóó Drogaa!!", author: "Angel" },
    { text: "18 Mil Horas Sem Bota!", author: "Discípulo" },
    { text: "Se eu sair eu perco a torre.", author: "Jaula ignorando gank" },
    { text: "Foi quase, eu levei dois!", author: "Saúba após morrer solo 1v5" },
    { text: "Acorda Rei!!", author: "Clã pro Ackros" },
];

const pddMeanings = [
    { text: "Parças Do Dota", color: "text-white", glow: "rgba(255,255,255,0.6)" },
    { text: "Pau Dentro Direto", color: "text-white", glow: "rgba(255,255,255,0.6)" },
    { text: "Perde Direito Direto", color: "text-white", glow: "rgba(255,255,255,0.6)" },
    { text: "Piores Do Dota", color: "text-white", glow: "rgba(255,255,255,0.6)" },
    { text: "Passando Dor Direto", color: "text-white", glow: "rgba(255,255,255,0.6)" },
    { text: "Ping Do Demônio", color: "text-white", glow: "rgba(255,255,255,0.6)" },
    { text: "Porra De Dota", color: "text-white", glow: "rgba(255,255,255,0.6)" }
];

export default function LoreSection() {
    const [meaningIndex, setMeaningIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMeaningIndex(prev => (prev + 1) % pddMeanings.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const currentMeaning = pddMeanings[meaningIndex];

    return (
        <section className="w-full max-w-[1400px] mx-auto py-24 px-4 flex flex-col items-center gap-16 relative z-10 border-t border-red-900/40 mt-16 bg-gradient-to-b from-black/20 to-black/80 backdrop-blur-md rounded-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

            {/* Origem do Nome */}
            <div className="text-center w-full max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase font-[family-name:var(--font-cinzel)] text-transparent bg-clip-text bg-gradient-to-r from-[#e81919] via-red-500 to-orange-500 drop-shadow-[0_0_15px_rgba(232,25,25,0.4)]">
                    As Crônicas do Clã
                </h2>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    Você achou que a sigla <strong className="text-white font-black px-2 py-1 bg-white/10 rounded">PDD</strong> significava apenas algo amigável?
                    Ela possui diversas traduções milenares conhecidas nas madrugadas:
                </p>

                <div className="h-24 md:h-28 flex items-center justify-center p-4">
                    <h3
                        className={`text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-widest transition-all duration-700 transform scale-100 ${currentMeaning.color}`}
                        style={{ textShadow: `0 0 40px ${currentMeaning.glow}` }}
                    >
                        {currentMeaning.text}
                    </h3>
                </div>
            </div>

            {/* Mural das Pérolas */}
            <div className="w-full mt-8">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-center text-gray-400 mb-12 flex items-center justify-center">
                    <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
                    Mural de Pérolas (Hall of Fame)
                    <span className="w-8 h-[2px] bg-red-600 ml-4"></span>
                </h3>
                <div className="flex flex-wrap justify-center gap-6 px-4 md:px-12 w-full">
                    {quotes.map((q, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-black/90 to-red-950/40 p-8 rounded-2xl border border-red-900/30 hover:border-[#e81919]/60 transition-all duration-300 hover:-translate-y-2 group shadow-2xl relative overflow-hidden flex-1 min-w-[300px] max-w-sm"
                        >
                            <div className="absolute -right-8 -top-8 text-white/5 group-hover:text-[#e81919]/10 transition-colors duration-500 scale-150 rotate-12">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-48 h-48"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            </div>

                            <svg className="w-10 h-10 text-[#e81919]/50 mb-6 group-hover:text-[#e81919] transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-xl md:text-2xl font-bold text-gray-200 mb-6 italic relative z-10 font-[family-name:var(--font-cinzel)] tracking-wide">
                                &quot;{q.text}&quot;
                            </p>
                            <p className="text-xs text-[#e81919] font-black uppercase tracking-widest relative z-10">
                                — {q.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
