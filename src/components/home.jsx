import React from 'react';
import styled from "styled-components";
import Model3 from "../images/model-3.jpg";
import ModelY from "../images/model-y.jpg";
import ModelS from "../images/model-s.jpg";
import ModelX from "../images/model-x.jpg";
import SolarPanel from "../images/solar-panel.jpg";
import SolarRoof from "../images/solar-roof.jpg";
import Accessories from "../images/accessories.jpg";
import DownArrowImage from "../images/down-arrow.svg";


function Home() {
  return (
    <Container>
      <Wrap bgImage={Model3}>
        <ItemText>
          <Title>
            <h1>Model 3</h1>
          </Title>
          <Description>
            <p>Leasing starting at $399/mo</p>
          </Description>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>Custom Order</LeftButton>
            <RightButton>Demo drive</RightButton>
          </ButtonGroup>
          <DownArrow src={DownArrowImage} />
        </Buttons>
      </Wrap>

      <Wrap bgImage={ModelY}>
        <ItemText>
          <Title>
            <h1>Model Y</h1>
          </Title>
          <Description>
            <p>Order Online for Touchless Delivery</p>
          </Description>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>Custom Order</LeftButton>
            <RightButton>Existing Inventory</RightButton>
          </ButtonGroup>
        </Buttons>
      </Wrap>

      <Wrap bgImage={ModelS}>
        <ItemText>
          <Title>
            <h1>Model S</h1>
          </Title>
          <Description>
            <p>Order Online for Touchless Delivery</p>
          </Description>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>Custom Order</LeftButton>
            <RightButton>Existing Inventory</RightButton>
          </ButtonGroup>
        </Buttons>
      </Wrap>

      <Wrap bgImage={ModelX}>
        <ItemText>
          <Title>
            <h1>Model X</h1>
          </Title>
          <Description>
            <p>Order Online for Touchless Delivery</p>
          </Description>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>Custom Order</LeftButton>
            <RightButton>Existing Inventory</RightButton>
          </ButtonGroup>
        </Buttons>
      </Wrap>

      <Wrap bgImage={SolarPanel}>
        <ItemText>
          <Title>
            <h1>Solar Panels</h1>
          </Title>
          <Description>
            <p>Lowest Cost Solar Panels in America</p>
          </Description>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>Order Now</LeftButton>
            <RightButton>Learn More</RightButton>
          </ButtonGroup>
        </Buttons>
      </Wrap>

      <Wrap bgImage={SolarRoof}>
        <ItemText>
          <Title>
            <h1>Solar Roof</h1>
          </Title>
          <Description>
            <p>Produce Clean Energy From Your Roof</p>
          </Description>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>Order Now</LeftButton>
            <RightButton>Learn More</RightButton>
          </ButtonGroup>
        </Buttons>
      </Wrap>

      <Wrap bgImage={Accessories}>
        <ItemText>
          <Title>
            <h1>Accessories</h1>
          </Title>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>Shop Now</LeftButton>
          </ButtonGroup>
        </Buttons>
      </Wrap>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const Wrap = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Description = styled.div`
  font-size: 17px;
  padding-top: 5px;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  border: none;
  font-size: 15px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;