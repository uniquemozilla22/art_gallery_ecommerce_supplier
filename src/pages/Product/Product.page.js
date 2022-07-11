import React from "react";
import { Route, Routes } from "react-router";
import PageHeadingLink from "../../component/PageHeadingLinks/PageHeadingLinks.comp";
import ProductProductsPage from "./AllProducts/Products.page";
import ProductAuction from "./Auction/ProductAuction.page";
import ProductHomePage from "./Home/ProductHome.page";

const ProductPage = () => {
  const links = ["auctions", "product"];
  return (
    <>
      <PageHeadingLink link={links} />
      <Routes>
        <Route path="/" element={<ProductHomePage />}></Route>
        <Route path="/auctions" element={<ProductAuction />}></Route>
        <Route path="/auction/:id" element={<>Single Product Page</>}></Route>
        <Route path="/product" element={<ProductProductsPage />}></Route>
      </Routes>
    </>
  );
};

export default ProductPage;
