
export default function EmailSentMessage({  onClose }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-green-500 text-white rounded-lg shadow-xl p-4 max-w-sm">
        <div className="flex items-start gap-3">
          <svg
            className="w-6 h-6 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div className="flex-1">
            <p className="font-bold">Email envoyé !</p>
            <p className="text-sm text-green-100">
              Les informations  ont été envoyées.         </p>
          </div>
          <button onClick={onClose} className="text-green-100 hover:text-white">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
