import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";
import BranchList from "../BranchList";
import BranchDetail from "../BranchDetail";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

function RootNavigator() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />

      <Screen
        name="BranchList"
        component={BranchList}
        options={{
          title: "Choose a Branch",
          headerRight: () => <CartButton />,
        }}
      />

      <Screen
        name="BranchDetail"
        component={BranchDetail}
        options={({ route }) => {
          const { branch } = route.params;
          return {
            title: branch.name,
            headerRight: () => <CartButton />,
          };
        }}
      />

      <Screen name="Cart" component={CartList} />

      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />

      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}

export default RootNavigator;
