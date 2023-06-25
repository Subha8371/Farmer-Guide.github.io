import React from "react";
import App2 from "./App2";
import About from "./components2/About";
import Home from "./components2/Home";

// import { Route } from 'react-router-dom';
import Navbar from "./components2/Navbar";
import { Route, Routes } from "react-router-dom";
import Potato from "./components2/Potato";
import Rice from "./components2/Rice";


const App = () => {
    return (
        <>
        
            <div>
                <Routes>
                    <Route end path="/" element={<Home />} />

                    <Route path="/App2" element={<App2 />} />


                    <Route path="/About" element={<About />} />
                    <Route path="/Potato" element={<Potato/>} />
                    <Route path="/Rice" element={<Rice/>} />
                </Routes>
                {/* <Route path="/leaderboard" Component={}={<Leaderboard />} /> */}
            </div>



        </>
    )
}
export default App;