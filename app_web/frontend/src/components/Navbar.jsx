import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import hero from '../assets/hero.png';

function Navbar() {

    const navigate = useNavigate();
    const [authUser, setAuthUser] = useAuth();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("Users");
        setAuthUser(null);
        navigate('/Login');
    };

    return (
        <>
            <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-18">

                        <NavLink to="/" className="flex items-center gap-3 group">
                            <img
                                src={hero}
                                alt="SkinAI Logo"
                                className="w-12 h-12 transition-transform group-hover:scale-110"
                            />
                            <h1 className="text-xl font-bold text-gray-800">
                                Skin<span className="text-blue-600">AI</span>
                            </h1>
                        </NavLink>

                        <div className="hidden md:flex items-center gap-10 ml-auto mr-8">
                            <NavLink to="/" className="relative group font-medium text-gray-700 hover:text-gray-900">
                                Accueil
                                <hr className="absolute left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 w-0 group-hover:w-3/5 transition-all duration-300" />
                            </NavLink>

                            <NavLink to="/Analyse" className="relative group font-medium text-gray-700 hover:text-gray-900">
                                Analyse
                                <hr className="absolute left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 w-0 group-hover:w-3/5 transition-all duration-300" />
                            </NavLink>

                            <NavLink to="/About" className="relative group font-medium text-gray-700 hover:text-gray-900">
                                À propos
                                <hr className="absolute left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 w-0 group-hover:w-3/5 transition-all duration-300" />
                            </NavLink>

                            <NavLink to="/Contact" className="relative group font-medium text-gray-700 hover:text-gray-900">
                                Contact
                                <hr className="absolute left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 w-0 group-hover:w-3/5 transition-all duration-300" />
                            </NavLink>
                        </div>

                        {/* ✅ AUTH BUTTON */}
                        <div className="flex items-center gap-4">
                            {authUser ? (
                                <button
                                    onClick={handleLogout}
                                    className="hidden md:block bg-red-500 hover:bg-red-600 text-white px-7 py-2.5 rounded-full font-medium transition-all"
                                >
                                    Déconnexion
                                </button>
                            ) : (
                                <NavLink
                                    to="/Login"
                                    className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full font-medium transition-all shadow-md"
                                >
                                    Se connecter
                                </NavLink>
                            )}

                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden text-2xl text-gray-700"
                            >
                                {isMenuOpen ? '✕' : '☰'}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-8 border-t bg-white">
                            <div className="flex flex-col items-center gap-8 text-lg font-medium">

                                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Accueil</NavLink>
                                <NavLink to="/Analyse" onClick={() => setIsMenuOpen(false)}>Analyse</NavLink>
                                <NavLink to="/About" onClick={() => setIsMenuOpen(false)}>À propos</NavLink>
                                <NavLink to="/Contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>

                                {/* ✅ MOBILE AUTH */}
                                {authUser ? (
                                    <button
                                        onClick={handleLogout}
                                        className="bg-red-500 text-white px-12 py-3 rounded-full"
                                    >
                                        Déconnexion
                                    </button>
                                ) : (
                                    <NavLink
                                        to="/Login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="bg-blue-600 text-white px-12 py-3 rounded-full"
                                    >
                                        Se connecter
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;