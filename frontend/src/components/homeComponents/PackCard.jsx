import React from "react";

export default function PackCard({ pack, onSelect }) {
  const getGradientByPack = (packName) => {
    switch(packName) {
      case "Pack Idée": return "from-blue-50 to-white";
      case "Pack Marché": return "from-green-50 to-white";
      case "Pack Structure": return "from-purple-50 to-white";
      case "Pack Scale": return "from-orange-50 to-white";
      default: return "from-gray-50 to-white";
    }
  };

  const getBorderByPack = (packName) => {
    switch(packName) {
      case "Pack Idée": return "border-blue-200";
      case "Pack Marché": return "border-green-200";
      case "Pack Structure": return "border-purple-200";
      case "Pack Scale": return "border-orange-300";
      default: return "border-gray-200";
    }
  };

  const getIconColorByPack = (packName) => {
    switch(packName) {
      case "Pack Idée": return "text-blue-500";
      case "Pack Marché": return "text-green-500";
      case "Pack Structure": return "text-purple-500";
      case "Pack Scale": return "text-orange-500";
      default: return "text-gray-500";
    }
  };

  const getEmojiByPack = (packName) => {
    switch(packName) {
      case "Pack Idée": return "💡";
      case "Pack Marché": return "📊";
      case "Pack Structure": return "🏗️";
      case "Pack Scale": return "🚀";
      default: return "📦";
    }
  };

  const gradient = getGradientByPack(pack.pack);
  const border = getBorderByPack(pack.pack);
  const iconColor = getIconColorByPack(pack.pack);
  const emoji = getEmojiByPack(pack.pack);

  return (
    <div className="opacity-0 fade-in-up h-full">
      <div 
        onClick={() => onSelect(pack)}
        className={`bg-gradient-to-br ${gradient} p-6 rounded-2xl border-2 ${border} hover:border-orange-500 transition-all hover:shadow-xl h-full flex flex-col group hover:transform hover:scale-105 cursor-pointer`}
      >
        {/* En-tête avec emoji et titre du pack */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`text-3xl ${iconColor} group-hover:animate-bounce`}>
            {emoji}
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            {pack.pack}
          </h3>
        </div>
        
        {/* Objectif */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            Objectif :
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {pack.objective}
          </p>
        </div>
        
        {/* Délivrables */}
        <div className="mb-4 flex-grow">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Délivrables :
          </p>
          <ul className="space-y-2">
            {pack.deliverables.map((deliverable, idx) => (
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
                  className={`w-4 h-4 ${iconColor} flex-shrink-0`}
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span className="text-sm text-gray-600">{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Badge de validation */}
        <div className="mt-auto pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Statut</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="3" fill="currentColor" />
              </svg>
              Disponible
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}