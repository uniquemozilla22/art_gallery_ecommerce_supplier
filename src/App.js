import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./component/Layout";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Login/Login.page";
import Register from "./pages/register/Register.page";
import OrderPage from "./pages/Order/Order.page";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/">
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/users/resetPassword/:id/:token"
            element={<ForgotPassword />}
          />
          <Route path="/dashboard/*" exact element={<HomePage />} />
          <Route path="/orders/*" exact element={<OrderPage />} />
          <Route path="/finance" exact element={<HomePage />} />
          <Route path="/bids" exact element={<HomePage />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
