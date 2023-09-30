import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useContext, useState } from "react";
import AuthContext from "./store/authContext";

import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { LandingPage } from "./components/LandingPage";
import { NonAuthNavbar } from "./components/Navbar";
import { AuthNavbar } from "./components/Navbar";
import {AuthFooter} from './components/Footer';
import { NonAuthFooter } from "./components/Footer";
import { AuthPage } from "./components/AuthPage";
import AboutUsPage from "./components/AboutUsPage";
import { ServicePage } from "./components/ServicePage";
import {Checkout} from './components/Checkout';

function App() {
  //
  const { state } = useContext(AuthContext);
  const [service, setService] = useState([
    {
      img: 'https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Placeholder title', description: 'Placeholder Text'
    },
    {
      img: 'https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Placeholder title', description: 'Placeholder Text'
    },
    {
      img: 'https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Placeholder title', description: 'Placeholder Text'
    },
    {
      img: 'https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Placeholder title', description: 'Placeholder Text'
    }
  ])

  return (
    <div className="App">
      {!state.token ? <NonAuthNavbar /> : <AuthNavbar />}
      <Routes>
        <Route path='/' element={state.token ? <LandingPage /> : <AuthPage />}/>
        <Route path='/aboutus' element={<AboutUsPage />}/>
        <Route path='/services' element={<ServicePage service={service}/>}/>
        <Route path='/cart' element={<Checkout />} />
      </Routes>
      {!state.token ? <NonAuthFooter /> : <AuthFooter />}
    </div>
  );
}

export default App;
