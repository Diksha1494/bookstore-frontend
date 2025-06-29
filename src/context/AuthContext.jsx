import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.congif";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)

    
}
const googleProvider = new GoogleAuthProvider();
//auth provider
export const AuthProvide = ({children}) => {
      const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

       // register a user
    const registerUser = async (email,password) => {
        return await createUserWithEmailAndPassword (auth, email, password);
}
//login the user
const loginUser = async(email,password)=>{
    return await signInWithEmailAndPassword(auth, email, password)
}
//sign up with google
const signInWithGoogle = async()=>{
    return await signInWithPopup(auth,googleProvider)
}

//logout the user
const logout = ()=>{
return signOut(auth)
}

//manage user
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
        setLoading(false);
if(user){
    const {email,displayName,photoURl}=user;
    const userData = {
        email,username:displayName,photo:photoURl
    }
}
    })
    return()=> unsubscribe();
},[])

  const value = {
        currentUser,
        loading,
         registerUser,
         loginUser,
         signInWithGoogle,
         logout
  }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}