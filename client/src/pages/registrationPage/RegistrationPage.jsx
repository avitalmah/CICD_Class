import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
import countryList from 'react-select-country-list'
import Select from 'react-select'

const RegistrationPage = () => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
        city: "",
        street: "",
        street_number: "",
        apt_number: "",
        zip: "",
    })
    // here some logic
    // const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [streetNumber, setStreetNumber] = useState("");
    const [aptNumber, setAptNumber] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const options = useMemo(() => countryList().getData(), []);

    useEffect(() => {
        console.log(userEmail, country, zip)
    }, [userEmail, country, zip])

    const handleChange = (event) => {
        switch (event.target.name) {
            case "user-email":
                setUserEmail(event.target.value)
                user.email = (event.target.value);
                break;
            case "first-name":
                setFirstName(event.target.value)

                user.first_name = (event.target.value);
                console.log(user.first_name + "  Working");
                console.log(user.first_name);
                break;
            case "last-name":
                setLastName(event.target.value)
                user.last_name = (event.target.value);
                console.log(user.first_name + "  Working2");
                break;
            case "user-password":
                setPassword(event.target.value)
                user.password = (event.target.value);
                break;
            case "user-city":
                setCity(event.target.value)
                user.city = (event.target.value);
                break;
            case "user-street":
                setStreet(event.target.value)
                user.street = (event.target.value);
                break;
            case "user-street-num":
                setStreetNumber(event.target.value)
                user.street_number = (event.target.value);
                break;
            case "user-apt-num":
                setAptNumber(event.target.value)
                user.apt_number = (event.target.value);
                break;
            case "user-zip":
                setZip(event.target.value)
                user.zip = (event.target.value);
                break;
            case "submit-button":
                register();
                console.log(user);
                break;
        }
    };

    const countryHandler = country => {
        setCountry(country.label);
        user.country = (country.label);
    };

    const register = () => {
        axios.post("http://localhost:8301/Register", user)
            .then(res => console.log(res)).catch((err) => {
                alert(err);})
    }


    return (
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
                                                        <Form.Control required type="text" name="first-name" placeholder="First Name" value={firstName} onChange={(event) => handleChange(event)} />
                                                    </Form.Group>
                                                </div>

                                                {/* LAST NAME */}
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-4" controlId="formBasicLastName">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control required type="text" name="last-name" placeholder="Last Name" value={lastName} onChange={(event) => handleChange(event)} />
                                                    </Form.Group>
                                                </div>
                                            </div>

                                            {/* EMAIL */}
                                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control required type="email" placeholder="Enter email" name="user-email" value={userEmail} onChange={(event) => handleChange(event)} />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            {/* PASSWORD */}
                                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                                                    name="user-password" value={password} onChange={(event) => handleChange(event)} />
                                            </Form.Group>

                                            {/* COUNTRY */}
                                            <Form.Label>Country</Form.Label>
                                            <Select className="mb-4" options={options} value={country.label} onChange={countryHandler} />

                                            <div className="row">
                                                {/* City */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicCity">
                                                        <Form.Label>City</Form.Label>
                                                        <Form.Control type="text" placeholder="City" pattern="[A-Za-z]{1,20}"
                                                            title="Must contain only letters" required
                                                            name="user-city" value={city} onChange={(event) => handleChange(event)} />
                                                    </Form.Group>
                                                </div>

                                                {/* STREET */}
                                                <div className="col-md-8">
                                                    <Form.Group className="mb-4" controlId="formBasicStreet">
                                                        <Form.Label>Street</Form.Label>
                                                        <Form.Control type="text" placeholder="Street" pattern="[A-Za-z]{1,20}"
                                                            title="Must contain only letters" required
                                                            name="user-street" value={street} onChange={(event) => handleChange(event)} />                                                    </Form.Group>
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* Street num */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicStreetNumber">
                                                        <Form.Label>Street Number</Form.Label>
                                                        <Form.Control type="text" placeholder="Street Num" pattern="[0-9]{1,5}"
                                                            title="Must contain only digits, max length 5" required name="user-street-num"
                                                            value={streetNumber} onChange={(event) => handleChange(event)} />
                                                    </Form.Group>
                                                </div>

                                                {/* Apt num */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicAptNumber">
                                                        <Form.Label>Apt Number</Form.Label>
                                                        <Form.Control type="text" placeholder="Apt Num" pattern="[0-9]{1,5}"
                                                            title="Must contain only digits, max length 5" required name="user-apt-num"
                                                            value={aptNumber} onChange={(event) => handleChange(event)} />
                                                    </Form.Group>
                                                </div>

                                                {/* Zip */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicZip">
                                                        <Form.Label>ZIP Code</Form.Label>
                                                        <Form.Control type="text" placeholder="ZIP Code" pattern="[0-9]{1,10}"
                                                            title="Must contain only digits, max length 10" required name="user-zip"
                                                            value={zip} onChange={(event) => handleChange(event)} />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <Button name="submit-button" variant="primary" type="submit" onClick={(event) => handleChange(event)}>
                                                Submit
                                            </Button>

                                            <p className="text-center text-muted mt-5 mb-0">Already have an account? <a href="#/Login" className="fw-bold text-body"><u>Sign In</u></a></p>

                                        </Form>

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

export default RegistrationPage;
