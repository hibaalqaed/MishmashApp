import { observer } from "mobx-react";
import React from "react";

// Components
import BranchItem from "./BranchItem";

// Stores
import branchStore from "../stores/branchStore";

import { Content, List } from "native-base";
import { Spinner } from "native-base";

function BranchList({ navigation }) {
  if (branchStore.loading) return <Spinner />;
  const branchList = branchStore.branches.map((branch) => (
    <BranchItem navigation={navigation} branch={branch} key={branch.id} />
  ));
  return (
    <Content>
      <List>{branchList}</List>
    </Content>
  );
}

export default observer(BranchList);
