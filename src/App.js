import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./component/Layout";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Login/Login.page";
import Register from "./pages/register/Register.page";

function App() {
  return (
    <div className="supplier__container ">
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/users/resetPassword/:id/:token"
            element={<ForgotPassword />}
          />
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
