import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './page/homePage/HomePage';
import ProductScreen from './page/productPage/ProductScreen';
import CartPage from './page/cartPage/CartPage';
import Header from './page/navbar/Navbar';
import SignIn from './page/signIn/SignIn';
import SignUp from './page/signUp/SignUp';
import ShippingAddressPage from './page/shippingAddressPage/ShippingAddressPage';
import PaymentPage from './page/paymentPage/PaymentPage';
import ProfilePage from './page/profilePage.jsx/ProfilePage';
import Dashboard from './managerPage/dashboard/Dashboard';
import ResetPassword from './page/resetPassword/ResetPassword';
import VerifyPinCodePassword from './page/verifyPinCodePassword/VerifyPinCodePassword';
import ChangePassword from './page/changePassword/ChangePassword';
import ContactUsPage from './page/contactUs/ContactUsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from './page/searchpage/SearchPage';

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-center" limit={1} />
      <HashRouter>
        <Header></Header>
        <Switch className="mt-3">
          <Route path="/product/:slug" exact component={ProductScreen} />
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/shipping" exact component={ShippingAddressPage} />
          <Route path="/payment" exact component={PaymentPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/resetpassword" exact component={ResetPassword} />
          <Route path="/resetpasswordpin" exact component={VerifyPinCodePassword} />
          <Route path="/changepassword" exact component={ChangePassword} />
          <Route path="/contactus" exact component={ContactUsPage} />
          <Route path="/admin/dashboard" exact component={Dashboard} />
        </Switch>
      </HashRouter>
    </div>
  );
}
export default App;

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "font-awesome/css/font-awesome.min.css";
// import './App.css';
// import HomePage from './pages/homePage/HomePage';
// import Navbar from './pages/navbar/Navbar';
// import About from './pages/about/AboutPage';
// import LoginPage from './pages/loginPage/LoginPage';
// import RegistrationPage from './pages/registrationPage/RegistrationPage';
// import { Switch, Route, HashRouter } from "react-router-dom";
// import ProductsPage from './pages/ProductsPage';
// import SignUpForm from './pages/signupPage/SignupPage';


// function App() {
//   return (
//     <div className="App">
//       <HashRouter>
//         <Navbar></Navbar>
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/Login" exact component={LoginPage} />
//           <Route path="/About" exact component={About} />
//           <Route path="/Registration" exact component={RegistrationPage}/>
//           <Route path="/ProductsPage" exact component={ProductsPage}/>
//           <Route path="/Signup" exact component={SignUpForm}/>
//         </Switch>
//       </HashRouter>
//     </div>
//   );
// }

// export default App;

