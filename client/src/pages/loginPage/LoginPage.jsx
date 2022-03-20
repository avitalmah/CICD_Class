import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";


const LoginPage = () => {
  // here some logic
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    console.log(userEmail, userPassword)
  }, [userEmail, userPassword])

  const handleChange = (event) => {
    switch (event.target.name) {
      case "user-email":
        setUserEmail(event.target.value)
        break;
      case "user-password":
        setUserPassword(event.target.value)
        break;
    }
  }
  const login = () => {
    axios.post("http://localhost:5000/Login", {
      email: userEmail,
      password: userPassword,
    })
      .then(res => {
        alert(res.data.message);
        history.push("/About");
      })
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
                    <h2 className="text-uppercase text-center mb-5">Log In</h2>

                    <Form>

                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" name="user-email" placeholder="Enter email" value={userEmail} onChange={(event) => handleChange(event)} />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>



                      <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" name="user-password" placeholder="Password" value={userPassword} onChange={(event) => handleChange(event)} />
                      </Form.Group>

                      <Button name="submit-button" variant="primary" type="submit" onClick={login} >
                        Submit
                      </Button>

                      <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="#/Registration" className="fw-bold text-body"><u>Register</u></a></p>
                      <p className="text-center text-muted mt-5 mb-0">Forgot your password? <a href="#!" className="fw-bold text-body"><u>Reset Password</u></a></p>
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

export default LoginPage;
