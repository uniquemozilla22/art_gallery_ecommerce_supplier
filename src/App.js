import React, { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./component/Layout";
import SpinnerComp from "./component/Spinner/Spinner";
import LoginPage from "./pages/Login/Login.page";
import { showLoading } from "./store/actions/Loading/Loading";

function App() {
  const dispatch = useDispatch();
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
            <Suspense fallback={<Spinner />}>
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
            <Suspense fallback={<Spinner />}>
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
            <Suspense fallback={<SpinnerComp fallback />}>
              <Profile />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
