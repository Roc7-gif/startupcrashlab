import { useAuthStore } from "../../store/authStore";
import { Nav } from "./Naavig";

export default function HeroSection({ setIsLoginModalOpen }) {
  const logout = useAuthStore((state) => state.logout);
  const isauth = true;

  // console.log(isauth);
  return (
    <>
      <section
        id="hero"
        className="bg-white hero-grid min-h-screen relative overflow-hidden"
      >
        {/* Éléments décoratifs animés */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        <Nav />
        {/* Contenu principal - responsive */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 pt-10 pb-20 max-w-7xl mx-auto relative z-10 gap-12">
          {/* Texte à gauche */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-5xl lg:text-5.5xl font-extrabold text-gray-900 leading-tight mb-1 fade-in-up">
              N’investissez plus un seul franc dans votre projet sans vérifier
              <div className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-orange-500 leading-tight mb-5 fade-in-up delay-200">
                si vous ne gaspillez pas vos ressources
              </div>
            </h1>

            <p className="text-gray-500 text-[16px] leading-relaxed mb-8 fade-in-up delay-400">
              Sortez de l'illusion.
              <br className="hidden sm:block" />
              Nos protocoles de validation vous disent s'il faut persévérer,
              changer de cap ou tout arrêter.
            </p>
            {!isauth && (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold text-[15px] px-7 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 fade-in-up delay-600"
              >
                Lancer un Quick Test Gratuit
              </button>
            )}
            {isauth && (
              <a
                href="#protocoles"
                className="bg-orange-500 cursor-pointer no-underline hover:bg-orange-600 text-white font-bold text-[15px] px-7 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 fade-in-up delay-600"
              >
                Lancer un Quick Test Gratuit
              </a>
            )}
          </div>

          {/* Image à droite - inchangée */}
          <div className="w-full lg:w-1/2 relative flex justify-center text-center">
            <div className="coin-wrap max-w-[320px] animate-float">
              <div className="absolute top-[20px] right-[-20px] w-4 h-4 rounded-full bg-orange-400 opacity-80 animate-ping"></div>
              <div className="absolute bottom-[40px] left-[-15px] w-2.5 h-2.5 rounded-full bg-orange-500 opacity-60 animate-pulse"></div>
              <div className="absolute bottom-[10px] left-[-50px] flex items-end gap-1">
                <div
                  className="w-2 bg-orange-400 opacity-60 rounded-sm animate-grow"
                  style={{ height: "14px", animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 bg-orange-400 opacity-60 rounded-sm animate-grow"
                  style={{ height: "22px", animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 bg-orange-400 opacity-60 rounded-sm animate-grow"
                  style={{ height: "10px", animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-2 bg-orange-400 opacity-60 rounded-sm animate-grow"
                  style={{ height: "18px", animationDelay: "0.4s" }}
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
              <div className="coin animate-spin-slow">
                <span className="coin-x">X</span>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll pour mobile */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-orange-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
    </>
  );
}
