import { useState, useEffect, useMemo, useContext, useReducer } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Form, Button, Card, ListGroup, Row, Col } from 'react-bootstrap';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { Store } from '../../Store';
import { toast } from 'react-toastify';
import { getError } from '../../utils';

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_REQUEST':
            return { ...state, loading: true };
        case 'CREATE_SUCCESS':
            return { ...state, loading: false };
        case 'CREATE_FAIL':
            return { ...state, loading: false };
        default:
            return state;
    }
};

const PaymentPage = () => {
    const [{ loading }, dispatch] = useReducer(reducer, {
        loading: false,
    });
    const history = useHistory();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;
    // here some logic


    cart.itemsPrice = cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0);

    useEffect(() => {
        window.alert(cart.shippingAddress.country)
        if (!userInfo) {
            history.push('/signin?redirect=/shipping');
        }
    }, [userInfo, history]);


    const submitHandler = async () => {
        ctxDispatch({ type: 'CART_CLEAR' });
        history.push('/');

        // try {
        //     dispatch({ type: 'CREATE_REQUEST' });

        //     const { data } = await axios.post(
        //         '/api/orders',
        //         {
        //             orderItems: cart.cartItems,
        //             shippingAddress: cart.shippingAddress,
        //             itemsPrice: cart.itemsPrice,
        //             shippingPrice: cart.shippingPrice,
        //         },
        //         {
        //             headers: {
        //                 authorization: `Bearer ${userInfo.token}`,
        //             },
        //         }
        //     );
        //     ctxDispatch({ type: 'CART_CLEAR' });
        //     dispatch({ type: 'CREATE_SUCCESS' });
        //     localStorage.removeItem('cartItems');
        //     history.push('/');
        // } catch (err) {
        //     dispatch({ type: 'CREATE_FAIL' });
        //     toast.error(getError(err));
        // }
    };

    return (
        <div >
            <div className=" bg-image" style={{ backgroundColor: "#F8EDEB" }}  >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card m-5" itemID="check">
                                    <div className="card-body p-5" style={{ backgroundColor: "#FCD5CE" }} >
                                        <h2 className="text-uppercase text-center mb-5">Payment</h2>

                                        <Form onSubmit={submitHandler}>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-4" controlId="formBasicFirstName">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control
                                                            required type="text"
                                                            placeholder="Last Name"
                                                            pattern="[A-Za-z' ']{1,20}"
                                                            title="Must contain only letters" />
                                                    </Form.Group>
                                                </div>

                                                {/* LAST NAME */}
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-4" controlId="formBasicLastName">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control
                                                            required type="text"
                                                            placeholder="Last Name"
                                                            pattern="[A-Za-z' ']{1,20}"
                                                            title="Must contain only letters" />
                                                    </Form.Group>
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* Credit Card Number */}
                                                <div className="col-md-12">
                                                    <Form.Group className="mb-4" controlId="formBasicCity">
                                                        <Form.Label>Credit Card Number</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Credit Card Number"
                                                            pattern="[0-9]{16,16}"
                                                            title="Must contain only 16 digits" required />
                                                    </Form.Group>
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* Month Expiry */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicStreetNumber">
                                                        <Form.Label>Month Expiry</Form.Label>
                                                        <Form.Control
                                                            required type="text"
                                                            placeholder="Month Expiry"
                                                            pattern="([1][0-2]|[1-9])"
                                                            title="Invalid month format available option: 1-12" />

                                                    </Form.Group>
                                                </div>

                                                {/* Year Expiry*/}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicAptNumber">
                                                        <Form.Label>Year Expiry</Form.Label>
                                                        <Form.Control
                                                            required type="text"
                                                            placeholder="Year Expiry"
                                                            pattern="([3][0-9]|[2][2-9])"
                                                            title="Invalid year format example: 22, contain only 2 digits" />
                                                    </Form.Group>
                                                </div>

                                                {/* CVV */}
                                                <div className="col-md-4">
                                                    <Form.Group className="mb-4" controlId="formBasicZip">
                                                        <Form.Label>CVV</Form.Label>
                                                        <Form.Control
                                                            required type="text"
                                                            placeholder="CVV"
                                                            pattern="[0-9]{3,3}"
                                                            title="Must contain only 3 digits" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <h2 className="text-uppercase text-center mb-5">Order Summary</h2>
                                            <Card className="mb-3" >
                                                <Card.Body>
                                                    <Card.Title>Shipping</Card.Title>
                                                    <Card.Text >
                                                        <strong>Country:</strong> {cart.shippingAddress.country} <br />
                                                        <strong>City:</strong> {cart.shippingAddress.city} <br />
                                                        <strong>Street:</strong> {cart.shippingAddress.street} <br />
                                                        <strong>Street Number:</strong> {cart.shippingAddress.streetNumber} <br />
                                                        <strong>Apartment Number:</strong> {cart.shippingAddress.aptNumber} <br />
                                                        <strong>ZIP:</strong> {cart.shippingAddress.zip} <br />
                                                    </Card.Text>
                                                    <Link to="/shipping" className="fw-bold text-body">Edit</Link>
                                                </Card.Body>
                                            </Card>

                                            <Card className="mb-3">
                                                <Card.Body>
                                                    <Card.Title>Items</Card.Title>
                                                    <ListGroup variant="flush">
                                                        {cart.cartItems.map((item) => (
                                                            <ListGroup.Item key={item._id}>
                                                                <Row className="align-items-center">
                                                                    <Col md={3}>
                                                                        <img
                                                                            src={item.image}
                                                                            alt={item.title}
                                                                            className="img-fluid rounded img-thumbnail"
                                                                        ></img>{' '}
                                                                        <Link to={`/product/${item.slug}`} className="fw-bold text-body ">{item.title}</Link>
                                                                    </Col>
                                                                    <Col md={3}>
                                                                        <span>{item.quantity}</span>
                                                                    </Col>
                                                                    <Col md={3}>${item.price}</Col>
                                                                    <Col md={3}><Link to="/cart" className="fw-bold text-body">Edit</Link></Col>
                                                                </Row>
                                                            </ListGroup.Item>
                                                        ))}
                                                    </ListGroup>
                                                </Card.Body>
                                            </Card>

                                            <div className="mb-3 d-flex justify-content-center">
                                                <Button type="submit">Pay</Button>
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

export default PaymentPage;
