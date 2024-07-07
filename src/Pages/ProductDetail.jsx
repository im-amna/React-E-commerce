import React from 'react';
import TopHeader from '../components/common/Header/TopHeader';
import BottomHeader from '../components/common/Header/BottomHeader';
import Footer from '../components/Footer';

const ProductDetail = () => {
    return ( <div className='w-full  bg-[#1e28320d] h-[60px]'>
        <TopHeader/>    
   <BottomHeader/>    
 <h1>Welcome to product detail page</h1>
  <Footer/>
  
  </div> );
};
 
export default ProductDetail;