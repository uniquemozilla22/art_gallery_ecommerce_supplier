import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./component/Layout";

function App() {
  const Dashboard = lazy(() => import("./pages/Home/Home.page"));
  const Login = lazy(() => import("./pages/Login/Login.page"));
  const Register = lazy(() => import("./pages/register/Register.page"));
  const ForgotPassword = lazy(() =>
    import("./pages/ForgotPassword/ForgotPassword")
  );

  const Order = lazy(() => import("./pages/Order/Order.page"));
  const Profile = lazy(() => import("./pages/Profile/Profile.page"));
  return (
    <Layout>
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/users/resetPassword/:id/:token"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/*"
          exact
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/orders/*"
          exact
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Order />
            </Suspense>
          }
        />
        <Route
          path="/finance"
          exact
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/bids/*"
          exact
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/profile/*"
          exact
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Profile />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
