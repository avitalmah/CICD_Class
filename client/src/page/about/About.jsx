import { useState, useEffect } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AboutPage = () => {

    return (
        <div >
            <div className="vh-100 bg-image" style={{ backgroundColor: "#F8EDEB" }}  >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" itemID="check">
                                    <div className="card-body p-5" style={{ backgroundColor: "#FCD5CE" }} >
                                        <h2 className="text-uppercase text-center mb-5">About</h2>

                                         <div>
                                             bla bla bla 
                                         </div>
                                         <h2 className="text-uppercase text-center mb-5">Returm item policy</h2>
                                         <div>
                                             bla bla bla 
                                         </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default AboutPage;
