import React from "react"
import { Nav } from "react-bootstrap"

function Footer() {
    return (
        <div className="main-footer">
            <div className="container" style={{ backgroundColor: "#F8EDEB" }}>
                <div className="row">
                    <div className="col-md-2 col-sm-6 mx-3">
                        <h4>
                            Contact us
                        </h4>
                        <ul className="list-unstyled">
                            <li  >
                                Theperfectgroup8@gmail.com
                            </li>
                            <li >
                                <Nav.Item>
                                    <Nav.Link href="https://stackoverflow.com/questions/61830254/creat-hyperlink-for-footer-in-react">Facebook</Nav.Link>
                                </Nav.Item>
                            </li>
                            <li >
                                <Nav.Item>
                                    <Nav.Link href="https://www.instagram.com/brrrrada_web/?utm_medium=copy_link">Instagram</Nav.Link>
                                </Nav.Item>
                            </li>

                        </ul>
                    </div>


                    <div className="col-md-2 col-sm-6 mx-3">
                        <h4>
                            Avital Mahgerefte
                        </h4>
                        <li className="list-unstyled" >
                            <img
                                src='https://icon-library.com/images/woman-icon-vector/woman-icon-vector-9.jpg'
                                className='img-fluid rounded-circle'
                                alt=''
                            />

                        </li>

                    </div>
                    <div className="col-md-2 col-sm-6 mx-3">
                        <h4>
                            Ron Mansharof
                        </h4>
                        <li className="list-unstyled" >
                            <img
                                src='https://cdn1.iconfinder.com/data/icons/hipster-4/512/hipster-fashion-style-beard-man-glasses-512.png'
                                className='img-fluid rounded-circle'
                                alt=''
                            />

                        </li>

                    </div>
                    <div className="col-md-2 col-sm-6 mx-3">
                        <h4>
                            Lion Dahan
                        </h4>
                        <li className="list-unstyled" >
                            <img
                                src='https://www.nicepng.com/png/detail/494-4947134_women-transparent-icon.png'
                                className='img-fluid rounded-circle'
                                alt=''
                            />

                        </li>

                    </div>
                    <div className="col-md-2 col-sm-6 mx-3">
                        <h4>
                            Nika Tatikasvili
                        </h4>
                        <li className="list-unstyled" >
                            <img
                                src='https://cdn-icons-png.flaticon.com/512/39/39876.png'
                                className='img-fluid rounded-circle'
                                alt=''
                            />

                        </li>

                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p  className="mb-3 d-flex justify-content-center">
                        &copy;{new Date().getFullYear()} Brada
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;