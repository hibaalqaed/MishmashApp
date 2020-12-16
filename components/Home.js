import React from "react";

import mishmashimg from "../media/mishmash-img.jpg";

// Styling
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <>
      <HomeBackground source={mishmashimg}>
        <OverLayContainer>
          <TopStyling>
            <Title>Mishmash Restaurant</Title>
          </TopStyling>
          <BottomStyling>
            <ButtonStyled onPress={() => navigation.navigate("BranchList")}>
              Click here to skip
            </ButtonStyled>
          </BottomStyling>
        </OverLayContainer>
      </HomeBackground>
    </>
  );
};

export default Home;
