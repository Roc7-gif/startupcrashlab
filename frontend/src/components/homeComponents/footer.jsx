import React from "react";

export default function Footer() {
  return (
   <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* <div>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-orange-500"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                <span className="font-bold">From Idea to Execution</span>
              </div>
              <p className="text-gray-400 text-sm">
                Coaching startup pragmatique pour fondateurs francophones.
              </p>
            </div> */}
            <div>
              <h3 className="font-bold mb-4">Programme</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#programme"
                    className="hover:text-orange-500 transition"
                  >
                    Founder Crash Test
                  </a>
                </li>
                <li>
                  <a
                    href="#programme"
                    className="hover:text-orange-500 transition"
                  >
                    Clarity Sprint
                  </a>
                </li>
                <li>
                  <a
                    href="#programme"
                    className="hover:text-orange-500 transition"
                  >
                    Idea-to-MVP Sprint
                  </a>
                </li>
                <li>
                  <a
                    href="#programme"
                    className="hover:text-orange-500 transition"
                  >
                    Growth Lab
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Ressources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#impact"
                    className="hover:text-orange-500 transition"
                  >
                    Notre impact
                  </a>
                </li>
                <li>
                  <a href="#coach" className="hover:text-orange-500 transition">
                    Le coach
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">
                    Témoignages
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-500 transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              © copyright 2026 From Idea to Execution by Igor N. C. SEMANOU. Tous droits
              réservés.
          </p>
           <p>
             By Benilab Services
            </p>
          </div>
        </div>
      </footer>
  );
}
