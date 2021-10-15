import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../pages/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const auth = new getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally( () => setIsLoading(false))
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .finally( () => setIsLoading(false));
    };
    // observe user state change 
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unSubscribe;
    }, [])

    return {
        isLoading,
        signInUsingGoogle,
        logOut,
        user
    }
}

export default useFirebase;