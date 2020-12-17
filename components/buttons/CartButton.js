import { CartButtonStyled, CartTextStyled } from "../../styles";

import { Alert } from "react-native";
import { Button } from "native-base";
import React from "react";
import authStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("hi");
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <Button transparent onPress={handlePress} light>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
      {/* <CartTextStyled>{cartStore.totalPrice} KD</CartTextStyled> */}
    </Button>
  );
};

export default observer(CartButton);
