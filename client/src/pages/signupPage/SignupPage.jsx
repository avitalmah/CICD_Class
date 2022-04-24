import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Toast, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast, Slide } from "react-toastify";
import { registerNewUser } from "../../redux/actions/authAction/registerNewUser";
import { useState, useEffect, useMemo } from "react";
import countryList from 'react-select-country-list'
import Select from 'react-select'

// form validation useing Yup
const validate = () =>
    Yup.object({
        firstName: Yup.string()
            .min(2, "Must be more than one character")
            .max(20)
            .required("This field is required")
            .matches(/([a-zA-Z' ']+)/),
        lastName: Yup.string()
            .min(2, "Must be more than one character")
            .max(20)
            .required("This field is required")
            .matches(/([a-zA-Z' ']+)/),
        email: Yup.string()
            .email("Please enter a vaild email")
            .required("This field is required"),
        password: Yup.string()
            .min(8, "Must be more than 8 characters")
            .required("This field is required"),
        country: Yup.string()
            .min(2, "Must be more than one character")
            .required("This field is required"),
        city: Yup.string()
            .min(2, "Must be more than one character")
            .max(20)
            .required("This field is required")
            .matches(/([a-zA-Z' ']+)/),
        street: Yup.string()
            .min(2, "Must be more than one character")
            .max(20)
            .required("This field is required")
            .matches(/([a-zA-Z' ']+)/),
        street_number: Yup.string()
            .min(1, "Must be one digit")
            .max(5)
            .required("This field is required")
            .matches(/([0-9]+)/),
        apt_number: Yup.string()
            .min(1, "Must be one digit")
            .max(5)
            .required("This field is required")
            .matches(/([0-9]+)/),
        zip: Yup.string()
            .min(1, "Must be one digit")
            .max(10)
            .required("This field is required")
            .matches(/([0-9]+)/),

    });

function SignUpForm(props) {

    const [countryy, setCountryy] = useState("");
    const options = useMemo(() => countryList().getData(), []);

    const countryHandler = countryy => {
        setCountryy(countryy.label);
        //countryy = (country.label);
    };

    const dispatch = useDispatch();

    const signUp = user => {
        dispatch(registerNewUser(user))
            .then(res => {
                toast.success(res, {
                    position: toast.POSITION.BOTTOM_LEFT,
                    transition: Slide
                });
                props.history.push("/");
            })
            .catch(err => {
                toast.error(err, {
                    position: toast.POSITION.BOTTOM_LEFT,
                    autoClose: false
                });
            });
    };
    return (
        <Container>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    country: "",
                    city: "",
                    street: "",
                    street_number: "",
                    apt_number: "",
                    zip: ""
                }}
                validationSchema={validate}
                onSubmit={(values, { setSubmitting }) => {
                    const newUser = {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password,
                        country: countryy.label,
                        city: values.city,
                        street: values.street,
                        street_number: values.street_number,
                        apt_number: values.apt_number,
                        zip: values.zip
                    };

                    signUp(newUser);

                    setSubmitting(false);
                }}>
                <div className='signup-form'>
                        <div >
                            <div className="vh-100 bg-image" style={{ backgroundColor: "#F8EDEB" }}  >
                                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                                    <div className="container h-100">
                                        <div className="row d-flex justify-content-center align-items-center h-100">
                                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                                <div className="card" itemID="check">
                                                    <div className="card-body p-5" style={{ backgroundColor: "#FCD5CE" }} >
                                                        <h2 className="text-uppercase text-center mb-5">Sign Up</h2>

                                                        <Form>
                                                            {/* FIRST NAME */}
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <Form.Group className="mb-4" controlId="formBasicFirstName">
                                                                        <Form.Label>First Name</Form.Label>
                                                                        <Form.Control required type="text" name="first-name" placeholder="First Name" />
                                                                        <ErrorMessage component={Toast} name='firstname' />
                                                                    </Form.Group>
                                                                </div>
                                                                {/* LAST NAME */}
                                                                <div className="col-md-6">
                                                                    <Form.Group className="mb-4" controlId="formBasicLastName">
                                                                        <Form.Label>Last Name</Form.Label>
                                                                        <Form.Control required type="text" name="last-name" placeholder="Last Name"  />
                                                                        <ErrorMessage component={Toast} name='lastname' />
                                                                    </Form.Group>
                                                                </div>
                                                            </div>

                                                            {/* EMAIL */}
                                                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                                                <Form.Label>Email address</Form.Label>
                                                                <Form.Control required type="email" placeholder="Enter email" name="user-email"  />
                                                                <Form.Text className="text-muted">
                                                                    We'll never share your email with anyone else.
                                                                </Form.Text>
                                                                <ErrorMessage component={Toast} name='email' />
                                                            </Form.Group>

                                                            {/* PASSWORD */}
                                                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                                                                    name="user-password" />
                                                            </Form.Group>

                                                            {/* COUNTRY */}
                                                            <Form.Label>Country</Form.Label>
                                                            <Select className="mb-4" options={options} value={countryy.label} onChange={countryHandler} />

                                                            <div className="row">
                                                                {/* City */}
                                                                <div className="col-md-4">
                                                                    <Form.Group className="mb-4" controlId="formBasicCity">
                                                                        <Form.Label>City</Form.Label>
                                                                        <Form.Control type="text" placeholder="City" pattern="[A-Za-z]{1,20}"
                                                                            title="Must contain only letters" required />
                                                                    </Form.Group>
                                                                </div>

                                                                {/* STREET */}
                                                                <div className="col-md-8">
                                                                    <Form.Group className="mb-4" controlId="formBasicStreet">
                                                                        <Form.Label>Street</Form.Label>
                                                                        <Form.Control type="text" placeholder="Street" pattern="[A-Za-z]{1,20}"
                                                                            title="Must contain only letters" required />                                                    </Form.Group>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                {/* Street num */}
                                                                <div className="col-md-4">
                                                                    <Form.Group className="mb-4" controlId="formBasicStreetNumber">
                                                                        <Form.Label>Street Number</Form.Label>
                                                                        <Form.Control type="text" placeholder="Street Num" pattern="[0-9]{1,5}"
                                                                            title="Must contain only digits, max length 5" required name="user-street-num" />
                                                                    </Form.Group>
                                                                </div>

                                                                {/* Apt num */}
                                                                <div className="col-md-4">
                                                                    <Form.Group className="mb-4" controlId="formBasicAptNumber">
                                                                        <Form.Label>Apt Number</Form.Label>
                                                                        <Form.Control type="text" placeholder="Apt Num" pattern="[0-9]{1,5}"
                                                                            title="Must contain only digits, max length 5" required name="user-apt-num" />
                                                                    </Form.Group>
                                                                </div>

                                                                {/* Zip */}
                                                                <div className="col-md-4">
                                                                    <Form.Group className="mb-4" controlId="formBasicZip">
                                                                        <Form.Label>ZIP Code</Form.Label>
                                                                        <Form.Control type="text" placeholder="ZIP Code" pattern="[0-9]{1,10}"
                                                                            title="Must contain only digits, max length 10" required name="user-zip"  />
                                                                    </Form.Group>
                                                                </div>
                                                            </div>

                                                            <div className='forgot-pass'>
                                                                Already have account, <Link to='/login'>Log in</Link>
                                                            </div>
                                                            <Button variant='primary' type='submit'>
                                                                Register{" "}
                                                            </Button>{" "}
                                                        </Form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Formik>
        </Container>
    );
}

export default SignUpForm;