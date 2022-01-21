import { Route, Routes } from "react-router-dom";
import Login from "./Components/MainComponents/DatabaseComponents/Login/Login";
import Profile from "./Components/MainComponents/DatabaseComponents/Profile/Profile";
import SignUp from "./Components/MainComponents/DatabaseComponents/signup/SignUp";
import Home from "./Components/MainComponents/Home";
import Notes from "./Components/MainComponents/Notes";
import VideoLec from "./Components/MainComponents/VideoLec";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route exact path="/VideoLec" element={<VideoLec/>}  />
          <Route exact path="/Notes" element={<Notes/>}  />
          <Route exact path="/signin" element={<SignUp/>}  />
          <Route exact path="/login" element={<Login/>}  />
          <Route exact path="/profile" element={<Profile/>}  />
        </Routes>
    </>
  );
}

export default App;
