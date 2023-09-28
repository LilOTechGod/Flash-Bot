import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import AuthContext from "./store/authContext";

import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { LandingPage } from "./components/LandingPage";
import { NonAuthNavbar } from "./components/Navbar";
import { AuthNavbar } from "./components/Navbar";
import {AuthFooter} from './components/Footer';
import { NonAuthFooter } from "./components/Footer";
import { AuthPage } from "./components/AuthPage";

function App() {
  //
  const { state } = useContext(AuthContext);

  return (
    <div className="App">
      {!state.token ? <NonAuthNavbar /> : <AuthNavbar />}
      <Routes>
        <Route path='/' element={state.token ? <LandingPage /> : <AuthPage />}/>
      </Routes>
      {!state.token ? <NonAuthFooter /> : <AuthFooter />}
    </div>
  );
}

export default App;
