import React from "react";

export default function BookshelfSection() {
  return (
    <section className="dark-section py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-24 tracking-tight uppercase">
          Ressources & Équipe
        </h2>
        <div className="shelf-scene relative w-full flex flex-col items-center px-4">
          <div className="flex justify-center items-end gap-3 md:gap-10 z-20 -mb-[1px]">
            <div className="book-wrapper cursor-pointer group">
              <div className="book w-[100px] h-[150px] md:w-[180px] md:h-[260px]">
                <div className="book-top"></div>
                <div className="book-spine"></div>
                <div className="absolute inset-0 bg-[#0d1624] rounded-r-sm shadow-2xl flex flex-col p-3 md:p-4 border-l border-white/5">
                  <div className="h-2/5 overflow-hidden rounded bg-black/20">
                    <img
                      src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=300"
                      className="w-full h-full object-cover opacity-80"
                      alt="icon"
                    />
                  </div>
                  <div className="h-3/5 flex flex-col justify-end">
                    <h3 className="text-white text-[10px] md:text-xs font-bold leading-tight">
                      L'ART DU PIVOT
                    </h3>
                    <div className="w-full h-[2px] bg-orange-500 mt-2 opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-wrapper cursor-pointer group">
              <div className="book w-[100px] h-[150px] md:w-[180px] md:h-[260px]">
                <div className="book-top"></div>
                <div className="book-spine"></div>
                <div className="absolute inset-0 bg-[#0d1624] rounded-r-sm shadow-2xl flex flex-col p-3 md:p-4 border-l border-white/5">
                  <div className="h-2/5 overflow-hidden rounded bg-black/20">
                    <img
                      src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=300"
                      className="w-full h-full object-cover opacity-80"
                      alt="icon"
                    />
                  </div>
                  <div className="h-3/5 flex flex-col justify-end">
                    <h3 className="text-white text-[10px] md:text-xs font-bold leading-tight uppercase">
                      Structure Agile
                    </h3>
                    <div className="w-full h-[2px] bg-blue-400 mt-2 opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-wrapper cursor-pointer group">
              <div className="book w-[100px] h-[150px] md:w-[180px] md:h-[260px]">
                <div className="book-top"></div>
                <div className="book-spine"></div>
                <div className="absolute inset-0 bg-[#0d1624] rounded-r-sm shadow-2xl flex flex-col p-3 md:p-4 border-l border-white/5">
                  <div className="h-2/5 overflow-hidden rounded bg-black/20">
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300"
                      className="w-full h-full object-cover opacity-80"
                      alt="icon"
                    />
                  </div>
                  <div className="h-3/5 flex flex-col justify-end">
                    <h3 className="text-white text-[10px] md:text-xs font-bold leading-tight uppercase">
                      Validation
                    </h3>
                    <div className="w-full h-[2px] bg-green-400 mt-2 opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-wrapper cursor-pointer group">
              <div className="book w-[100px] h-[150px] md:w-[180px] md:h-[260px]">
                <div className="book-top"></div>
                <div className="book-spine"></div>
                <div className="absolute inset-0 bg-[#0d1624] rounded-r-sm shadow-2xl flex flex-col p-3 md:p-4 border-l border-white">
                  <div className="h-2/5 overflow-hidden rounded bg-black/20 grayscale">
                    <img
                      src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=300"
                      className="w-full h-full object-cover opacity-80"
                      alt="icon"
                    />
                  </div>
                  <div className="h-3/5 flex flex-col justify-end">
                    <h3 className="text-white text-[10px] md:text-xs font-bold leading-tight uppercase">
                      Équipe
                    </h3>
                    <div className="w-full h-[2px] bg-gray-400 mt-2 opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="shelf-base z-10"></div> */}
        </div>
      </div>
    </section>
  );
}
