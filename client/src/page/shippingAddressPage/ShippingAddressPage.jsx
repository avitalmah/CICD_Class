import { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { Store } from '../../Store';
import { toast } from 'react-toastify';
import { getError } from '../../utils';

const ShippingAddressPage = () => {

    const history = useHistory();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo, cart: { shippingAddress }, } = state;

    // here some logic
    const [city, setCity] = useState(userInfo.city || "");
    const [street, setStreet] = useState(userInfo.street || "");
    const [streetNumber, setStreetNumber] = useState(userInfo.streetNumber || "");
    const [aptNumber, setAptNumber] = useState(userInfo.aptNumber || "");
    const [zip, setZip] = useState(userInfo.zip || "");
    const [country, setCountry] = useState("");
    const options = useMemo(() => countryList().getData(), []);



    useEffect(() => {
        if (!userInfo) {
            history.push('/signin?redirect=/shipping');
        }
    }, [userInfo, history]);


    const countryHandler = country => {
        setCountry(country.label);
        window.alert(country);

    };

    const submitHandler = (e) => {
        if (country === "") {
            toast.error("must select country before continue to payment");
            e.preventDefault();

        }
        else {
            setCountry(country.label);
            shippingAddress.country = country;
            shippingAddress.city = city;
            shippingAddress.street = street;
            shippingAddress.streetNumber = streetNumber;
            shippingAddress.aptNumber = aptNumber;
            shippingAddress.zip = zip;
            e.preventDefault();
            ctxDispatch({
                type: 'SAVE_SHIPPING_ADDRESS',
                payload: {
                    country,
                    city,
                    street,
                    streetNumber,
                    aptNumber,
                    zip,
                },
            });
            localStorage.setItem(
                'shippingAddress',
                JSON.stringify({
                    country,
                    city,
                    street,
                    streetNumber,
                    aptNumber,
                    zip,
                })
            );
            history.push('/payment');
        }
    };

    return (
        <div >
            <div className=" bg-image" style={{ backgroundColor: "#694F5D" }}  >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" itemID="check">
                                    <div className="card-body p-5" style={{ backgroundColor: "#BFD3C1" }} >
                                        <h2 className="text-uppercase text-center mb-5" style={{ color: "#D8E2DC" }}>Shipping Adress</h2>

                                        <Form onSubmit={submitHandler}>
                                            {/* COUNTRY */}
                                            <Form.Label style={{ color: "#D8E2DC" }}>Country</Form.Label>
                                            <Select className="mb-4" options={options} value={country.label} defaultValue={country} onChange={countryHandler} />

                                            <div className="row">
                                                {/* City */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicCity">
                                                        <Form.Label style={{ color: "#D8E2DC" }}>City</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="City"
                                                            pattern="[A-Za-z' ']{1,20}"
                                                            title="Must contain only letters" required
                                                            name="user-city"
                                                            value={city}
                                                            onChange={(e) => setCity(e.target.value)} />
                                                    </Form.Group>
                                                </div>

                                                {/* STREET */}
                                                <div className="col-md-8">
                                                    <Form.Group className="mb-4" controlId="formBasicStreet">
                                                        <Form.Label style={{ color: "#D8E2DC" }}>Street</Form.Label>
                                                        <Form.Control type="text"
                                                            placeholder="Street"
                                                            pattern="[A-Za-z' ']{1,20}"
                                                            title="Must contain only letters" required
                                                            name="user-street"
                                                            value={street}
                                                            onChange={(e) => setStreet(e.target.value)} />
                                                    </Form.Group>
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* Street num */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicStreetNumber">
                                                        <Form.Label style={{ color: "#D8E2DC" }}>Street Number</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Street Num"
                                                            pattern="[0-9]{1,5}"
                                                            title="Must contain only digits, max length 5"
                                                            required name="user-street-num"
                                                            value={streetNumber}
                                                            onChange={(e) => setStreetNumber(e.target.value)} />
                                                    </Form.Group>
                                                </div>

                                                {/* Apt num */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicAptNumber">
                                                        <Form.Label style={{ color: "#D8E2DC" }}>Apt Number</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Apt Num"
                                                            pattern="[0-9]{1,5}"
                                                            title="Must contain only digits, max length 5"
                                                            required name="user-apt-num"
                                                            value={aptNumber}
                                                            onChange={(e) => setAptNumber(e.target.value)} />
                                                    </Form.Group>
                                                </div>

                                                {/* Zip */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicZip">
                                                        <Form.Label style={{ color: "#D8E2DC" }}>ZIP Code</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="ZIP Code"
                                                            pattern="[0-9]{1,10}"
                                                            title="Must contain only digits, max length 10"
                                                            required name="user-zip"
                                                            value={zip}
                                                            onChange={(e) => setZip(e.target.value)} />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <Button style={{ backgroundColor: "#694F5D" }} type="submit">Continue</Button>
                                            </div>

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

export default ShippingAddressPage;
