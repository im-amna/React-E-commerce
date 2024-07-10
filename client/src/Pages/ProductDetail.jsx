import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/common/Button";
import Container from "../components/common/Container";
import Layout from "../components/common/Layout";
import Row from "../components/common/Row";
import { categories, products } from "../data/data";
import Qtycontainer from "../components/common/Qtycontainer";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (products) {
      const product = products.find((p) => p.id === id || p.id === Number(id));
      setProduct(product);
    }

    const categoryId = product.category;

    if (categories) {
      const category = categories.find(
        (category) => category.id === categoryId
      );
      setCategory(category);
    }
  }, [id, product.category]);

  
  return (
    <Layout>
      <Container className="my-[41spx]">
        <Row className="justify-between">
          <Row className="w-[47%]">
            <img
              className="w-full object-cover h-[80vh]"
              src={product.img}
              alt="product"
            />
          </Row>
          <Row className="flex-col w-[47%]">
            <h1 className="text-[30px] text-slate-700 font-semibold mt-[70px]">
              {product.title}
            </h1>
            <Row className="gap-[20px] mb-[10px]">
              <p className="text-[18px] text-black font-medium w-[15%] ">
                Rating:
              </p>
              <p className="text-[18px] text-black ">{product.rating}</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[15%] ">
                Price:
              </p>
              <p className="text-[18px] text-black ">{product.price}</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[15%] ">
                Category:
              </p>
              <p className="text-[18px] text-black ">
                {category && category.name}
              </p>
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
        <div className="w-full mt-[40px]"><Qtycontainer/></div>
           
             
           
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
