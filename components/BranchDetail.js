import { observer } from "mobx-react";
import React from "react";

// Stores
import branchStore from "../stores/BranchStore";

// Styling
import {
  BranchDetailTitle,
  BranchDetailImage,
  BranchDetailWrapper,
} from "../styles";

const BranchDetail = () => {
  const branch = branchStore.branches[0];
  return (
    <BranchDetailWrapper>
      <BranchDetailImage source={{ uri: branch.image }} />
      <BranchDetailTitle>{branch.name}</BranchDetailTitle>
    </BranchDetailWrapper>
  );
};

export default observer(BranchDetail);
