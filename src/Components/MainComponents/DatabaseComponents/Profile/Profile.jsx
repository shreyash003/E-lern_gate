import React from 'react'
import Avatar from '@mui/material/Avatar';
import profile from "../../../../images/profile.png"


const Profile=() =>{
return(
    <>
      <main role='main' className='profileMainDiv'> 
            <section className='profileCardDiv'>
                    <div className='profileNameImgDiv' >
                        <section className='profileImg'>
                            <img src={profile} alt='profile'></img>
                        </section>
                        <section className='profileName'>
                            <p>Mandar Sakpal</p>
                        </section>
                    </div>  
                    <div className='profileDetailsDiv'>
                            <div className='profileDetailsContainer'>
                                    <p>Name: Mandar Sakpal</p>
                                    <p>Email: Sakpalm466@gmail.com</p>
                                    <p>Phone Number:8805688767</p>
                                    <p>collage Name:DBATU</p>
                                    <button>Edit</button>
                            </div>
                    </div>
            </section>
      </main>
    </>)
}
export default Profile