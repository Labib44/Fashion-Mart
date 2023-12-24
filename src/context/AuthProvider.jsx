/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config";


export const AuthContext=createContext();

const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [lodaing, setLoading]=useState(true);

    // sign up account
    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login account
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    // logout account
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }

    // update user
    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }

    // user observing
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
             console.log('user observing');
             setUser(currentUser);
             setLoading(false);
         });
         return ()=>unsubscribe();
     },[])

    const authInfo={
        createUser,
        login,
        logOut,
        updateUser,
        user,
        lodaing

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;