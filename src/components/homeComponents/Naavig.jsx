import { Link } from "react-router-dom"

export const Nav = () => {
    console.log( window.location.pathname)
     {/* Navigation - responsive */}
         return <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-5 relative z-10 max-w-7xl mx-auto">
          <div className="text-[22px] tracking-tight mb-4 md:mb-0">
            <span className="logo-startup">startup</span>
            <span className="logo-crash">crash</span>
            <span className="logo-lab">lab</span>
          </div>

          {/* Menu responsive */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {/* <a to="#" className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors">
              Les 12 Tests
            </Link> */}
            <Link
              to="/"
              className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              {" "}
              Accueil
            </Link>
          { window.location.pathname != "/contact" &&  <><a
              href="/#protocoles"
              className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              {" "}
              Protocoles
            </a>
            <a
              href="/#crashIndex"
              className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              {" "}
              CrashIndex
            </a>
            <a
            href="/#ressources"
              className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              {" "}
              Ressources
            </a>
            <a
              href="/#equipe"
              className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              {" "}
              Equipe
            </a></>}
            <Link
              to="/contact"
              className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors"
            >
              {" "}
              Contact
            </Link>

            {/* <a to="#" className="text-[14px] text-gray-700 font-medium hover:text-orange-500 transition-colors">
              Blog
            </Link> */}
            {/* {!isauth && (
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-[14px] font-semibold text-orange-500 border border-orange-500 rounded-md px-5 py-2 hover:bg-orange-500 hover:text-white transition-all cursor-pointer"
              >
                Se connecter
              </button>
            )} */}
            {/* {isauth && (
              <button
                onClick={() => logout()}
                className="text-[14px] font-semibold text-red-500 border border-red-500 rounded-md px-5 py-2 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              >
                Se déconnecter
              </button>
            )} */}
          </div>
        </nav>
}