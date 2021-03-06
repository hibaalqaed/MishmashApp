import React from "react";
import { Image } from "react-native";

// Styling
import { ListItem } from "native-base";
import { BranchItemStyled } from "../styles";

const BranchItem = ({ branch, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("BranchDetail", { branch: branch })}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: branch.image }}
      />
      <BranchItemStyled>{branch.name}</BranchItemStyled>
    </ListItem>
  );
};

export default BranchItem;
