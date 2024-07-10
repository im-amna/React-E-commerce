import React, { useState } from 'react';
import Row from './Row';

const Qtycontainer = () => {
    const [count, setCount] = useState(0);
const handleDecrease = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    
      const handleIncrease = () => {
        setCount(count + 1);
      };
    
 return (<Row className=" items-center">
        <button
          onClick={handleDecrease}
          className="text-white bg-black text-[20px] font-medium w-[52px] h-[52px]"
        >
          -
        </button>
        <p className="w-[70px] text-center text-[16px] font-semibold">
          {count}
        </p>
        <button
          onClick={handleIncrease}
          className="text-white  bg-black text-[20px] font-medium w-[52px] h-[52px]"
        >
          +
        </button>
        </Row>  );
}
 
export default Qtycontainer;