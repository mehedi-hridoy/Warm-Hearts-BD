import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa';
import AuthContext from '../Provider/AuthContext';

const Login = () => {
    const { login, loginWithGoogle, loading } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        try {
            await login(email, password);
            navigate(from, { replace: true });
        } catch (err) {
            alert(err.message);
        }
    };

    const handleGoogle = async () => {
        try {
            await loginWithGoogle();
            navigate(from, { replace: true });
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <section className="w-full">
            <div className="card-elevated overflow-hidden grid lg:grid-cols-[1.05fr_0.95fr] gap-0">
                <div className="relative hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#1e3a8a] via-[#2f4fa7] to-[#4c8cff] text-white p-10">
                    <div>
                        <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <FaHandHoldingHeart /> Warm Hearts BD
                        </span>
                        <h1 className="text-3xl font-semibold leading-tight">Welcome Back, Changemaker.</h1>
                        <p className="mt-4 text-white/80 text-sm leading-relaxed">
                            Access your dashboard to track donations, manage your profile, and coordinate relief efforts with our volunteer network.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur">
                        <p className="text-sm uppercase tracking-[0.35em] text-white/70">This Winter</p>
                        <p className="mt-3 text-2xl font-semibold">12,540 warmth packs dispatched</p>
                        <div className="mt-4 flex items-center gap-3 text-sm text-white/75">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            Coordination center online 24/7
                        </div>
                    </div>
                </div>
                <div className="p-8 sm:p-10">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e3f1ff] text-[#1e3a8a]">
                                <FaHandHoldingHeart size={20} />
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">Warm Hearts BD</h2>
                                <p className="text-xs text-slate-500">Humanitarian Relief Network</p>
                            </div>
                        </div>
                        <Link to="/auth/registration" className="text-sm font-semibold text-[#1e3a8a] hover:underline">
                            Need an account?
                        </Link>
                    </div>

                    <div className="bg-[#f4f8ff] border border-[#d6e4ff] rounded-2xl p-2 flex mb-8">
                        <Link to="/auth/login" className="flex-1 text-center py-2 rounded-2xl bg-white text-sm font-semibold shadow">
                            Login
                        </Link>
                        <Link to="/auth/registration" className="flex-1 text-center py-2 rounded-2xl text-sm font-semibold text-slate-500">
                            Register
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Email</label>
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-2xl border border-[#d6e4ff] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#4c8cff]"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Password</label>
                            <div className="relative">
                                <input
                                    required
                                    name="password"
                                    type={show ? 'text' : 'password'}
                                    placeholder="Enter password"
                                    className="w-full rounded-2xl border border-[#d6e4ff] bg-white px-4 py-3 pr-11 text-sm focus:outline-none focus:border-[#4c8cff]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShow(!show)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {show ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            className="brand-button w-full justify-center text-sm"
                        >
                            {loading ? 'Signing in…' : 'Login'}
                            <FaArrowRight size={14} />
                        </button>

                        <div className="flex items-center gap-3 py-2">
                            <span className="h-px flex-1 bg-[#d6e4ff]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">or</span>
                            <span className="h-px flex-1 bg-[#d6e4ff]" />
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogle}
                            className="w-full rounded-2xl border border-[#d6e4ff] bg-white px-4 py-3 text-sm font-semibold text-slate-600 hover:border-[#4c8cff] hover:text-[#1e3a8a] transition"
                        >
                            <span className="inline-flex items-center gap-2">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
                                Continue with Google
                            </span>
                        </button>
                    </form>

                    <p className="mt-8 text-center text-xs text-slate-500">
                        By continuing you agree to our{' '}
                        <Link to="/" className="text-[#1e3a8a] hover:underline">terms</Link> and{' '}
                        <Link to="/" className="text-[#1e3a8a] hover:underline">privacy policy</Link>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;