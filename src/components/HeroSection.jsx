import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-white hero-grid min-h-screen relative">
      <nav className="flex items-center justify-between px-10 py-5 relative z-10 max-w-7xl mx-auto">
        <div className="text-[22px] tracking-tight">
          <span className="logo-startup">startup</span>
          <span className="logo-crash">crash</span>
          <span className="logo-lab">lab</span>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            Les 12 Tests
          </a>
          <a
            href="#"
            className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            La BlackBox
          </a>
          <a
            href="#"
            className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            Tarifs
          </a>
          <a
            href="#"
            className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-[14px] font-semibold text-orange-500 border border-orange-500 rounded-md px-5 py-2 hover:bg-orange-500 hover:text-white transition-all"
          >
            Se connecter
          </a>
        </div>
      </nav>

      <div className="flex items-center justify-between px-10 pt-10 pb-20 max-w-7xl mx-auto relative z-10">
        <div className=" w-full">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-1">
            Ne lancez pas votre
            <br />
            startup à l'aveugle.
          </h1>
          <h2 className="text-5xl font-extrabold text-orange-500 leading-tight mb-5">
            Crashez-la.
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
            12 protocoles de validation scientifique pour
            <br />
            passer de l'idée à la rentabilité.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-[15px] px-7 py-4 rounded-lg transition-colors shadow-lg shadow-orange-200">
            Démarrer le Test n°1 – Gratuit
          </button>
        </div>

        <div className="w-full relative justify-center  text-center flex">
          <div className="coin-wrap max-w-[320px]   ">
            <div className="absolute top-[20px] right-[-20px] w-4 h-4 rounded-full bg-orange-400 opacity-80"></div>
            <div className="absolute bottom-[40px] left-[-15px] w-2.5 h-2.5 rounded-full bg-orange-500 opacity-60"></div>
            <div className="absolute bottom-[10px] left-[-50px] flex items-end gap-1">
              <div
                className="w-2 bg-orange-400 opacity-60 rounded-sm"
                style={{ height: "14px" }}
              ></div>
              <div
                className="w-2 bg-orange-400 opacity-60 rounded-sm"
                style={{ height: "22px" }}
              ></div>
              <div
                className="w-2 bg-orange-400 opacity-60 rounded-sm"
                style={{ height: "10px" }}
              ></div>
              <div
                className="w-2 bg-orange-400 opacity-60 rounded-sm"
                style={{ height: "18px" }}
              ></div>
            </div>
            <div
              className="absolute top-[10px] left-[-30px] w-0 h-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "14px solid #f07000",
                opacity: 0.5,
              }}
            ></div>
            <div
              className="absolute bottom-[20px] right-[-30px] w-0 h-0"
              style={{
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderBottom: "10px solid #f07000",
                opacity: 0.4,
              }}
            ></div>
            <div className="absolute bottom-[-10px] right-[-20px]">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="#f07000"
                  strokeWidth="3"
                  strokeDasharray="60 41"
                  strokeDashoffset="15"
                  opacity=".7"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="#1a2a4a"
                  strokeWidth="3"
                  strokeDasharray="41 60"
                  strokeDashoffset="-45"
                  opacity=".4"
                />
              </svg>
            </div>
            <div className="coin">
              <span className="coin-x">X</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
