import React, { useState } from 'react';

function Contact() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">

        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              CONTACTEZ <span className="text-blue-600">NOUS</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Nous sommes à votre écoute
            </p>
            <p className="text-xl text-gray-600">
              Nous sommes disponibles pour répondre à vos questions et vous accompagner dans l{"'"}utilisation de SkinAI.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-5 gap-16">

            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Notre Équipe</h2>

                <div className="bg-white rounded-3xl p-8 shadow-sm space-y-8">

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">👨‍💻</div>
                    <div>
                      <p className="text-blue-600 font-medium">Développeur</p>
                      <p className="font-semibold text-lg">Imed BENKHALFALLAH</p>
                      <p className="text-gray-600">Etudiant en informatique (Master 2)</p>
                      <p className="text-gray-600">Université Badji Mokhtar d{"'"}Annaba</p>
                      <p className="text-gray-600">imedbnk23@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl">👨‍🏫</div>
                    <div>
                      <p className="text-amber-600 font-medium">Encadrant Universitaire</p>
                      <p className="font-semibold">Pr. Nadir FARAH</p>
                      <p className="text-gray-600">Professeur en informatique</p>
                      <p className="text-gray-600">Université Badji Mokhtar d{"'"}Annaba</p>
                      <p className="text-gray-600">xxxxxxxxx@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl">🩺</div>
                    <div>
                      <p className="text-rose-600 font-medium">Co-Encadrante</p>
                      <p className="font-semibold">Pr. Imane BENKEMOUCHE</p>
                      <p className="text-gray-600">Cheffe de Service de Dermatologie</p>
                      <p className="text-gray-600">CHU d{"'"}Annaba</p>
                      <p className="text-gray-600">xxxxxxxxx@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="font-bold text-xl mb-4">SkinIA</h3>
                <p className="text-gray-600 leading-relaxed">
                  SkinAI est une solution intelligente basée sur l{"'"}intelligence artificielle
                  et le Deep Learning, dédiée à la détection et à la classification des maladies 
                  de la peau, notamment le cancer de la peau, à partir d{"'"}images médicales.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Envoyez-nous un message</h2>

                <form className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-2">Nom complet</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                        placeholder="+213 5XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Sujet</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500"
                      placeholder="Ex: Question, Démonstration, Partenariat..."
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      className="w-full px-6 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-blue-500 resize-y"
                      placeholder="Écrivez votre message ici..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-5 rounded-2xl text-lg transition-all shadow-lg shadow-blue-500/30"
                  >
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;