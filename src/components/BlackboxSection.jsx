import React from "react";

export default function BlackboxSection() {
  return (
    <section className="dark-section py-16 px-6 border-t border-[#151c30]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-extrabold text-center mb-3">
          The BlackBox
        </h2>
        <p className="text-gray-500 text-[14px] text-center mb-12">
          Explorez la BlackBox : Données anonymisées de milliers de crashs.
        </p>

        <div className="flex items-center gap-4">
          <button className="flex-shrink-0 w-10 h-10 rounded-full border border-[#2a3560] text-gray-400 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="bcard">
            <div className="text-[10px] font-bold text-gray-400 mb-3 tracking-wide">
              CRASH REPORT #0114 –<br />
              SaaS B2B
            </div>
            <div className="badge-fail mb-3">
              <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                <path
                  d="M2 2l8 8M10 2l-8 8"
                  stroke="#cc2020"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              ÉCHEC
            </div>
            <div className="text-gray-400 text-[10px] font-semibold mb-1">
              Cause :
            </div>
            <div className="text-gray-300 text-[11px] leading-relaxed mb-4">
              Pricing inadéquat – Coût
              <br />
              d'acquisition &gt; LTV (LTV/CAC = 0.8)
            </div>
            <div className="w-full" style={{ height: "60px" }}>
              <svg
                width="100%"
                height="60"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e03030" stopOpacity=".3" />
                    <stop offset="100%" stopColor="#e03030" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,10 C20,12 40,15 60,22 C80,30 100,35 120,40 C140,46 160,50 200,56"
                  fill="none"
                  className="chart-red"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0,10 C20,12 40,15 60,22 C80,30 100,35 120,40 C140,46 160,50 200,56 L200,60 L0,60 Z"
                  fill="url(#redGrad)"
                />
              </svg>
            </div>
          </div>

          <div className="bcard">
            <div className="text-[10px] font-bold text-gray-400 mb-3 tracking-wide">
              CRASH REPORT #0115 –<br />
              App Santé (B2C)
            </div>
            <div className="badge-success mb-3">
              <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                <path
                  d="M2 6l3 3 5-5"
                  stroke="#0a8030"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              SUCCÈS
            </div>
            <div className="text-gray-400 text-[10px] font-semibold mb-1">
              Cause :
            </div>
            <div className="text-gray-300 text-[11px] leading-relaxed mb-4">
              Validité Marché &amp; Produit (Phase
              <br />
              1-8 confirmée) · Prêt pour Seed
            </div>
            <div className="w-full" style={{ height: "60px" }}>
              <svg
                width="100%"
                height="60"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#20cc50" stopOpacity=".3" />
                    <stop offset="100%" stopColor="#20cc50" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,55 C20,52 40,48 60,42 C80,35 100,28 120,20 C140,13 160,8 200,4"
                  fill="none"
                  className="chart-green"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0,55 C20,52 40,48 60,42 C80,35 100,28 120,20 C140,13 160,8 200,4 L200,60 L0,60 Z"
                  fill="url(#greenGrad)"
                />
              </svg>
            </div>
          </div>

          <div className="bcard">
            <div className="text-[10px] font-bold text-gray-400 mb-3 tracking-wide">
              CRASH REPORT #0116 –<br />
              E-commerce durable
            </div>
            <div className="badge-progress mb-3">
              <span style={{ fontSize: "13px", fontWeight: "900" }}>?</span>EN
              COURS
            </div>
            <div className="text-gray-400 text-[10px] font-semibold mb-1">
              Cause :
            </div>
            <div className="text-gray-300 text-[11px] leading-relaxed mb-3">
              Test n°3 : Marché Adressable
              <br />
              confirmé.
              <br />
              Test n°4 : MVP en cours de
              <br />
              développement.
            </div>
            <div className="prog-bar">
              <div className="prog-fill" style={{ width: "35%" }}></div>
            </div>
          </div>

          <button className="flex-shrink-0 w-10 h-10 rounded-full border border-[#2a3560] text-gray-400 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <button className="border border-gray-500 text-white text-[13px] font-semibold px-8 py-3 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-colors">
            Accéder à la base de données
          </button>
        </div>
      </div>
    </section>
  );
}
