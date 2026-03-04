import React from "react";

export default function Programme() {
  return (
  <section id="programme" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-4">
              Un parcours progressif pour{" "}
              <span className="text-orange-500">transformer votre idée</span>
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              4 programmes conçus pour vous accompagner de la validation à
              l'exécution, avec des résultats concrets à chaque étape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Carte 1 */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-200 hover:border-orange-500 transition hover:shadow-xl h-full flex flex-col">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Founder Crash Test
                </h3>
                <p className="text-sm text-orange-500 font-semibold mb-3">
                  15 min • Gratuit
                </p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Évaluez rapidement la viabilité de votre idée avec un
                  diagnostic personnalisé.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mt-auto">
                  <li className="flex items-start gap-2">
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
                      className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Analyse rapide de votre concept</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Points de vigilance identifiés</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Carte 2 */}
            <div>
              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border-2 border-yellow-300 hover:border-orange-500 transition hover:shadow-xl h-full flex flex-col">
                <div className="text-4xl mb-4">🟡</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Startup Clarity Sprint
                </h3>
                <p className="text-sm text-orange-500 font-semibold mb-3">
                  7 jours
                </p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Clarifiez votre vision, validez votre marché et définissez
                  votre stratégie.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mt-auto">
                  <li className="flex items-start gap-2">
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
                      className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Business model canvas complet</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Validation client terrain</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Carte 3 */}
            <div>
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-300 hover:border-orange-500 transition hover:shadow-xl h-full flex flex-col">
                <div className="text-4xl mb-4">🟠</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Idea-to-MVP Sprint
                </h3>
                <p className="text-sm text-orange-500 font-semibold mb-3">
                  15 jours
                </p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Construisez votre MVP et lancez vos premières ventes
                  rapidement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mt-auto">
                  <li className="flex items-start gap-2">
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
                      className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>MVP fonctionnel livré</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Stratégie de lancement</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Carte 4 */}
            <div>
              <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-2 border-red-300 hover:border-orange-500 transition hover:shadow-xl h-full flex flex-col">
                <div className="text-4xl mb-4">🔴</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Founder Growth Lab
                </h3>
                <p className="text-sm text-orange-500 font-semibold mb-3">
                  30 jours
                </p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Accélérez votre croissance et développez votre leadership de
                  fondateur.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mt-auto">
                  <li className="flex items-start gap-2">
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
                      className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Scaling strategy complète</span>
                  </li>
                  <li className="flex items-start gap-2">
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
                      className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Coaching leadership individuel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}


