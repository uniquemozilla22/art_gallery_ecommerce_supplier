import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./component/Layout";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Login/Login.page";
import Register from "./pages/register/Register.page";
import OrderPage from "./pages/Order/Order.page";
import ProfilePage from "./pages/Profile/Profile.page";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/">
          <Route
            path="/login"
            element={React.lazy(() => import("./pages/Login/Login.page"))}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/users/resetPassword/:id/:token"
            element={React.lazy(() =>
              import("./pages/ForgotPassword/ForgotPassword")
            )}
          />
          <Route
            path="/dashboard/*"
            exact
            element={React.lazy(() => import("./pages/Home/Home.page"))}
          />
          <Route
            path="/orders/*"
            exact
            element={React.lazy(() => import("./pages/Order/Order.page"))}
          />
          <Route
            path="/finance"
            exact
            element={React.lazy(() => import("./pages/Home/Home.page"))}
          />
          <Route
            path="/bids"
            exact
            element={React.lazy(() => import("./pages/Home/Home.page"))}
          />
          <Route
            path="/profile/*"
            exact
            element={React.lazy(() => import("./pages/Profile/Profile.page"))}
          />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
