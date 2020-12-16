import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CartButtonStyled, CartTextStyled } from "../../styles";
import { Button } from "native-base";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light onPress={() => navigation.navigate("Cart")}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
    </Button>
  );
};

export default observer(CartButton);
