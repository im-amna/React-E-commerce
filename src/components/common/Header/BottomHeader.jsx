import React from 'react';
import Row from '../Row';
const  menus=[
    'Jewelery &Accessories',
    'Clothing & Shoes',
    'Home & Living',
    'Wedding & Party',
    'Toys & Entertainment',
    'Art & Collectibles',
    'Craft Supplies & Tools',
  ];

const ButtonHeader = () => {
    return ( <div className='w-full px-[10%] h-[60px] bg-[#85898d0d]'>
        <Row className="flex items-center h-full justify-between">
      {menus.map((item=><p className='text-[16px] text-slate-800' key={item}>
        {item}
        </p>
      ))}
   </Row>
   </ div> );
}
 
export default ButtonHeader;