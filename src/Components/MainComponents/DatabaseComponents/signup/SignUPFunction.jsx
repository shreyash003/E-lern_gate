import {auth} from "../../../../misc/Firebase"
import {WriteToDatabase} from "../WriteFunc"

export async function signUpFunc (e){
    e.preventDefault();
    const img=null;
    const Name=document.querySelector("#name").value
    const Email=document.querySelector("#email").value
    const Password=document.querySelector("#password").value
    const Phone=document.querySelector("#phoneNo").value
    const ClgName=document.querySelector("#clgName").value
    console.log(Name,Email,Password,Phone,ClgName)
    try {
        const result =await auth.createUserWithEmailAndPassword(Email,Password)
        console.log(result)
        await result.user.sendEmailVerification()
        alert("Signed up")
        WriteToDatabase(result.user,Name,Phone,ClgName,img);
        
    } catch (error) {
        console.log('here')
        console.log(error.message)
    }
}