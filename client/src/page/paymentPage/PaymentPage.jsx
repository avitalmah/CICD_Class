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
    };

    const submitHandler = async (e) => {
        if (country === "") {
            toast.error("must select country before continue to payment");
            e.preventDefault();

        }
        else {
            shippingAddress.country = country;
            shippingAddress.city = city;
            shippingAddress.street = street;
            shippingAddress.streetNumber = streetNumber;
            shippingAddress.aptNumber = aptNumber;
            shippingAddress.zip = zip;
            setCountry(country.label);
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
        <h1>hii</h1>
    );
}

export default ShippingAddressPage;
