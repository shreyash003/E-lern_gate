import { Route, Routes } from "react-router-dom";
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
        </Routes>
    </>
  );
}

export default App;
