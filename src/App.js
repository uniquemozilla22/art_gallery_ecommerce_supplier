import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./component/Layout";
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Login/Login.page";

function App() {
  return (
    <div className="supplier__container ">
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
