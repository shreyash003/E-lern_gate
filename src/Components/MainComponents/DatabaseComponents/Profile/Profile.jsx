import { Button } from '@mui/material';
import React ,{useEffect,useReducer} from 'react'
import { NavLink } from 'react-router-dom';
import profile from "../../../../images/profile.png"
import {db} from "../../../../misc/Firebase"
import {auth} from "../../../../misc/Firebase"



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


const Profile=() =>{
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
    const user=auth.currentUser
return(
    <>
      <main role='main' className='profileMainDiv'> 
            <section className='profileCardDiv'>
                    <div className='profileNameImgDiv' >
                        <section className='profileImg'>
                            <img src={user.photoURL} alt='profile'></img>
                        </section>
                        <section className='profileName'>
                            <p>{`${name}`}</p>
                        </section>
                    </div>  
                    <div className='profileDetailsDiv'>
                            <div className='profileDetailsContainer'>
                                    <p>Name:{`${name}`}</p>
                                    <p>Email: {`${email}`}</p>
                                    <p>Phone Number:{`${phoneNo}`}</p>
                                    <p>collage Name:{`${clgName}`}</p>
                                    <NavLink to='/profile/edit'><Button>Edit</Button></NavLink>
                            </div>
                    </div>
            </section>
      </main>
    </>)
}
export default Profile