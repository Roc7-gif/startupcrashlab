import React from "react";

export default function Cta() {
  return (
   <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
              Prêt à passer de l'idée à l'exécution ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Commencez par notre Founder Crash Test gratuit de 15 minutes et
              découvrez le potentiel réel de votre idée.
            </p>
            <button className="bg-orange-500 text-white px-10 py-5 rounded-lg hover:bg-orange-600 transition font-bold text-xl inline-flex items-center gap-3 shadow-2xl shadow-orange-500/30">
              Réserver mon Crash Test gratuit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
  );
}
