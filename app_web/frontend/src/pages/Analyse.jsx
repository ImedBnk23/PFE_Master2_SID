import React, { useState } from "react";
import jsPDF from "jspdf";

function Analyse() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

  const labelMap = {
    AK: { fr: "Kératose actinique", type: "Maligne" },
    BCC: { fr: "Carcinome basocellulaire", type: "Maligne" },
    DF: { fr: "Dermatofibrome", type: "Bénigne" },
    MEL: { fr: "Mélanome", type: "Maligne" },
    NV: { fr: "Naevus", type: "Bénigne" },
    PBK: { fr: "Kératose bénigne pigmentée", type: "Bénigne" },
    SCC: { fr: "Carcinome épidermoïde", type: "Maligne" },
    SK: { fr: "Kératose séborrhéique", type: "Bénigne" },
    VL: { fr: "Lésion vasculaire", type: "Bénigne" }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    setFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result); // base64
    };

    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:4001/api/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setResult(data);
    setLoading(false);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("SkinAI - Rapport Médical", 20, 20);

    doc.setFontSize(12);

    doc.text(`Nom: ${nom}`, 20, 40);
    doc.text(`Prénom: ${prenom}`, 20, 50);
    doc.text(`Âge: ${age}`, 20, 60);

    if (result) {
      doc.text(`Diagnostic: ${labelMap[result.diagnosis]?.fr}`, 20, 80);
      doc.text(`Type: ${labelMap[result.diagnosis]?.type}`, 20, 90);
      doc.text(`Confiance: ${(result.confidence * 100).toFixed(2)}%`, 20, 100);
    }

    doc.text("Image:", 20, 120);

    // 👉 AJOUT IMAGE
    if (image) {
      doc.addImage(image, "JPEG", 20, 130, 60, 60);
    }

    doc.text("Analyse IA - ne remplace pas un médecin", 20, 200);

    doc.save(`rapport-${nom}-${prenom}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-6">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          🧠 SkinAI – Analyse médicale
        </h1>
        <p className="text-gray-500 mt-2">
          Détection intelligente des lésions cutanées
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* PATIENT CARD */}
          <div className="bg-white shadow-xl rounded-3xl p-6 border">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              👤 Informations patient
            </h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <input
                type="text"
                placeholder="Prénom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <input
                type="number"
                placeholder="Âge"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* UPLOAD CARD */}
          <div className="bg-white shadow-xl rounded-3xl p-6 border">

            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              📤 Upload image
            </h2>

            <label className="border-2 border-dashed border-blue-300 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition">

              <p className="text-gray-500 text-center">
                Glissez une image ici <br />
                ou cliquez pour sélectionner
              </p>

              <input type="file" accept="image/*" onChange={handleImage} hidden />

              <span className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                Choisir une image
              </span>
            </label>

            {image && (
              <img
                src={image}
                alt="preview"
                className="mt-4 rounded-2xl w-full h-60 object-cover"
              />
            )}

            <button
              onClick={handleAnalyze}
              disabled={!file || loading}
              className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-semibold disabled:bg-gray-400"
            >
              {loading ? "⏳ Analyse en cours..." : "🚀 Analyser"}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white shadow-xl rounded-3xl p-6 border">

          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            📊 Résultat médical
          </h2>

          {!result && !loading && (
            <div className="text-center text-gray-400 mt-20">
              Aucun résultat
            </div>
          )}

          {loading && (
            <div className="text-center text-blue-500 mt-20 animate-pulse">
              ⏳ Analyse en cours...
            </div>
          )}

          {result && (
            <div className="space-y-4">

              {/* PATIENT RESULT */}
              <div className="bg-blue-50 p-4 rounded-2xl border">
                <p className="text-gray-500 text-sm">👤 Patient</p>
                <p className="font-bold text-gray-800">
                  {nom} {prenom} ({age} ans)
                </p>
              </div>

              {/* DIAG */}
              <div className="bg-gray-50 p-4 rounded-2xl border">
                <p className="text-sm text-gray-500">🔍 Diagnostic</p>
                <p className="font-bold text-lg text-gray-800">
                  {labelMap[result.diagnosis]?.fr}
                </p>
              </div>

              {/* TYPE */}
              <div className="bg-gray-50 p-4 rounded-2xl border">
                <p className="text-sm text-gray-500">🧬 Type</p>
                <p className={`font-bold text-lg ${labelMap[result.diagnosis]?.type === "Maligne"
                  ? "text-red-600"
                  : "text-green-600"
                  }`}>
                  {labelMap[result.diagnosis]?.type}
                </p>
              </div>

              {/* CONFIDENCE */}
              <div className="bg-gray-50 p-4 rounded-2xl border">
                <p className="text-sm text-gray-500">📈 Confiance</p>
                <p className="font-bold text-green-600 text-lg">
                  {(result.confidence * 100).toFixed(2)}%
                </p>
              </div>

              {/* WARNING */}
              <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-xl text-sm text-yellow-700">
                ⚠️ Analyse IA - ne remplace pas un médecin
              </div>

              {/* RESET */}
              <button
                onClick={() => {
                  setFile(null);
                  setImage(null);
                  setResult(null);
                  setLoading(false);
                  setNom("");
                  setPrenom("");
                  setAge("");
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold"
              >
                🔁 Nouvelle analyse
              </button>
              <button
                onClick={downloadPDF}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-2xl font-semibold mt-3"
              >
                📄 Télécharger PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Analyse;