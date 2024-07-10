import React from "react";
import BestSellerProducts from "../Home/BestSellerProducts";
import HeroSection from "../Home/HeroSection";
import PopularProducts from "../Home/PopularProducts";
import Layout from "../common/Layout";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
    </Layout>
  );
};

export default Home;
