import { Content, List } from "native-base";
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const productlist = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return (
    <Content>
      <List>{productlist}</List>
    </Content>
  );
};

export default ProductList;
