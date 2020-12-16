import { observer } from "mobx-react";
import React from "react";

// Stores
import branchStore from "../stores/branchStore";
import productStore from "../stores/productStore";

// Styling
import {
  BranchDetailTitle,
  BranchDetailImage,
  BranchDetailWrapper,
} from "../styles";

import { Spinner } from "native-base";
import ProductList from "./ProductList";

const BranchDetail = ({ navigation, route }) => {
  const { branch } = route.params;

  if (branchStore.loading) return <Spinner />;

  const productsFromProductStore = branch.products.map((product) =>
    productStore.getProductById(product.id)
  );

  return (
    <>
      <BranchDetailWrapper>
        <BranchDetailImage source={{ uri: branch.image }} />
        <BranchDetailTitle>{branch.name}</BranchDetailTitle>
      </BranchDetailWrapper>
      <ProductList products={productsFromProductStore} />
    </>
  );
};

export default observer(BranchDetail);
