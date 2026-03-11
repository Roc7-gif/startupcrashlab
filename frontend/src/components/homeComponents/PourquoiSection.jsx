import React from "react";

export default function PourquoiSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-4">
            Pourquoi 90% des startups échouent ?
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Les fondateurs brillants échouent non par manque d'idées, mais par
            manque de structure, validation et exécution.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-orange-500 transition">
              <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
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
                  className="w-8 h-8 text-orange-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pas de structure
              </h3>
              <p className="text-gray-600">
                Vous avez une idée mais vous ne savez pas par où commencer ni
                comment structurer votre approche.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-orange-500 transition">
              <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
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
                  className="w-8 h-8 text-orange-500"
                >
                  <path d="M12 17h.01" />
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                  <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pas de validation
              </h3>
              <p className="text-gray-600">
                Vous construisez sans valider auprès de vrais clients et risquez
                de perdre temps et argent.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-orange-500 transition">
              <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
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
                  className="w-8 h-8 text-orange-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pas d'exécution
              </h3>
              <p className="text-gray-600">
                Vous restez bloqué dans la planification sans jamais passer à
                l'action concrète.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
