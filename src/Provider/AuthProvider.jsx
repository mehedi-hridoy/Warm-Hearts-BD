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
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
		const [user, setUser] = useState(null);
		const [loading, setLoading] = useState(false);

useEffect(() => {
	setLoading(true);
	const unsub = onAuthStateChanged(auth, (current) => {
		setUser(current);
		setLoading(false);
	});
	return () => unsub();
}, []);

		const register = async (email, password, displayName, photoURL) => {
			setLoading(true);
			try {
				const cred = await createUserWithEmailAndPassword(auth, email, password);
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
			setLoading(true);
			try {
				const cred = await signInWithEmailAndPassword(auth, email, password);
				return cred.user;
			} finally {
				setLoading(false);
			}
		};

		const loginWithGoogle = async () => {
			setLoading(true);
			try {
				const cred = await signInWithPopup(auth, googleProvider);
				return cred.user;
			} finally {
				setLoading(false);
			}
		};

	const logout = async () => {
		setLoading(true);
		try {
			await signOut(auth);
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

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
