"use client";

import Link from "next/link";
import AudioPlayer from "../../components/AudioPlayer";

const estatuto = [
    {
        titulo: "Artigo I — Do Nome",
        texto:
            "O clã é oficialmente denominado PDD, sigla de múltiplos significados simultâneos. Qualquer interpretação está correta. Qualquer discussão sobre isso resulta em votekick.",
    },
    {
        titulo: "Artigo II — Da BKB",
        texto:
            'Todo membro tem direito de comprar a Black King Bar. Todo membro tem o dever de comprar a Black King Bar. Especialmente o Coringa. A pergunta "Cadê sua BKB?" é sagrada e não possui resposta válida.',
    },
    {
        titulo: "Artigo III — Do Gank",
        texto:
            'É vedado ao Monstro da Jaula sair da lane para gankar sob qualquer pretexto. A justificativa oficial é sempre a mesma: "Se eu sair eu perco a torre."',
    },
    {
        titulo: "Artigo IV — Do Suporte",
        texto:
            "JogoMalReborn é o suporte oficial e eterno do clã. Seu ouro pertence às wards, smokes e sentries. Criticar suas mortes heroicas é proibido.",
    },
    {
        titulo: "Artigo V — Das Horas",
        texto:
            "O Discípulo do Monstro da Jaula acumula mais de 18 mil horas sem comprar bota. Esta conquista é considerada patrimônio imaterial do clã.",
    },
    {
        titulo: "Artigo VI — Do Tornobot",
        texto:
            'O robô oficial do clã opera no Telegram sob o ID -1002334042119. É o guardião da memória coletiva e árbitro dos torneios internos.',
    },
    {
        titulo: "Artigo VII — Das Divisões",
        texto:
            "O clã opera em divisões geográficas: Divisão Recife (PE), Divisão Manaus (AM), Divisão São Paulo (SP), Divisão Minas Gerais (MG), Divisão Santa Catarina (SC), Divisão Rio de Janeiro (RJ) e o representante internacional de Jujuy, Argentina.",
    },
    {
        titulo: "Artigo VIII — Do Tomate",
        texto:
            'Comer tomate cru com sal é o rito de passagem oficial do clã. O grito resultante — "Humm... AaAaAArGH!!" — é obrigatório e deve ser presenciado pelo time.',
    },
];

export default function SobrePage() {
    return (
        <main className="min-h-screen bg-black text-white relative flex flex-col items-center overflow-x-hidden pb-28">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black" />
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: "repeating-linear-gradient(0deg, #e81919 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #e81919 0px, transparent 1px, transparent 40px)" }}
                />
            </div>

            {/* Nav */}
            <nav className="relative z-10 w-full px-6 py-5 flex items-center justify-between border-b border-white/5">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-[family-name:var(--font-cinzel)]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Voltar
                </Link>
                <span className="text-[#e81919] font-black uppercase tracking-widest font-[family-name:var(--font-cinzel)] text-sm">
                    PDD
                </span>
            </nav>

            {/* Header */}
            <section className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#e81919]" />
                    <span className="text-[#e81919] text-xs uppercase tracking-[0.4em] font-[family-name:var(--font-cinzel)]">Estatuto Oficial</span>
                    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#e81919]" />
                </div>

                <h1 className="text-5xl md:text-7xl font-black uppercase font-[family-name:var(--font-cinzel)] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6">
                    Sobre o PDD
                </h1>

                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    O clã Parças Do Dota nasceu das madrugadas, das lanes erradas, das BKBs não compradas
                    e das amizades que só o Dota 2 é capaz de forjar. Este é o nosso estatuto.
                </p>
            </section>

            {/* Tornobot banner */}
            <section className="relative z-10 w-full max-w-4xl mx-auto px-6 mb-16">
                <div className="bg-gradient-to-r from-black/80 to-red-950/30 border border-red-900/40 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-full bg-[#e81919]/10 border border-[#e81919]/30 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#e81919]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                        </svg>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-white font-black uppercase tracking-widest text-sm font-[family-name:var(--font-cinzel)] mb-1">
                            Tornobot — Guardião da Memória
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            O robô oficial do clã opera no Telegram. É o árbitro dos torneios internos e
                            guardião de cada pérola já dita nas partidas.
                            ID: <span className="text-[#e81919] font-mono font-bold">-1002334042119</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Estatuto */}
            <section className="relative z-10 w-full max-w-4xl mx-auto px-6 mb-20">
                <div className="space-y-6">
                    {estatuto.map((art, i) => (
                        <div
                            key={i}
                            className="group bg-black/40 backdrop-blur-sm border border-white/5 hover:border-[#e81919]/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-black/60"
                        >
                            <h3 className="text-[#e81919] text-xs uppercase tracking-widest font-[family-name:var(--font-cinzel)] mb-3 group-hover:text-red-400 transition-colors">
                                {art.titulo}
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                {art.texto}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 py-10 text-center w-full border-t border-white/5">
                <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-xs font-[family-name:var(--font-cinzel)]">Clã PDD – 2026</p>
            </footer>

            <AudioPlayer />
        </main>
    );
}
