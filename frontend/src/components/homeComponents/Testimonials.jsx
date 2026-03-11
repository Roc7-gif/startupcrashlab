import React from "react";

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-900 text-3xl font-extrabold text-center mb-2">
          Preuve & Action
        </h2>
        <p className="text-gray-600 text-sm text-center mb-10">
          Créez votre compte pour accéder à tous les témoignages
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Témoignage 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                ★ Fond Placé
              </span>
              <span className="text-4xl text-gray-300 font-serif">"</span>
            </div>
            <p className="text-gray-700 text-sm mb-4 italic">
              "Un audit indispensable avant de lancer !"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                JB
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">Jean Bertil</div>
                <div className="text-gray-500 text-xs">Ingénieur</div>
              </div>
            </div>
            <div className="flex mt-3 text-amber-400">★★★★★</div>
          </div>

          {/* Témoignage 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                ★ Fond Placé
              </span>
              <span className="text-4xl text-gray-300 font-serif">"</span>
            </div>
            <p className="text-gray-700 text-sm mb-4 italic">
              "Grâce au test, nous avons validé notre idée dès la phase 1, avant qu'il ne soit trop tard."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                CB
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">Elarif Benlin</div>
                <div className="text-gray-500 text-xs">Analyste Data</div>
              </div>
            </div>
            <div className="flex mt-3 text-amber-400">★★★★★</div>
          </div>

          {/* Témoignage 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                Fond Réalisé
              </span>
              <span className="text-4xl text-gray-300 font-serif">"</span>
            </div>
            <p className="text-gray-700 text-sm mb-4 italic">
              "Grâce au test, nous avons validé notre marché avant qu'il ne soit trop tard."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                FG
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">France Galango</div>
                <div className="text-gray-500 text-xs">Directrice Stratégie</div>
              </div>
            </div>
            <div className="flex mt-3 text-amber-400">★★★★★</div>
          </div>

          {/* Témoignage 4 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                Fond Réalisé
              </span>
              <span className="text-4xl text-gray-300 font-serif">"</span>
            </div>
            <p className="text-gray-700 text-sm mb-4 italic">
              "Grâce au test, nous aurons évité ce fiasco. On a su pivoter avant qu'il ne soit trop tard."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                VC
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">Kaspar Crous</div>
                <div className="text-gray-500 text-xs">Fondateur</div>
              </div>
            </div>
            <div className="flex mt-3 text-amber-400">★★★★★</div>
          </div>

          {/* Témoignage 5 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                ★ Fond Placé
              </span>
              <span className="text-4xl text-gray-300 font-serif">"</span>
            </div>
            <p className="text-gray-700 text-sm mb-4 italic">
              "Grâce au test, nous aurons validé notre MVP aujourd'hui et nous avons évité le pire."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                MH
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">Martine Hudson</div>
                <div className="text-gray-500 text-xs">CEO & Co-fondatrice</div>
              </div>
            </div>
            <div className="flex mt-3 text-amber-400">★★★★★</div>
          </div>

          {/* Témoignage 6 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                Fond Réalisé
              </span>
              <span className="text-4xl text-gray-300 font-serif">"</span>
            </div>
            <p className="text-gray-700 text-sm mb-4 italic">
              "Grâce au test, nous avons validé notre pitch auprès des investisseurs dès la phase 3."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                PG
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">Pierre Garneau</div>
                <div className="text-gray-500 text-xs">Business Developer</div>
              </div>
            </div>
            <div className="flex mt-3 text-amber-400">★★★★★</div>
          </div>
        </div>

        {/* Bannière orange */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-tight">
            Sécurisez votre trajectoire.
            <br />
            Testez votre solution maintenant.
          </h3>
          <button className="mt-6 bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            Commencer maintenant
          </button>
        </div>
      </div>
    </section>
  );
}