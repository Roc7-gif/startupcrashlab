import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import BookshelfSection from "../components/BookshelfSection";
import BlackboxSection from "../components/BlackboxSection";
import PourquoiSection from "../components/PourquoiSection";
import Programme from "../components/Programe";
import WorkingSection from "../components/WorkingSection";
import ForWhat from "../components/ForWhat";
import Impact from "../components/Impact";
import Testimonials from "../components/Testimonials";
import Coach from "../components/Coach";
import Cta from "../components/Cta";
import Footer from "../components/footer";
import FloatingBtn from "../components/floatingBtn";
import Members from "../components/Members";
import { useLogin, useRegister } from "../api/auth";
import { useAuthStore } from "../store/authStore";

export default function Home() {
  useEffect(() => {
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href && href !== "#") {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirm: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});

  // Gestionnaire pour le formulaire d'inscription
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  // Gestionnaire pour le formulaire de connexion
  const handleLoginInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    if (loginErrors[e.target.name]) {
      setLoginErrors({
        ...loginErrors,
        [e.target.name]: "",
      });
    }
  };

  // Soumission du formulaire d'inscription
  const login = useAuthStore.getState().login;
  const { mutate } = useRegister(formData);
  const { mutate: loginmutate } = useLogin(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    if (formData.password !== formData.password_confirm) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    console.log(formData.password_confirm);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      mutate(
        formData,
        {
          onSuccess: (data) => {
            console.log(data);
            loginmutate(formData, {
              onSuccess: (data) => {
                console.log(data);

                login(data);
              },
            });
          },
        },
      );

      //   setIsSignupModalOpen(false);
      // Réinitialiser le formulaire
      //   setFormData({ email: "", password: "", confirmPassword: "" });
      // Afficher un message de succès (optionnel)
      //   alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
    }
  };

  // Soumission du formulaire de connexion
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!loginData.password) {
      newErrors.password = "Le mot de passe est requis";
    }

    if (Object.keys(newErrors).length > 0) {
      setLoginErrors(newErrors);
    } else {
      console.log("Connexion:", loginData);
      setIsLoginModalOpen(false);
      // Réinitialiser le formulaire
      setLoginData({ email: "", password: "" });
      // Afficher un message de succès (optionnel)
      alert("Connexion réussie !");
    }
    };
    
  return (
    <>
      <HeroSection
        setIsLoginModalOpen={setIsLoginModalOpen}
        setIsSignupModalOpen={setIsSignupModalOpen}
      />

      {/* Transition douce avec gradient */}
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <Programme setIsLoginModalOpen={setIsLoginModalOpen} />

      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <BlackboxSection />

      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <BookshelfSection />
      <Members />
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <PourquoiSection />

      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <WorkingSection />

      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <ForWhat />

      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <Impact />

      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <Testimonials />

      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <Coach />

      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <Cta />

      <Footer />

      <FloatingBtn />

      {/* Modal d'inscription */}
      <div
        className={`modal-overlay ${isSignupModalOpen ? "active" : ""}`}
        onClick={() => setIsSignupModalOpen(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Créer un compte</h2>
            <button
              onClick={() => setIsSignupModalOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                name="password_confirm"
                value={formData.password_confirm}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105"
            >
              Créer mon compte
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Déjà un compte ?{" "}
              <button
                onClick={() => {
                  setIsSignupModalOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="text-orange-500 hover:text-orange-400 font-semibold"
              >
                Se connecter
              </button>
            </p>
          </div>

          <p className="text-gray-400 text-xs text-center mt-4">
            En créant un compte, vous acceptez nos conditions d'utilisation
          </p>
        </div>
      </div>

      {/* Modal de connexion */}
      <div
        className={`modal-overlay ${isLoginModalOpen ? "active" : ""}`}
        onClick={() => setIsLoginModalOpen(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Connexion</h2>
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="votre@email.com"
              />
              {loginErrors.email && (
                <p className="text-red-500 text-xs mt-1">{loginErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                placeholder="••••••••"
              />
              {loginErrors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {loginErrors.password}
                </p>
              )}
            </div>

            {/* <div className="flex justify-end">
              <button type="button" className="text-sm text-orange-500 hover:text-orange-400">
                Mot de passe oublié ?
              </button>
            </div>
             */}
            <button
              onClick={() => {
                setIsLoginModalOpen(false);
                setIsSignupModalOpen(true);
              }}
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Pas encore de compte ?{" "}
              <button
                onClick={() => {
                  setIsLoginModalOpen(false);
                  setIsSignupModalOpen(true);
                }}
                className="text-orange-500 hover:text-orange-400 font-semibold"
              >
                S'inscrire
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
