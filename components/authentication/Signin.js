import React, { useState } from "react";
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthTextInput,
  AuthTitle,
  AuthOther,
} from "../../styles";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("BranchList");
  };

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        Click here to register!
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
