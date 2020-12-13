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

const Home = () => {
  return (
    <>
      <HomeBackground source={mishmashimg}>
        <OverLayContainer>
          <TopStyling>
            <Title>Mishmash Restaurant</Title>
          </TopStyling>
          <BottomStyling>
            <ButtonStyled
              onPress={() => alert("Take me to the list of bakeries")}
            >
              Click here to skip
            </ButtonStyled>
          </BottomStyling>
        </OverLayContainer>
      </HomeBackground>
    </>
  );
};

export default Home;
