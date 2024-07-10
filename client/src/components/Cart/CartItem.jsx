import React from 'react';
import Qtycontainer from '../common/Qtycontainer';
import Row from '../common/Row';

const CartItem = () => {
    return ( <Row className="border-[1px] border-gray-400 items-center w-full py-[10px] px-[20px] mb-[30px] ">
        <Row className="w-[20%]">
          <img
          className="w-2/3 h-[150px] object-cover rounded-[6px]"
            src="https://easternfashion.pk/cdn/shop/files/6_e1722546-2c3c-4556-9c0a-26114858cdc7.jpg?v=1707989835 "
            alt="cart product"
            width={20}
          />
        </Row>
        <p className="w-[20%] text-[16px] text-black font-medium">
          Demo Product
        </p>
        <p className="w-[20%] text-[16px] text-black font-medium">$20</p>
        <p className="w-[20%] text-[16px] text-black font-medium">2</p>
        <div className="w-[20%] ">
          <Qtycontainer/>
        </div> 
        <p className="w-[20%] text-center text-[16px] text-black font-medium">$1040</p>

          </Row>);
}
 
export default CartItem;