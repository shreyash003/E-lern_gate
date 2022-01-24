import React,{useReducer,useEffect} from 'react'
import {db} from "../../../../misc/Firebase"
import {auth} from "../../../../misc/Firebase"
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import {UploadFile} from "./UploadImg"
import {WriteToDatabase} from "../WriteFunc"





const initialState={
    name:null,
    email:null,
    phoneNo:null,
    clgName:null
};

const reducer=(state,action)=>{
   switch(action.type){
      case "FETCH_SUCCESS" :{
        return{...state,name:action.name,email:action.email,phoneNo:action.phoneNo,clgName:action.clgName}
      }
      default:
          return state;
   }
}

const ProfileEdit=() =>{
    const[{name,email,phoneNo,clgName},dispatch]=useReducer(reducer,initialState)





    useEffect(()=>{
             async function Read(){

                const user=auth.currentUser
                console.log(user)
                try {
                    if(user){
                        const dataref= db.collection("users").doc(user.uid);
                        const datasnap=await dataref.get();
                        if(datasnap){
                            console.log(datasnap)
                            const Data=datasnap.data()
                            dispatch({type:"FETCH_SUCCESS",name:Data.name,email:Data.email,phoneNo:Data.phone,clgName:Data.clgName})

                        }
                      
                        
                    }
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
           Read();
        
    },[])

    const submit=()=>{
        const Name=document.querySelector("#editName").value
        const Phone=document.querySelector("#editPhone").value
        const ClgName=document.querySelector("#editClgName").value
        const Img=document.querySelector("#editImg").value
        const user=auth.currentUser
        WriteToDatabase(user,Name,Phone,ClgName,Img)
    }
return(
    <>
      <main role='main' className='profileEditMainDiv'>
            <section className='profileEditCard'>
                    <div className='profileEditCardTitle'>
                        <p>{name}</p>
                    </div>
                    <div className='profileEditCardContent'>
                        <label><p>Name:</p>
                            <input id='editName' type='text' defaultValue={name}></input>
                        </label><br/>
                        <label><p>Email:</p> 
                            <input id='editName' type='email' defaultValue={email} disabled={true} ></input>
                        </label><br/>
                        <label><p>Phone Number :</p>
                            <input  id='editPhone' type='tel' defaultValue={phoneNo}></input>
                        </label><br/>
                        <label><p>Collage Name : </p>  
                            <input id='editClgName' type='text' defaultValue={clgName}></input>
                        </label><br/>
                        <label><p>Profile Image :</p>
                            <input id='editImg' onChange={UploadFile} type='file' ></input>
                        </label><br/>
                        <NavLink to='/profile'><Button onClick={submit} sx={{ml:2}} variant='contained'>Submit</Button></NavLink>
                    </div>
            </section>
      </main>
    </>)
}
export default ProfileEdit