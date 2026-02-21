import re

with open("src/app/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace State
content = content.replace("const [selectedMember, setSelectedMember] = useState<Member | null>(null);", "const [selectedIndex, setSelectedIndex] = useState<number | null>(null);")

# Replace Map
content = content.replace("members.map((member) => (", "members.map((member, index) => (")

# Replace onClick
content = content.replace("onClick={() => setSelectedMember(member)}", "onClick={() => setSelectedIndex(index)}")


modal_replacement = """      {/* Modal Biografia Carousel 3D */}
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
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="currentColor" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>

          {/* Lateral Nav Right */}
          <button 
             className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[70] text-gray-600 hover:text-white hover:scale-125 transition-all p-4 bg-black/50 rounded-full hover:bg-[#e81919]/80"
             onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex + 1) % members.length); }}
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>

          <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center transform-style-3d z-10 pointer-events-none">
            {members.map((member, i) => {
               let offset = i - selectedIndex;
               if (offset < -Math.floor(members.length / 2)) offset += members.length;
               if (offset > Math.floor(members.length / 2)) offset -= members.length;
               
               const isCenter = offset === 0;
               const absOffset = Math.abs(offset);
               
               if (absOffset > 2) return null; // Show only -2, -1, 0, 1, 2
               
               let zIndex = 60 - absOffset * 10;
               let scale = isCenter ? 1 : (absOffset === 1 ? 0.7 : 0.5);
               let translateX = offset * 45; // percentage width shift
               let rotateY = offset * -35; 
               let filter = isCenter ? 'brightness(1)' : 'brightness(0.3) blur(4px)';
               let opacity = isCenter ? 1 : (absOffset === 1 ? 0.8 : 0.4);
               
               return (
                   <div 
                     key={member.name}
                     onClick={(e) => { e.stopPropagation(); if (!isCenter) setSelectedIndex(i); }}
                     className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] pointer-events-auto
                        bg-neutral-900 border ${isCenter ? 'border-[#e81919]/60 shadow-[0_0_50px_rgba(232,25,25,0.3)]' : 'border-gray-800 shadow-xl cursor-pointer'}
                        w-[90vw] max-w-[800px] p-6 md:p-10 rounded-3xl
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
                           
                           <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isCenter ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
      )}"""

# We need to replace the old block between {/* Modal Biografia */} and {/* Fixed Audio Player */}
start_marker = "{/* Modal Biografia */}"
end_marker = "{/* Fixed Audio Player */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + modal_replacement + "\n\n      " + content[end_idx:]
else:
    print("Could not find markers to replace modal.")

with open("src/app/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("SUCCESS")
