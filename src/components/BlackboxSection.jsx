import React, { useEffect, useRef } from "react";

export default function BlackboxSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="crashIndex" className="py-16 px-4 md:px-6 bg-gradient-to-b from-[#0a0f1c] to-[#111827] relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-3">
          The CrashIndex 
        </h2>
        <p className="text-gray-400 text-[14px] text-center mb-12 max-w-2xl mx-auto">
          Explorez la CrashIndex : Données anonymisées de milliers de crashs.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          <button className="hidden md:flex w-10 h-10 rounded-full border border-[#2a3560] text-gray-400 items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors flex-shrink-0">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carte 1 */}
          <div ref={el => cardsRef.current[0] = el} className="bcard w-full max-w-[300px] md:max-w-none opacity-0">
            <div className="bg-gradient-to-br from-[#0d1624] to-[#1a1f2e] p-5 rounded-xl border border-[#2a3560] hover:border-orange-500 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="text-[10px] font-bold text-gray-400 mb-3 tracking-wide">
                CRASH REPORT #0114 –<br />
                SaaS B2B
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/10 border border-red-500/30 rounded mb-3">
                <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                  <path d="M2 2l8 8M10 2l-8 8" stroke="#cc2020" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-[10px] font-bold text-red-500">ÉCHEC</span>
              </div>
              <div className="text-gray-400 text-[10px] font-semibold mb-1">Cause :</div>
              <div className="text-gray-300 text-[11px] leading-relaxed mb-4">
                Pricing inadéquat – Coût d'acquisition - LTV (LTV/CAC = 0.8)
              </div>
              <div className="w-full h-[60px]">
                <svg width="100%" height="60" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e03030" stopOpacity=".3"/>
                      <stop offset="100%" stopColor="#e03030" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,10 C20,12 40,15 60,22 C80,30 100,35 120,40 C140,46 160,50 200,56" fill="none" stroke="#e03030" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M0,10 C20,12 40,15 60,22 C80,30 100,35 120,40 C140,46 160,50 200,56 L200,60 L0,60 Z" fill="url(#redGrad)"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Carte 2 */}
          <div ref={el => cardsRef.current[1] = el} className="bcard w-full max-w-[300px] md:max-w-none opacity-0">
            <div className="bg-gradient-to-br from-[#0d1624] to-[#1a1f2e] p-5 rounded-xl border border-[#2a3560] hover:border-orange-500 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="text-[10px] font-bold text-gray-400 mb-3 tracking-wide">
                CRASH REPORT #0115 –<br />
                App Santé (B2C)
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/10 border border-green-500/30 rounded mb-3">
                <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                  <path d="M2 6l3 3 5-5" stroke="#0a8030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[10px] font-bold text-green-500">SUCCÈS</span>
              </div>
              <div className="text-gray-400 text-[10px] font-semibold mb-1">Cause :</div>
              <div className="text-gray-300 text-[11px] leading-relaxed mb-4">
                Validité Marché & Produit (Phase 1-8 confirmée) · Prêt pour Seed
              </div>
              <div className="w-full h-[60px]">
                <svg width="100%" height="60" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#20cc50" stopOpacity=".3"/>
                      <stop offset="100%" stopColor="#20cc50" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0,55 C20,52 40,48 60,42 C80,35 100,28 120,20 C140,13 160,8 200,4" fill="none" stroke="#20cc50" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M0,55 C20,52 40,48 60,42 C80,35 100,28 120,20 C140,13 160,8 200,4 L200,60 L0,60 Z" fill="url(#greenGrad)"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Carte 3 */}
          <div ref={el => cardsRef.current[2] = el} className="bcard w-full max-w-[300px] md:max-w-none opacity-0">
            <div className="bg-gradient-to-br from-[#0d1624] to-[#1a1f2e] p-5 rounded-xl border border-[#2a3560] hover:border-orange-500 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10">
              <div className="text-[10px] font-bold text-gray-400 mb-3 tracking-wide">
                CRASH REPORT #0116 –<br />
                E-commerce durable
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded mb-3">
                <span className="text-[13px] font-black text-blue-500">?</span>
                <span className="text-[10px] font-bold text-blue-500">EN COURS</span>
              </div>
              <div className="text-gray-400 text-[10px] font-semibold mb-1">Cause :</div>
              <div className="text-gray-300 text-[11px] leading-relaxed mb-3">
                Test n°3 : Marché Adressable confirmé.
                <br />
                Test n°4 : MVP en cours de développement.
              </div>
              <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse" style={{ width: "35%" }}></div>
              </div>
            </div>
          </div>

          <button className="hidden md:flex w-10 h-10 rounded-full border border-[#2a3560] text-gray-400 items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors flex-shrink-0">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Indicateur de scroll pour mobile */}
        <div className="flex justify-center md:hidden mt-4 gap-1">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>

        {/* <div className="flex justify-center mt-10">
          <button className="border border-gray-500 text-white text-[13px] font-semibold px-8 py-3 rounded-lg hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 transition-all transform hover:scale-105">
            Accéder à la base de données
          </button>
        </div> */}
      </div>
    </section>
  );
}