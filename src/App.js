import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { useContext, useState } from "react";
import AuthContext from "./store/authContext";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Cancel } from "./components/Cancel";
import { Success } from "./components/Success";
import { LandingPage } from "./components/LandingPage";
import { NonAuthNavbar } from "./components/Navbar";
import { AuthNavbar } from "./components/Navbar";
import { AuthFooter } from "./components/Footer";
import { NonAuthFooter } from "./components/Footer";
import { AuthPage } from "./components/AuthPage";
import AboutUsPage from "./components/AboutUsPage";
import { ServicePage } from "./components/ServicePage";
import CartProvider from "./store/cartContext";
function App() {
  //
  const { state } = useContext(AuthContext);

  return (
    <CartProvider>
      <Container className="">
        {!state.token ? <NonAuthNavbar /> : <AuthNavbar />}
        <Routes>
          <Route
            path="/"
            element={state.token ? <LandingPage /> : <AuthPage />}
          />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          {/* <Route path='/cart' element={<Checkout />} /> */}
        </Routes>
        {!state.token ? <NonAuthFooter /> : <AuthFooter />}
      </Container>
    </CartProvider>
  );
}

export default App;
