import { observer } from "mobx-react";
import React from "react";

// Components
import BranchItem from "./BranchItem";

// Stores
import branchStore from "../stores/BranchStore";

import { Content, List } from "native-base";

function BranchList() {
  if (branchStore.loading) return <Spinner />;
  const branchList = branchStore.branches.map((branch) => (
    <BranchItem branch={branch} key={branch.id} />
  ));
  return (
    <Content>
      <List>{branchList}</List>
    </Content>
  );
}

export default observer(BranchList);
