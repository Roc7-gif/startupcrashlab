import React from "react";

export default function BookshelfSection() {
  return (
    <>
     <section  className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Texte en sombre */}
        <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-12 md:mb-24 tracking-tight uppercase">
          Ressources & Équipe
        </h2>
        
        <div className="shelf-scene relative w-full flex flex-col items-center px-0 md:px-4">
          {/* flex-col sur mobile pour empiler, w-full pour prendre toute la largeur */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-6 md:gap-10 w-full z-20 -mb-[1px]">
            
            {/* Livre 1 */}
            <div className="book-wrapper cursor-pointer group w-full md:w-auto">
              {/* w-full sur mobile, taille fixe sur desktop */}
              <div className="book w-[80%]  m-auto  h-[300px] md:w-[180px] md:h-[260px] relative">
                <div className="book-top"></div>
                <div className="book-spine"></div>
                {/* Couverture claire : bg-white, texte sombre */}
                <div className="absolute inset-0 bg-white rounded-r-md shadow-lg flex flex-col p-4 md:p-4 border border-gray-200">
                  <div className="h-3/5 md:h-2/5 overflow-hidden rounded bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=300"
                      className="w-full h-full object-cover opacity-90"
                      alt="icon"
                    />
                  </div>
                  <div className="h-2/5 md:h-3/5 flex flex-col justify-end">
                    <h3 className="text-gray-900 text-sm md:text-xs font-bold leading-tight uppercase">
                      L'ART DU PIVOT
                    </h3>
                    <div className="w-full h-[3px] bg-orange-500 mt-2 opacity-80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Livre 2 */}
            <div className="book-wrapper cursor-pointer group w-full md:w-auto">
              <div className="book w-[80%]  m-auto  h-[300px] md:w-[180px] md:h-[260px] relative">
                <div className="book-top"></div>
                <div className="book-spine"></div>
                <div className="absolute inset-0 bg-white rounded-r-md shadow-lg flex flex-col p-4 md:p-4 border border-gray-200">
                  <div className="h-3/5 md:h-2/5 overflow-hidden rounded bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=300"
                      className="w-full h-full object-cover opacity-90"
                      alt="icon"
                    />
                  </div>
                  <div className="h-2/5 md:h-3/5 flex flex-col justify-end">
                    <h3 className="text-gray-900 text-sm md:text-xs font-bold leading-tight uppercase">
                      Structure Agile
                    </h3>
                    <div className="w-full h-[3px] bg-blue-400 mt-2 opacity-80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Livre 3 */}
            <div className="book-wrapper cursor-pointer group w-full md:w-auto">
              <div className="book w-[80%]  m-auto  h-[300px] md:w-[180px] md:h-[260px] relative">
                <div className="book-top"></div>
                <div className="book-spine"></div>
                <div className="absolute inset-0 bg-white rounded-r-md shadow-lg flex flex-col p-4 md:p-4 border border-gray-200">
                  <div className="h-3/5 md:h-2/5 overflow-hidden rounded bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300"
                      className="w-full h-full object-cover opacity-90"
                      alt="icon"
                    />
                  </div>
                  <div className="h-2/5 md:h-3/5 flex flex-col justify-end">
                    <h3 className="text-gray-900 text-sm md:text-xs font-bold leading-tight uppercase">
                      Validation
                    </h3>
                    <div className="w-full h-[3px] bg-green-400 mt-2 opacity-80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Livre 4 */}
            <div className="book-wrapper cursor-pointer group w-full md:w-auto">
              <div className="book w-[80%]  m-auto  h-[300px] md:w-[180px] md:h-[260px] relative">
                <div className="book-top"></div>
                <div className="book-spine"></div>
                <div className="absolute inset-0 bg-white rounded-r-md shadow-lg flex flex-col p-4 md:p-4 border border-gray-200">
                  <div className="h-3/5 md:h-2/5 overflow-hidden rounded bg-gray-100 grayscale">
                    <img
                      src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=300"
                      className="w-full h-full object-cover opacity-90"
                      alt="icon"
                    />
                  </div>
                  <div className="h-2/5 md:h-3/5 flex flex-col justify-end">
                    <h3 className="text-gray-900 text-sm md:text-xs font-bold leading-tight uppercase">
                      Équipe
                    </h3>
                    <div className="w-full h-[3px] bg-gray-400 mt-2 opacity-80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
   
  );
}