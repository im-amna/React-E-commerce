import React from "react";
import BottomHeader from "../components/Header/BottomHeader";
import BestSellerProducts from "../components/Home/BestSellerProducts";
import HeroSection from "../components/Home/HeroSection";
import PopularProducts from "../components/Home/PopularProducts";
import Layout from "../components/common/Layout";

const Home = () => {
  return (
    <div className="w-full  bg-[#1e28320d] h-[60px]">
      <Layout>
        <BottomHeader />
        <HeroSection />
        <PopularProducts />
        <BestSellerProducts />
      </Layout>
    </div>
  );
};

export default Home;
