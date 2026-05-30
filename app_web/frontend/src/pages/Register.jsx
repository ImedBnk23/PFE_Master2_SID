import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import hero from '../assets/hero.png';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: ''      
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:4001/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      alert("Account created");
      navigate('/Login');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full">

        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">Créer un compte</h2>
          <p className="text-gray-600 mt-2">Rejoignez SkinIA dès aujourd{"'"}hui</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
              <input
                type="text"
                name="fullname"
                required
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
                placeholder="Imed Dupont"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
                placeholder="exemple@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Téléphone</label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
                placeholder="+213 5XX XXX XXX"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Confirmer le mot de passe</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="acceptTerms"
                required
                className="mt-1 accent-blue-600"
              />
              <p className="text-sm text-gray-600">
                J'accepte les <span className="text-blue-600 hover:underline cursor-pointer">Conditions d'utilisation</span>
                et la <span className="text-blue-600 hover:underline cursor-pointer">Politique de confidentialité</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              Créer mon compte
            </button>

          </form>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Vous avez déjà un compte ?{' '}
              <NavLink to="/Login" className="text-blue-600 font-medium hover:underline">
                Se connecter
              </NavLink>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;