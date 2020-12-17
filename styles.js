import { Button, Icon, Text } from "native-base";

import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1px;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1px;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const BranchItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const BranchItemViewStyled = styled.View`
  flex-direction: column;
`;

export const BranchImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const BranchDetailWrapper = styled.View`
  margin-top: 10px;
`;

export const BranchDetailImage = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: auto;
  margin-left: auto;
`;

export const BranchDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
  margin-right: auto;
  margin-left: auto;
`;

export const TotalPrice = styled.Text`
  /* ${(props) => props.theme.pink}; */
  color: black;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(Icon)`
  color: black;
  margin-right: 10px;
`;

export const CartTextStyled = styled(Text)`
  /* ${(props) => props.theme.backgroundColor}; */
  color: black;
  font-size: 20px;
`;

export const AddItemButtonStyled = styled(Button)`
  height: 30px;
  width: 70px;
  margin-top: 10;
`;

export const AddItemTextStyled = styled.Text`
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const TrashIcon = styled(Icon)`
  color: red;
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: purple;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthContainer = styled.View`
  flex: 1px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  // ${(props) => props.theme.backgroundColor};
  background-color: lightpink;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  // ${(props) => props.theme.pink};
  color: orangered;
  font-size: 24px;
  margin-bottom: 20px;
  // ${(props) => props.theme.pink};
  border-bottom-color: orangered;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  // ${(props) => props.theme.pink};
  color: orangered;
  //  ${(props) => props.theme.pink};
  border-bottom-color: orangered;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  // ${(props) => props.theme.pink};
  background-color: orangered;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  //  ${(props) => props.theme.pink};
  color: orangered;
  margin-top: 15px;
`;
