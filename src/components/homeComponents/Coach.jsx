import React from "react";

export default function Coach() {
  return (
   <section id="coach" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
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
                      className="w-16 h-16 text-white"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">
                    Photo Igor N. C. SEMANOU
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                  Igor N. C. SEMANOU
                </h2>
                <p className="text-xl text-orange-500 font-bold mb-6">
                  Startup Builder • Founder Coach • Expert en Innovation
                </p>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Avec{" "}
                    <span className="font-bold">
                      plus de 20 ans d'expérience
                    </span>{" "}
                    dans l'accompagnement de startups et l'innovation, Igor a
                    aidé des centaines de fondateurs à transformer leurs idées
                    en entreprises viables.
                  </p>
                  <p>
                    Sa méthode ?{" "}
                    <span className="font-bold">
                      Pragmatique, directe, sans détour.
                    </span>{" "}
                    Pas de théorie abstraite, uniquement des frameworks éprouvés
                    et des actions concrètes qui génèrent des résultats
                    mesurables.
                  </p>
                  <p>
                    Expert en structuration d'idées, validation de marchés et
                    construction de MVP, Igor accompagne particulièrement les
                    fondateurs francophones d'Afrique dans leur parcours
                    entrepreneurial.
                  </p>
                </div>
                <div className="flex gap-4 mt-8">
                  <div className="bg-orange-500/10 px-4 py-2 rounded-lg">
                    <p className="text-2xl font-black text-orange-500">20+</p>
                    <p className="text-sm text-gray-600">Ans d'expérience</p>
                  </div>
                  <div className="bg-orange-500/10 px-4 py-2 rounded-lg">
                    <p className="text-2xl font-black text-orange-500">500+</p>
                    <p className="text-sm text-gray-600">
                      Founders accompagnés
                    </p>
                  </div>
                  <div className="bg-orange-500/10 px-4 py-2 rounded-lg">
                    <p className="text-2xl font-black text-orange-500">100+</p>
                    <p className="text-sm text-gray-600">Startups lancées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
