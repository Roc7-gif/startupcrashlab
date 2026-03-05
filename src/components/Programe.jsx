import React, { useEffect, useRef, useState } from "react";
import { useAuthStore } from "../store/authStore";

export default function Programme({ setIsLoginModalOpen}) {
  const cardsRef = useRef([]);
  const [selectedPack, setSelectedPack] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEmailSent, setShowEmailSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('fade-in-up');
            }, index * 100);
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

  const programs = [
    {
      pack: "Pack Idée",
      emoji: "💡",
      objective: "Œuvrez votre idée : actifs identifiés",
      deliverables: ["Safie du Sport", "Validation"],
      gradient: "from-blue-50 to-white",
      border: "border-blue-200",
      iconColor: "text-blue-500",
      bgGlow: "bg-blue-100"
    },
    {
      pack: "Pack Marché",
      emoji: "📊",
      objective: "Analyse sédiments : noms pratis",
      deliverables: ["Gelite-Glo Report", "Validation"],
      gradient: "from-green-50 to-white",
      border: "border-green-200",
      iconColor: "text-green-500",
      bgGlow: "bg-green-100"
    },
    {
      pack: "Pack Structure",
      emoji: "🏗️",
      objective: "Structure arrosive vimotants",
      deliverables: ["L'Art du Pivot", "Validation"],
      gradient: "from-purple-50 to-white",
      border: "border-purple-200",
      iconColor: "text-purple-500",
      bgGlow: "bg-purple-100"
    },
    {
      pack: "Pack Scale",
      emoji: "🚀",
      objective: "Plan de scaling opérationnel",
      deliverables: ["Plan de Scaling", "Validation"],
      gradient: "from-orange-50 to-white",
      border: "border-orange-300",
      iconColor: "text-orange-500",
      bgGlow: "bg-orange-100"
    }
  ];

  const handlePackClick = (program) => {
    setSelectedPack(program);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    setShowEmailSent(true);
    setTimeout(() => {
      setShowEmailSent(false);
    }, 3000);
  };
  const isauth =useAuthStore.getState().access

  return (
    <>
      <section id="programme" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-4">
              Nos{" "}
              <span className="text-orange-500">Protocoles de Validation</span>
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              4 packs progressifs pour valider chaque étape de votre startup, de l'idée au scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="opacity-0 h-full cursor-pointer"
                onClick={() => {
                  
                  if (!isauth) {
                    setIsLoginModalOpen(true)
                  } else {
                    handlePackClick(program)
                  }
                }

                }
              >
                <div className={`bg-gradient-to-br ${program.gradient} p-6 rounded-2xl border-2 ${program.border} hover:border-orange-500 transition-all hover:shadow-xl h-full flex flex-col group hover:transform hover:scale-105 relative overflow-hidden`}>
                  {/* Effet de glow au hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 ${program.bgGlow} transition-opacity duration-300`}></div>
                  
                  {/* En-tête avec emoji et titre du pack */}
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className={`text-3xl ${program.iconColor} group-hover:animate-bounce`}>
                      {program.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {program.pack}
                    </h3>
                  </div>
                  
                  {/* Objectif */}
                  <div className="mb-4 relative z-10">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Objectif :
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {program.objective}
                    </p>
                  </div>
                  
                  {/* Délivrables */}
                  <div className="mb-4 flex-grow relative z-10">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Délivrables :
                    </p>
                    <ul className="space-y-2">
                      {program.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`w-4 h-4 ${program.iconColor} flex-shrink-0`}
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <span className="text-sm text-gray-600">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Indicateur de clic */}
                  <div className="mt-auto pt-3 border-t border-gray-200 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Cliquez pour plus d'infos</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`${program.iconColor} group-hover:translate-x-1 transition-transform`}
                      >
                        <path
                          d="M6 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note explicative */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              * Cliquez sur un pack pour recevoir tous les détails par email
            </p>
          </div>
        </div>
      </section>

      {/* Modal de confirmation */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={() => setIsModalOpen(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {selectedPack && (
            <>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{selectedPack.emoji}</span>
                  <h2 className="text-2xl font-bold text-white">Confirmer votre choix</h2>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{selectedPack.pack}</h3>
                <p className="text-gray-300 mb-4">{selectedPack.objective}</p>
                
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Délivrables inclus :</p>
                  <ul className="space-y-2">
                    {selectedPack.deliverables.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-orange-500">
                          <circle cx="8" cy="8" r="4" fill="currentColor"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-gray-400">
                  Vous recevrez un email avec tous les détails du programme et la procédure à suivre.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition"
                >
                  Annuler
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition transform hover:scale-105"
                >
                  Confirmer
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Message de confirmation d'envoi */}
      <div className={`fixed top-5 right-5 z-[1100] transition-all duration-300 transform ${showEmailSent ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-2xl p-4 max-w-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-1">Email envoyé !</h4>
              <p className="text-sm text-green-100">
                Les informations du {selectedPack?.pack} ont été envoyées à votre adresse email.
              </p>
              <div className="mt-2 w-full bg-green-400 h-1 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full animate-shrink"></div>
              </div>
            </div>
            <button onClick={() => setShowEmailSent(false)} className="text-green-100 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Styles pour les animations */}
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
        .animate-shrink {
          animation: shrink 3s linear forwards;
        }
      `}</style>
    </>
  );
}