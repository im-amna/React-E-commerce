import React from "react";
import Layout from "../components/common/Layout";
import Container from "../components/common/Container";
import Row from "../components/common/Row";

const Cart = () => {
  return (
    <Layout>
      <Container ClassName="my-[40px]">
        <Row ClassName="mb-[30px] justify-center">
          <h6 className="text-[24px] text-slate-700 font-semibold">
            Cart Details
          </h6>
        </Row>
        <Row className="flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full px[20px] items-center">
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Image
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Title
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Price
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">Qty</h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Total
            </h6>
          </Row>
          <Row className="border-[1px] border-gray-400 items-center w-full py-[10px] px-[20px] mb-[30px] ">
            <Row className="w-[20px] ">
              <img
                src="https://easternfashion.pk/cdn/shop/files/6_e1722546-2c3c-4556-9c0a-26114858cdc7.jpg?v=1707989835 "
                alt="cart product"
              />
            </Row>
            <p className="w-[20px] text-[16px] text-black font-medium">
              Demo Product
            </p>
            <p className="w-[20px] text-[16px] text-black font-medium">$20</p>
            <p className="w-[20px] text-[16px] text-black font-medium">$20</p>
          </Row>
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
