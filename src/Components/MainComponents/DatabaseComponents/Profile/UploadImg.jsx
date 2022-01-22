import { auth, storage } from "../../../../misc/Firebase"

export async function UploadFile(e){
var storageref=storage.ref()
const uid= auth.currentUser.uid;
console.log(uid)
try{
 console.log(e.target.files)    
    const fileRef=storageref.child(`/users/${uid}/profile`)
    const uploadTask= fileRef.put(e.target.files[0])
    console.log(uid) 
    uploadTask.on('state_changed', 
  (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    if(progress==='100')alert("uploaded")
  }, 
  (error) => {
      console.log(error)
  }, 
  () => {
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      auth.currentUser.updateProfile({
        photoURL:downloadURL
        //now we have set the photoURL in auth.current user as uploaded img thus we can use it from any where 
    })
    console.log(auth.currentUser)
    });
  }
);

 

}catch(err){
       alert(err.message)
}
} 