import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHandHoldingHeart, FaBars, FaTimes } from "react-icons/fa";
import AuthContext from '../Provider/AuthContext';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Donation', path: '/donation' },
  { label: 'Get Involved', path: '/get-involved' },
  { label: 'Dashboard', path: '/dashboard', protected: true },
];

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    if (!path) return false;
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-4 z-50">
      <div className="app-container">
        <div className="glass-panel px-6 py-4 flex items-center justify-between gap-4 shadow-[0_18px_40px_-30px_rgba(30,58,138,0.55)]">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4c8cff] to-[#1e3a8a] text-white shadow-[0_15px_30px_-20px_rgba(30,58,138,0.9)]">
              <FaHandHoldingHeart size={22} />
            </span>
            <div>
              <span className="text-lg font-semibold text-slate-900 leading-tight">Warm Hearts BD</span>
              <p className="text-xs text-slate-500">Humanity + Technology for relief</p>
            </div>
          </Link>

         
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map(({ label, path, protected: requiresAuth }) => {
              if (requiresAuth && !user) {
                return null;
              }
              const active = isActive(path);
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative inline-flex items-center gap-1 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? 'text-[#1e3a8a] bg-[#e3f1ff]' 
                      : 'text-slate-600 hover:text-[#1e3a8a] hover:bg-[#f0f6ff]'
                  }`}
                >
                  {label}
                  {active && <span className="absolute inset-x-3 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-[#4c8cff] to-[#1e3a8a]" />}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {!user ? (
              <>
                <Link
                  to="/auth/login"
                  className="rounded-2xl px-4 py-2 text-sm font-semibold text-[#1e3a8a] hover:text-[#0f172a]"
                >
                  Login
                </Link>
                <Link to="/donation" className="brand-button text-sm">
                  Donate
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full border border-white/70 shadow-inner overflow-hidden">
                    <img
                      src={user.photoURL || 'https://i.pravatar.cc/100'}
                      alt={user.displayName || 'Profile'}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-600">{user.displayName || user.email}</span>
                </div>
                <button
                  onClick={async () => {
                    await logout();
                    navigate('/');
                  }}
                  className="rounded-2xl border border-[#4c8cff]/40 px-4 py-2 text-sm font-semibold text-[#1e3a8a] hover:bg-[#e9f2ff] transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>

         
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden h-11 w-11 flex items-center justify-center rounded-2xl bg-[#e3f1ff] text-[#1e3a8a]"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="lg:hidden mt-3 app-container">
          <div className="glass-panel px-5 py-6 space-y-4">
            {navItems.map(({ label, path, protected: requiresAuth }) => {
              if (requiresAuth && !user) {
                return null;
              }
              const active = isActive(path);
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    active ? 'bg-[#e3f1ff] text-[#1e3a8a]' : 'text-slate-600 hover:bg-[#f0f6ff]'
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              {!user ? (
                <>
                  <Link
                    to="/auth/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#1e3a8a] bg-[#e3f1ff]"
                  >
                    Login
                  </Link>
                  <Link
                    to="/donation"
                    onClick={() => setIsMenuOpen(false)}
                    className="brand-button text-sm w-full text-center"
                  >
                    Donate
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full border border-white/70 overflow-hidden">
                      <img
                        src={user.photoURL || 'https://i.pravatar.cc/100'}
                        alt={user.displayName || 'Profile'}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{user.displayName || user.email}</p>
                      <p className="text-xs text-slate-500">Together we can do more</p>
                    </div>
                  </div>
                  <button
                    onClick={async () => {
                      await logout();
                      setIsMenuOpen(false);
                      navigate('/');
                    }}
                    className="rounded-2xl border border-[#4c8cff]/40 px-4 py-3 text-sm font-semibold text-[#1e3a8a] hover:bg-[#e9f2ff] transition"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;