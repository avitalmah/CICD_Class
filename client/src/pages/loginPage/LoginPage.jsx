import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'

const LoginPage = () => {
  // here some logic
  const history = useHistory();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    console.log(userName)
  }, [userName])

  const handleChange = (event) => {
    switch (event.target.name) {
      case "user-name":
        setUserName(event.target.value)
        break;
    }
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
                        <Form.Control required type="email" name="user-name" placeholder="Enter email" value={userName} onChange={(event) => handleChange(event)} />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>



                      <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                      </Form.Group>

                      <Button variant="primary" type="submit" >
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
