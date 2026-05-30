import React from 'react';
import SkinCancer from '../assets/SkinCancer.png';
import { useAuth } from '../context/AuthProvider';


function Banner() {
    const [authUser] = useAuth()

    return (
        <>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 pt-8 pb-16">

                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Texte */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm border border-blue-100">
                                <span className="text-blue-600 text-sm font-medium">🤖 Intelligence Artificielle</span>
                            </div>

                            <h1 className="text-5xl md:text-5xl font-bold leading-tight text-gray-900">
                                Détection intelligente du cancer de la peau grâce <br />
                                <span className="text-blue-600">à l’intelligence artificielle</span>
                            </h1>

                            <p className="text-lg text-gray-600 max-w-lg">
                                SkinAI est une application basée sur le Deep Learning qui analyse automatiquement les images des lésions cutanées afin de détecter et classifier le cancer de la peau avec précision et rapidité.
                                Elle permet d’aider au diagnostic précoce et d’améliorer la prise en charge médicale.
                            </p>

                            <div className="flex flex-wrap gap-4">

                                <a
                                    href={authUser ? "/Analyse" : "/Login"}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
                                >
                                    Commencer l{"'"}analyse
                                    <span className="text-xl">→</span>
                                </a>

                                <a
                                    href="#how-it-works"
                                    className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-2xl font-medium transition-all"
                                >
                                    Comment ça marche ?
                                </a>
                            </div>

                            {/* Trust signals */}
                            <div className="flex items-center gap-8 text-sm text-gray-500 pt-4">
                                <div>✅ Précision : <span className="font-semibold text-emerald-600">94.8%</span></div>
                                <div>✅ Approuvé par des dermatologues</div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex justify-center relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-[3rem] -rotate-6 opacity-10"></div>
                            <img
                                src={SkinCancer}
                                alt="Détection Cancer de la Peau - SkinAI"
                                className="relative w-full max-w-lg drop-shadow-2xl rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;