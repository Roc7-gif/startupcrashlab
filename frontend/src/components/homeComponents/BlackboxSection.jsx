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
    <section id="crashIndex" className="py-16 px-4 md:px-6 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Éléments décoratifs - version claire */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold text-center mb-3">
          The CrashIndex 
        </h2>
        <p className="text-gray-600 text-[14px] text-center mb-12 max-w-2xl mx-auto">
          Explorez la CrashIndex : Données anonymisées de milliers de crashs.
        </p>

        {/* Container avec largeur pleine sur mobile */}
        <div className="w-full">
          {/* Version mobile: grid pour que les cartes prennent toute la largeur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center">
            
            {/* Carte 1 */}
            <div ref={el => cardsRef.current[0] = el} className="   w-full opacity-0">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-lg hover:border-orange-500 transition-all hover:shadow-xl hover:shadow-orange-500/20 w-full">
                <div className="text-[10px] font-bold text-gray-500 mb-3 tracking-wide">
                  CRASH REPORT #0114 –<br />
                  SaaS B2B
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 border border-red-200 rounded mb-3">
                  <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[10px] font-bold text-red-600">ÉCHEC</span>
                </div>
                <div className="text-gray-500 text-[10px] font-semibold mb-1">Cause :</div>
                <div className="text-gray-700 text-[11px] leading-relaxed mb-4">
                  Pricing inadéquat – Coût d'acquisition - LTV (LTV/CAC = 0.8)
                </div>
                <div className="w-full h-[60px]">
                  <svg width="100%" height="60" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="redGradLight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#dc2626" stopOpacity=".2"/>
                        <stop offset="100%" stopColor="#dc2626" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,10 C20,12 40,15 60,22 C80,30 100,35 120,40 C140,46 160,50 200,56" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M0,10 C20,12 40,15 60,22 C80,30 100,35 120,40 C140,46 160,50 200,56 L200,60 L0,60 Z" fill="url(#redGradLight)"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Carte 2 */}
            <div ref={el => cardsRef.current[1] = el} className="   w-full opacity-0">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-lg hover:border-orange-500 transition-all hover:shadow-xl hover:shadow-orange-500/20 w-full">
                <div className="text-[10px] font-bold text-gray-500 mb-3 tracking-wide">
                  CRASH REPORT #0115 –<br />
                  App Santé (B2C)
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 border border-green-200 rounded mb-3">
                  <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                    <path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[10px] font-bold text-green-600">SUCCÈS</span>
                </div>
                <div className="text-gray-500 text-[10px] font-semibold mb-1">Cause :</div>
                <div className="text-gray-700 text-[11px] leading-relaxed mb-4">
                  Validité Marché & Produit (Phase 1-8 confirmée) · Prêt pour Seed
                </div>
                <div className="w-full h-[60px]">
                  <svg width="100%" height="60" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="greenGradLight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#16a34a" stopOpacity=".2"/>
                        <stop offset="100%" stopColor="#16a34a" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,55 C20,52 40,48 60,42 C80,35 100,28 120,20 C140,13 160,8 200,4" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M0,55 C20,52 40,48 60,42 C80,35 100,28 120,20 C140,13 160,8 200,4 L200,60 L0,60 Z" fill="url(#greenGradLight)"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Carte 3 */}
            <div ref={el => cardsRef.current[2] = el} className="   w-full opacity-0">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-lg hover:border-orange-500 transition-all hover:shadow-xl hover:shadow-orange-500/20 w-full">
                <div className="text-[10px] font-bold text-gray-500 mb-3 tracking-wide">
                  CRASH REPORT #0116 –<br />
                  E-commerce durable
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 border border-blue-200 rounded mb-3">
                  <span className="text-[13px] font-black text-blue-600">?</span>
                  <span className="text-[10px] font-bold text-blue-600">EN COURS</span>
                </div>
                <div className="text-gray-500 text-[10px] font-semibold mb-1">Cause :</div>
                <div className="text-gray-700 text-[11px] leading-relaxed mb-3">
                  Test n°3 : Marché Adressable confirmé.
                  <br />
                  Test n°4 : MVP en cours de développement.
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-linear-to-r from-orange-500 to-orange-600 rounded-full animate-pulse" style={{ width: "35%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll pour mobile - optionnel maintenant */}
        <div className="flex justify-center md:hidden mt-6 gap-1">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
   
  );
}