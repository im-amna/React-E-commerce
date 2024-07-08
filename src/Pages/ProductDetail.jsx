import React from "react";
import Container from "../components/common/Container";
import Row from "../components/common/Row";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";

const ProductDetail = () => {
  return (
        <Layout>
          
    <Container className="my-[41spx]">
        <Row className="justify-between">
          <Row className="w-[47%]">
            <img
              className="w-full object-cover h-[80vh]"
              src="https://easternfashion.pk/cdn/shop/files/6_e1722546-2c3c-4556-9c0a-26114858cdc7.jpg?v=1707989835"
              alt="product"
            />
          </Row>
          <Row className="flex-col w-[47%]">
            <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">
              Clothing
            </h1>
            <Row className="gap-[20px] mb-[10px]">
              <p className="text-[18px] text-black font-medium w-[15%] ">
                Rating:
              </p>
              <p className="text-[18px] text-black ">*****</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[15%] ">
                Price:
              </p>
              <p className="text-[18px] text-black ">$20</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[15%] ">
                Category:
              </p>
              <p className="text-[18px] text-black ">Clothing</p>
            </Row>
            <Row className="gap-[20px] mt-[30px]">
              <p className="text-[18px] text-black font-medium w-[15%] ">
                Description:
              </p>
              <p className="text-[18px] text-black ">
                Quality Guranteed ❤️‍🔥Fabric Details :Shirt Organza Dupatta
                OrganzaTrouser MalaiEmbroidery Details :Front Heavy Embroidered
                with handworkFront Lace Embroidered...
              </p>
            </Row>
            <Row className="mt-[40px] items-center">
              <Button title="-" className="w-[52px] h-[52px]" />
              <p className="w-[70px] text-center text-[16px] font-semibold">
                0
              </p>
              <Button title="+" className="w-[52px] h-[52px]" />
            </Row>
            <Button
              title="Add to Cart"
              className="h-[52px] w-[174px] mt-[20px]"
            />
          </Row>
        </Row>
      </Container>
      <br />
      <br />
</Layout>
  );
};

export default ProductDetail;
