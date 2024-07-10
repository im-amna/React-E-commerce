import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/data";
import Row from "./Row";

const ProductCard = ({ productId, title, img, price, categoryId, rating }) => {
  return (
    <Link className="w-full shadow p-5" to={`/product-detail/${productId}`}>
      <img src={img} alt="ProdCard" className="w-full object-cover h-[400px]" />
      <Row className="px-[10px]">
        <h6 className="text-black text-[16px] font-semibold mt-[18px]">
          {title}
        </h6>
      </Row>
      <Row className="justify-between mt-[16px] px[10px] mb-[10px]">
        <p className="text-[16px] text-[#00000080]">{category}</p>
        <p className="text-[16px] text-[#00000080] font-semibold">{price}</p>
      </Row>
      <p className="text-[16px] text-[#00000080]">
        Total number of reviews: {rating}
      </p>
    </Link>
  );
};

export default ProductCard;
