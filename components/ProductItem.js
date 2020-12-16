import { Button, Left, ListItem, Right, Text } from "native-base";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { BranchItemStyled, BranchImage } from "../styles";
import cartStore from "../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantitu] = useState;

  const handleAdd = () => {
    const newItem = { quantity, cookieId: cookie.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToCart(newItem);
  };

  return (
    <ListItem>
      <Left>
        <BranchImage source={{ uri: product.image }} />
        <BranchItemStyled>
          {product.name}
          <Text note style={{ fontSize: 16, color: "#444" }}>
            {product.price} KD
          </Text>
        </BranchItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantitu}
          totalHeight={40}
          totalWidth={70}
          initValue={1}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default ProductItem;
