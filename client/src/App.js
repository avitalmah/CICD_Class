import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './page/homePage/HomePage';
import ProductScreen from './page/productPage/ProductScreen';
import CartPage from './page/cartPage/CartPage';
import Header from './page/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header></Header>
        <Switch className="mt-3">
          <Route path="/product/:slug" exact component={ProductScreen} />
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={CartPage} />
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

