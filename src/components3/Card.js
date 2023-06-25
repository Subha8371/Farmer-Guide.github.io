import React from "react";
import { Link } from "react-router-dom";

const Card = () => {


    return (
        <div >

            {/* card part */}
            <div className="row mb-2">
                <div className="col-md-6" >
                    
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">RICE</strong>
                                <h3 className="mb-0">Blog</h3>
                                <p className="card-text mb-auto">Here has step by step process to cultivate Rice..</p>
                                <Link to="/Rice" className="stretched-link">Rice farming process</Link>
                            </div>

                        </div>

                </div>




                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">POTATO</strong>
                            <h3 className="mb-0">Blog</h3>
                            <p className="mb-auto">Here has step by step process to cultivate Potato...</p>
                            <Link to="/Potato" className="stretched-link">Potato farming process</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;