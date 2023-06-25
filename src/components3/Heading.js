import React from "react";
import {Link} from "react-router-dom";
const Heading=()=>{
    return(
        <div>
           {/* Middle part */}
           <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">FARMER GUIDE</h1>
                    <p className="lead my-3">This website will help you to cultivate in best way depens on curent weather</p>
                    <p className="lead mb-0" style={{color:"red"}}><Link to="/App2" className="text-white fw-bold">Take Help from expert</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Heading;