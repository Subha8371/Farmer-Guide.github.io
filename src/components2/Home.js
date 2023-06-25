import React from "react";

import Heading from "../components3/Heading";
import Card from "../components3/Card";
// import Footer from "../components3/Footer";
import '../index.css';
import Navbar from "./Navbar";

const Home = () => {

    // const info="Aloo"
    return (
        <div >
            <div >
                <div>
                    <Navbar />
                </div>
                <div className="homec">

                    <div>
                        <Heading />
                    </div>

                    <div>
                        <Card />
                    </div>

                </div>


            </div>
        </div>
    )
}
export default Home;