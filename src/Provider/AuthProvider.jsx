import React, { useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import {
	GoogleAuthProvider,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
	signOut,
} from 'firebase/auth';

import AuthContext from './AuthContext';

const googleProvider = new GoogleAuthProvider();
const auth = app ? getAuth(app) : null;

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!auth) {
			console.warn('Firebase is not configured; authentication features are disabled.');
			setUser(null);
			return () => {};
		}
		setLoading(true);
		const unsub = onAuthStateChanged(auth, (current) => {
			setUser(current);
			setLoading(false);
		});
		return () => unsub();
	}, []);

	const requireAuth = () => {
		if (!auth) {
			throw new Error('Firebase is not configured. Please add the required environment variables to enable auth.');
		}
		return auth;
	};

	const register = async (email, password, displayName, photoURL) => {
		if (!auth) {
			return Promise.reject(new Error('Authentication is disabled because Firebase is not configured.'));
		}
		setLoading(true);
		try {
			const cred = await createUserWithEmailAndPassword(requireAuth(), email, password);
			if (displayName || photoURL) {
				await updateProfile(cred.user, {
					displayName: displayName || cred.user.displayName,
					photoURL: photoURL || cred.user.photoURL,
				});
			}
			return cred.user;
		} finally {
			setLoading(false);
		}
	};

	const login = async (email, password) => {
		if (!auth) {
			return Promise.reject(new Error('Authentication is disabled because Firebase is not configured.'));
		}
		setLoading(true);
		try {
			const cred = await signInWithEmailAndPassword(requireAuth(), email, password);
			return cred.user;
		} finally {
			setLoading(false);
		}
	};

	const loginWithGoogle = async () => {
		if (!auth) {
			return Promise.reject(new Error('Authentication is disabled because Firebase is not configured.'));
		}
		setLoading(true);
		try {
			const cred = await signInWithPopup(requireAuth(), googleProvider);
			return cred.user;
		} finally {
			setLoading(false);
		}
	};

	const logout = async () => {
		if (!auth) {
			return Promise.resolve();
		}
		setLoading(true);
		try {
			await signOut(requireAuth());
		} finally {
			setLoading(false);
		}
	};

	const value = {
		user,
		loading,
		register,
		login,
		loginWithGoogle,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
