import React from 'react';
import Container from '../Container';
import Row from '../Row';

const PopularProducts = () => {
    return ( <Container>
        <Row className='justify-center my-[20px] uppercase'>
         <h1 className='text-[30px] font-semibold text-[#1e2832]'> Popular Products</h1>
        </Row>
        <Row className='gap-[24px]'>
          <div className='h-[648px] w-[52px] relative'>
          <p className='text-[34px] h-full w-[648px] text-black -rotate-90  text-center -z-1' >Explore new and popular styles</p>
          </div>
          <img 
          className='h-[648px] w-[648px]  object-cover cursor-pointer'
          src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="top popular" />
      <Row className=' flex-wrap w-1/2 gap-[24px] '>
      
      <div className='w-[46%] h-[312px]'>
       <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       alt="products"
       className='w-[312px] h-full object-cover '
       />
      
      </div>
      <div className='w-[46%] h-[312px]'>
       <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="products"
        className='w-[312px] h-full object-cover'
        />
        </div>
      <div className='w-[46%] h-[312px]'>
       <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       alt="products"
        className='w-[312px] h-full object-cover'
        />
      </div>
      <div className='w-[46%] h-[312px]'>
       <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
       alt="products" 
       className='w-[312px] h-full object-cover'
       />
      </div>
      </Row>
      </Row>
      </Container> );
}
 
export default PopularProducts;