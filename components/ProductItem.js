import { List, ListItem } from "native-base";
import React from "react";
import { Image } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: product.image }}
      />
      <List>{product.name}</List>
    </ListItem>
  );
};

export default ProductItem;
