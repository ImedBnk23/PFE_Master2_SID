import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import hero from '../assets/hero.png';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-0">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 md:gap-8">

          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">

            <div className="flex items-center gap-3 mb-4">
              <img src={hero} alt="Logo SkinAI" className="w-12 h-12" />
              <h1 className="text-2xl font-bold text-gray-800">
                Skin<span className="text-blue-600">AI</span>
              </h1>
            </div>

            <p className="text-gray-600 max-w-md">
              Votre solution intelligente pour l’analyse et le diagnostic de la peau
              grâce à l’intelligence artificielle.
            </p>
          </div>

          {/* CENTER */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">

            <h3 className="font-semibold text-gray-900 mb-4">ENTREPRISE</h3>

            <ul className="space-y-3 text-gray-600">
              <li><a href="/" className="hover:text-blue-600">Accueil</a></li>
              <li><a href="/Analyse" className="hover:text-blue-600">Analyse</a></li>
              <li><a href="/About" className="hover:text-blue-600">À propos</a></li>
              <li><a href="/Contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">

            <h3 className="font-semibold text-gray-900 mb-4">CONTACT</h3>

            <ul className="space-y-3 text-gray-600">
              <li>📞 +213 5XX XXX XXX</li>
              <li>✉️ contact@skin-ia.com</li>
            </ul>

            {/* SOCIAL ICONS (clean only one version) */}
            <div className="flex gap-6 text-2xl mt-6">

              <a href="#" className="text-gray-500 hover:text-pink-500 transition-transform hover:scale-110">
                <FaInstagram />
              </a>

              <a href="#" className="text-gray-500 hover:text-blue-600 transition-transform hover:scale-110">
                <FaFacebook />
              </a>

              <a href="#" className="text-gray-500 hover:text-blue-700 transition-transform hover:scale-110">
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 SkinAI. Tous droits réservés.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;