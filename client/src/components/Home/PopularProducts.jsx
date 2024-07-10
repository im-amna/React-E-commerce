import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/data";
import axios from 'axios'
import Container from "../common/Container";
import Row from "../common/Row";
import client from '../../apis/index';
import apiEndpoints from "../../apis/endpoint";

const PopularProducts = () => {
  const[products,setProducts] =useState([]);
  const getData = async () => {
    try{
      const response = await client.get (apiEndpoints.products());
      setProducts(response.data.docs);
    }catch (error) {
      console.log('Error',error);
    }
  };
  useEffect(() => {
    getData();
  },[]);
  return (
    <Container>
      <Row className="justify-center my-[20px] uppercase">
        <h1 className="text-[30px] font-semibold text-[#1e2832]">
          {" "}
          Popular Products
        </h1>
      </Row>
      <Row className="gap-[24px]">
        <div className="h-[648px] w-[52px] relative">
          <p className="text-[34px] h-full w-[648px] text-black -rotate-90  text-center -z-[1]">
            Explore new and popular styles
          </p>
        </div>
        <img
          className="h-[648px] w-[648px]"
          src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="top popular"
        />

        <Row className=" flex-wrap w-1/2 gap-[24px] ">
          {products &&
            products.slice(0, 4).map((item) => (
              <Link
                to={`/product-detail/${item.id}`}
                className="w-[46%] h-[312px]"
              >
                <img
                  src={item.img}
                  alt="top popular"
                  className="w-[312px] h-full object-cover"
                />
              </Link>
            ))}
        </Row>
      </Row>
    </Container>
  );
};

export default PopularProducts;
