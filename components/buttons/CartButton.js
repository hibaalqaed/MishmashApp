import React from "react";
import { useNavigation } from "@react-navigation/native";
import CartButtonStyled from "../../styles";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartButtonStyled
      type="MaterialCommunityIcons"
      name="cart"
      onPress={() => navigation.navigate("Cart")}
    />
  );
};

export default CartButton;
