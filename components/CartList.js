import React from "react";
import { List, Spinner } from "native-base";
import { observer } from "mobx-react";

// Stores
import productStore from "../stores/productStore";
import cartStore from "../stores/cartStore";

// Components
import CartItem from "./CartItem";

const CartList = () => {
  if (productStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  return <List>{cartList}</List>;
};

export default observer(CartList);
