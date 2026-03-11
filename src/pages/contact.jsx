import React, { useState, useRef } from "react";
// import EmailSentMessage from "./EmailSentMessage";
// import ErrorDisplayer from "./Error";
// import Loader from "../others/loader";
import EmailSentMessage from "../components/homeComponents/EmailSentMessage";
import ErrorDisplayer from "../components/homeComponents/Error";
import Loader from "../components/others/loader";
import { Nav } from "../components/homeComponents/Naavig";
import { useContact } from "../api/ContactApi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showEmailSent, setShowEmailSent] = useState(false);
  const [error, setError] = useState("");

  // Références pour les champs (optionnel, pour validation)
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fonction pour afficher une erreur temporaire
  const displayError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-]{8,15}$/;

    if (!formData.name || formData.name.trim().length < 2) {
      displayError("Veuillez saisir un nom valide (minimum 2 caractères).");
      return false;
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      displayError("Veuillez saisir une adresse email valide.");
      return false;
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      displayError(
        "Veuillez saisir un numéro de téléphone valide (8-15 chiffres).",
      );
      return false;
    }

    if (!formData.message || formData.message.trim().length < 10) {
      displayError("Votre message doit contenir au moins 10 caractères.");
      return false;
    }

    return true;
  };
  const { mutate, isPending } = useContact();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      mutate(formData, {
        onSuccess: (res) => {
          if (res.status === "success" || !res.response) {
            // Adaptation selon le format de ta réponse API
            setShowEmailSent(true);
            setTimeout(() => setShowEmailSent(false), 3000);
          } else if (res.response) {
            const message = res.response?.data?.error || "Erreur Inconnue";
            displayError(message);
          }
        },
        onError: (err) => {
          const message =
            err.response?.data?.detail ||
            err.message ||
            "Erreur inconnue lors de la réservation";
          displayError(message);
        },
      });
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      displayError(
        err.message || "Une erreur est survenue. Veuillez réessayer.",
      );
    }
  };

  return (
    <>
      <Nav />

      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen"
      >
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* En-tête */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              <span className="text-orange-500">Contactez</span>-nous
            </h1>
            <p className="text-xl text-gray-600">
              Vous avez une question ? Une idée à discuter ? Notre équipe est là
              pour vous accompagner.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <p className="text-gray-600 mt-1">
                        contact@startupcrashlab.com
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Réponse sous 24-48h
                      </p>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Téléphone
                      </h3>
                      <p className="text-gray-600 mt-1">+229 97 00 00 00</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Lun-Ven, 9h-18h
                      </p>
                    </div>
                  </div>

                  {/* Adresse */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Bureau</h3>
                      <p className="text-gray-600 mt-1">Cotonou, Bénin</p>
                      {/* <p className="text-gray-600">Cotonou, Bénin</p> */}
                    </div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-slate-900 mb-4">
                    Suivez-nous
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.577-12.379c0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.548z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Carte ou information supplémentaire */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">
                  Besoin d'aide immédiate ?
                </h3>
                <p className="text-orange-100 mb-4">
                  Notre équipe est disponible pour répondre à vos questions
                  concernant nos programmes d'accompagnement.
                </p>
                <div className="flex items-center gap-2 text-orange-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Réponse garantie sous 24h</span>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nom complet <span className="text-orange-500">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    placeholder="Jean Dupont"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    placeholder="jean@exemple.com"
                  />
                </div>

                {/* Téléphone (optionnel) */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Téléphone{" "}
                    <span className="text-gray-400 text-xs">(optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    placeholder="+229 97 00 00 00"
                  />
                </div>

                {/* Sujet */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition bg-white"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="programme">Question sur un programme</option>
                    <option value="accompagnement">
                      Accompagnement personnalisé
                    </option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
                    placeholder="Bonjour, je souhaiterais en savoir plus sur vos programmes..."
                  ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Les champs marqués d'un{" "}
                  <span className="text-orange-500">*</span> sont obligatoires.
                </p>
              </form>
            </div>
          </div>

          {/* Section FAQ rapide */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Questions fréquentes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Délai de réponse ?
                </h4>
                <p className="text-gray-600 text-sm">
                  Nous répondons à tous les messages sous 24-48h ouvrées.
                </p>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Puis-je réserver un appel ?
                </h4>
                <p className="text-gray-600 text-sm">
                  Oui, indiquez-le dans votre message et nous vous enverrons un
                  lien de réservation.
                </p>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Accompagnement personnalisé ?
                </h4>
                <p className="text-gray-600 text-sm">
                  Contactez-nous pour discuter de vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications */}
      {showEmailSent && (
        <EmailSentMessage onClose={() => setShowEmailSent(false)} />
      )}
      {error && <ErrorDisplayer error={error} />}
    </>
  );
}
