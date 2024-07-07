import React from 'react';
import Row from './Row';

const ProductCard = () => {
    return ( <div className='w-full shadow p-[5px]'>
        <img src="https://d2s30hray1l0uq.cloudfront.net/frontend/brand-motto.jpg" alt="ProdCard"
        className='w-full object-cover h-[400px]'
        />
        < Row className='px-[10px]'>
        <h6 className='text-black text-[16px] font-semibold mt-[18px]'>Demo Title</h6>
  </Row>
  <Row className='justify-between mt-[16px] px[10px] mb-[10px]'>
    <p className='text-[16px] text-[#00000080]'> Clothing</p>
    <p className='text-[16px] text-[#00000080] font-semibold'>$20</p>
  </Row>
    </div> );
}
 
export default ProductCard;