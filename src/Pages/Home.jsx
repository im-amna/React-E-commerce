import React from "react";
import BottomHeader from "../components/common/Header/BottomHeader";
import TopHeader from "../components/common/Header/TopHeader";
import BestSellerProducts from "../components/common/Home/BestSellerProducts";
import HeroSection from "../components/common/Home/HeroSection";
import PopularProducts from "../components/common/Home/PopularProducts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full  bg-[#1e28320d] h-[60px]">
      <TopHeader />
      <BottomHeader />
      <HeroSection />
      <PopularProducts />
      <BestSellerProducts />
      <Footer />
    </div>
  );
};

export default Home;
