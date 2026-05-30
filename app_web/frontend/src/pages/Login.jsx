import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import hero from '../assets/hero.png';

function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
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

    const res = await fetch('http://localhost:4001/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login success");
      localStorage.setItem("Users", JSON.stringify(data.user));
      window.location.href = "/";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full">

        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">Bienvenue</h2>
          <p className="text-gray-600 mt-2">Connectez-vous pour accéder à votre espace</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 transition-all"
                placeholder="exemple@email.com"
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
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                Se souvenir de moi
              </label>

              <a href="#" className="text-blue-600 hover:underline text-sm">
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl text-lg"
            >
              Se Connecter
            </button>

          </form>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Vous n{"'"}avez pas de compte ?{' '}
              <NavLink to="/Register" className="text-blue-600 font-medium hover:underline">
                Créer un compte
              </NavLink>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;