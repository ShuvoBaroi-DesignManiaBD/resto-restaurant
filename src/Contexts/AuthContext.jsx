/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Configs/Firebase.config";
import Swal from "sweetalert2";
import axiosPublic from "../Hooks/useAxiosPublic";
import { axiosSecure } from "../Hooks/useAxiosSecure";
import { logOut } from "../APIs/utils";



export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const userId = currentUser?.uid || user?.uid;
            const userInfo = { email: userEmail , id: userId };
            console.log(currentUser, userInfo);
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                axiosSecure.post('jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                // localStorage.removeItem('access-token');
                logOut(userInfo)
                .then(res => console.log(res.data))
            }
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [user?.email]);

    const createUserWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                setUser(user?.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!!!',
                    text: 'You have successfully logged in',
                })
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: error,
                })
            });
    }

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                setUser(user?.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!!!',
                    text: 'You have successfully logged in',
                });
                
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: error,
                })
            });
    }

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(user => {
                setUser(user?.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!!!',
                    text: 'You have successfully logged in',
                })
            })
            .catch(err => {
                console.error(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong at the time of creating your account!',
                })
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch((err) => {
                console.error(err);
            });
    }

    const resetPass = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Please check your inbox for thee reset password mail',
                })
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Something went wrong',
                })
                console.error(err);
            });
    }

    const authentication = {
        createUserWithEmail,
        signInWithEmail,
        googleLogin,
        logout,
        resetPass,
        loading,
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    )
}
