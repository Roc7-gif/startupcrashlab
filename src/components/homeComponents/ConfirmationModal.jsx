import React, { useState } from "react";
import EmailSentMessage from "./EmailSentMessage";

export default function ConfirmationModal({
  isOpen,
  onClose,
  pack,
  onConfirm,
}) {
  const [showEmailSent, setShowEmailSent] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setShowEmailSent(true);
    setTimeout(() => {
      setShowEmailSent(false);
      onClose();
    }, 3000);
  };

  const getIconByPack = (packName) => {
    switch (packName) {
      case "Pack Idée":
        return "💡";
      case "Pack Marché":
        return "📊";
      case "Pack Structure":
        return "🏗️";
      case "Pack Scale":
        return "🚀";
      default:
        return "📦";
    }
  };

  return (
    <>
      <div
        className={`modal-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      >
        <div
          className="modal-content max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{getIconByPack(pack?.pack)}</span>
              <h2 className="text-2xl font-bold text-white">Confirmation</h2>
            </div>
            <button
              onClick={onClose}
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

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              {pack?.pack}
            </h3>
            <p className="text-gray-300 mb-4">{pack?.objective}</p>

            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-gray-400 mb-2">
                Délivrables inclus :
              </p>
              <ul className="space-y-2">
                {pack?.deliverables.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-orange-500"
                    >
                      <circle cx="8" cy="8" r="4" fill="currentColor" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-400">
              Vous recevrez un email de confirmation avec tous les détails du
              programme.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
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
        </div>
      </div>

      <EmailSentMessage
        isVisible={true}
        packName={pack?.pack}
        onClose={() => setShowEmailSent(false)}
      />
    </>
  );
}
