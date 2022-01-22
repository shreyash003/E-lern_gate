import { auth } from "../../../../misc/Firebase";
import firebase from "firebase/app";



export async function login() {
   
  const loginEmail = document.querySelector("#loginEmail").value;
  const loginPassword = document.querySelector("#loginPassword").value;
  console.log(loginEmail, loginPassword);

  // window.location.reload()
  try {
    const user = auth.currentUser;
    console.log(user);
    if (user.emailVerified === true) {
      console.log(user);
      const result = await auth.signInWithEmailAndPassword(
        loginEmail,
        loginPassword
      );
      console.log(result);
        alert("Loggin In")
        // return(
        //     <SnackBar/>
        // )
   
    } else {
      alert("verify your email First");
    }
  } catch (error) {
        alert(error.message);
  }
}

export async function GoogleLogin() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();

    const results = await auth.signInWithPopup(provider);
    if (results) {
      console.log(results);
    }
  } catch (err) {
    alert(err.message);
  }
}

// sakpalm466@gmail.com
// mandar123
