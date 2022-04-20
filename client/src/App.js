
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";
import './App.css';
import HomePage from './pages/homePage/HomePage';
import Navbar from './pages/navbar/Navbar';
import About from './pages/about/AboutPage';
import LoginPage from './pages/loginPage/LoginPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';
import { Switch, Route, HashRouter } from "react-router-dom";
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Login" exact component={LoginPage} />
          <Route path="/About" exact component={About} />
          <Route path="/Registration" exact component={RegistrationPage}/> 
          <Route path="/ProductsPage" exact component={ProductsPage}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

