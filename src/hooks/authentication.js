import { db } from "../firebase/config"

import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    
} from "firebase/auth"
import { useState,useEffect } from "react"


export const UseAuthentication = () => {
     const [error,setError] = useState(null)
     const [load,setLoad] = useState(null)

     const autenticador = getAuth()

     const CriarUser = async (Dados) => {
        try{
          const {Usuario} = await createUserWithEmailAndPassword (
            autenticador,
            Dados.Email,
            Dados.Senha,
          )

         await updateProfile(Usuario,{
            displayName:Dados.displayName,
         })

         return Usuario
        }catch(error){
            console.log(error.message);
            console.log(typeof error.message);
        }
     
    }

    return{
        autenticador,
        CriarUser,
    }
}