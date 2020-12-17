import {
  AddItemButtonStyled,
  AddItemTextStyled,
  BranchImage,
  BranchItemViewStyled,
} from "../styles";
import { Body, Left, ListItem, Right, Text } from "native-base";
import React, { useState } from "react";

import NumericInput from "react-native-numeric-input";
import cartStore from "../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantitu] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToCart(newItem);
  };

  return (
    <ListItem>
      <Left>
        <BranchImage source={{ uri: product.image }} />
      </Left>

      <Body>
        <BranchItemViewStyled>
          <Text>{product.name}</Text>
          <Text note style={{ fontSize: 16, color: "#444" }}>
            {product.price} KD
          </Text>
        </BranchItemViewStyled>
      </Body>

      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantitu}
          totalHeight={40}
          totalWidth={70}
          // initValue={1}
        />
        <AddItemButtonStyled onPress={handleAdd}>
          <AddItemTextStyled>Add</AddItemTextStyled>
        </AddItemButtonStyled>
      </Right>
    </ListItem>
  );
};

export default ProductItem;
