import React from "react";
import { products } from "../../data/data";
import Container from "../common/Container";
import ProductCard from "../common/ProductCard";
import Row from "../common/Row";

const BestSellerProducts = () => {
  return (
    <Container>
      <h1 className=" w-full text-center text-[30px] text-[#1e2832] font-semibold  mt-[80px] mb-[40px] uppercase">
        Best Seller Products
      </h1>
      <Row className="items-center">
        <p className="text-[16px] mr-[40px] cursor-pointer text-black font-bold hover:text-[#757575]">
          All Products
        </p>
        <p className="text-[16px] mr-[40px] cursor-pointer text-[#00000080]  hover:text-[#757575]">
          Clothing
        </p>
        <p className="text-[16px] mr-[40px] cursor-pointer text-[#00000080]  hover:text-[#757575]">
          Shoes
        </p>
        <p className="text-[16px] mr-[40px] cursor-pointer text-[#00000080]  hover:text-[#757575]">
          Bags
        </p>
        <p className="text-[16px] mr-[40px] cursor-pointer text-[#00000080]  hover:text-[#757575]">
          Others
        </p>
      </Row>

      <Row className="flex-wrap gap-[1%] mt-[40px]">
        {products &&
          products.map((product) => (
            <div key={product.id} className="w-[24%] mb-6 shadow-lg rounded-sm shadow-[#00000027]">
              <ProductCard
                productId={product.id}
                title={product.title}
                img={product.img}
                price={product.price}
                categoryId={product.category}
                rating={product.rating}
              />
            </div>
          ))}
      </Row>
    </Container>
  );
};

export default BestSellerProducts;