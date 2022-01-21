import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import signUpImg from "../../../../images/register3.jpg";
import { signUpFunc } from "./SignUPFunction";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUp = () => {


  const[visiblity,setVisiblity]=useState(true)
  const[passwordVisible,setPasswordVisible]=useState("password")
  const passwordFunc=()=>{
    setVisiblity(!visiblity)
    if(visiblity){
      setPasswordVisible("text")
    }
    else{
      setPasswordVisible("password")
    }
  }
  return (
    <>
      <div className="signUpMaindiv">
        <div className="mainSignUpCard">
          <div className="mainSignUpImg">
            <img src={signUpImg} alt="SignUp"></img>
          </div>

          <div className="mainSignUpForm">
            <div className="mainSignUpFormTitle">
              <p>Create Accout</p>
            </div>
            <div className="mainSignUpFormContainer">
              <form onSubmit={signUpFunc}>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                ></input>
                <br />
                <input
                  id="email"
                  pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                  type="email"
                  placeholder="abc@xyz.com "
                  required
                ></input>
                <br />

                <section className="passwordDiv">
                <input
                className="password"
                  id="password"
                  type={passwordVisible}
                  placeholder="password "
                  required
                ></input>
                <div className="iconDiv">
                <IconButton onClick={passwordFunc} size="small"  sx={{mt:1}}>
                  {visiblity ?<Visibility  sx={{width:"1.5rem"}}/> :<VisibilityOff  sx={{width:"1.5rem"}}/>}
                </IconButton>
                </div>
               
                <br />
                </section>
                

                <input
                  id="phoneNo"
                  type='tel'
                  placeholder="92******** "
                  required
                ></input>
                <br />

                <input
                  id="clgName"
                  type="text"
                  placeholder="Collage Name "
                  required
                ></input>
                <br />
                <div className="navlinkDiv">
                  <p>Already Have An Account?<NavLink to='/login'> Go To Login</NavLink></p>
                </div>
                <div className="submitDiv">

                <button  type="submit">Submit</button>
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
