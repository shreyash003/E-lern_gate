import {db} from  "../../../misc/Firebase"


export function WriteToDatabase(user,Name,phone,clgName,img){
    db.collection("users").doc(user.uid).set({
        uid:user.uid,
        name:Name,
        email:user.email,
        phone:phone,
        clgName:clgName,
        Img:img
    })
}