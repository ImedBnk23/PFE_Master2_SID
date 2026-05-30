import React from 'react';
import SkinCancerai from '../assets/skin_cancer_ai.png';

function About() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">

        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-5xl font-bold text-gray-800">
              À PROPOS <span className="text-blue-600">DE NOUS</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Nous révolutionnons la détection des maladies de la peau grâce à l{"'"}intelligence artificielle.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="flex justify-center">
              <img
                src={SkinCancerai}
                alt="Détection du cancer de la peau"
                className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-lg object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Notre Mission
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[15.5px]">
                <p>
                  SkinAI est une plateforme innovante basée sur l{"'"}intelligence artificielle
                  et le Deep Learning, dédiée à l{"'"}analyse des lésions cutanées afin de détecter
                  précocement le cancer de la peau.
                </p>
                <p>
                  Notre objectif est de rendre le diagnostic dermatologique plus rapide,
                  plus précis et plus accessible pour tous, en combinant technologie avancée et expertise médicale.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800">
                POURQUOI <span className="text-blue-600">NOUS CHOISIR</span>
              </h2>
              <p className="text-gray-600 mt-3">Les raisons qui font la différence</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="border border-gray-200 bg-white rounded-2xl px-8 py-10 hover:bg-blue-600 hover:text-white transition-all duration-300 group cursor-pointer">
                <div className="text-4xl mb-4">⚡</div>
                <b className="text-xl">Diagnostic Rapide</b>
                <p className="mt-3 text-gray-600 group-hover:text-white/90">
                  Obtenez des résultats en quelques secondes grâce à un modèle d’IA entraîné sur des milliers d{"'"}images médicales.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-2xl px-8 py-10 hover:bg-blue-600 hover:text-white transition-all duration-300 group cursor-pointer">
                <div className="text-4xl mb-4">🛡️</div>
                <b className="text-xl">Haute Précision</b>
                <p className="mt-3 text-gray-600 group-hover:text-white/90">
                  Une précision supérieure à 92% validée à partir de modèles de Deep Learning et tests expérimentaux.
                </p>
              </div>

              <div className="border border-gray-200 bg-white rounded-2xl px-8 py-10 hover:bg-blue-600 hover:text-white transition-all duration-300 group cursor-pointer">
                <div className="text-4xl mb-4">📱</div>
                <b className="text-xl">Accessible Partout</b>
                <p className="mt-3 text-gray-600 group-hover:text-white/90">
                  Analysez les images de la peau facilement depuis n{"'"}importe quel appareil, où que vous soyez.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;