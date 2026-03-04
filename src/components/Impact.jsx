import React from "react";

export default function Impact() {
  return (
  <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-16">
              Notre <span className="text-orange-500">impact</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-center p-8 bg-orange-500/5 rounded-2xl border-2 border-orange-500/20">
                <p className="text-5xl font-black text-orange-500 mb-2">500+</p>
                <p className="text-gray-600 font-semibold">idées évaluées</p>
              </div>
            </div>
            <div>
              <div className="text-center p-8 bg-orange-500/5 rounded-2xl border-2 border-orange-500/20">
                <p className="text-5xl font-black text-orange-500 mb-2">200+</p>
                <p className="text-gray-600 font-semibold">
                  founders clarifiés
                </p>
              </div>
            </div>
            <div>
              <div className="text-center p-8 bg-orange-500/5 rounded-2xl border-2 border-orange-500/20">
                <p className="text-5xl font-black text-orange-500 mb-2">100+</p>
                <p className="text-gray-600 font-semibold">MVP construits</p>
              </div>
            </div>
            <div>
              <div className="text-center p-8 bg-orange-500/5 rounded-2xl border-2 border-orange-500/20">
                <p className="text-5xl font-black text-orange-500 mb-2">50+</p>
                <p className="text-gray-600 font-semibold">
                  founders transformés
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
