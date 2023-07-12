import React from 'react';
import styled from "styled-components";
import Model3 from "../images/model-3.jpg";
import ModelY from "../images/model-y.jpg";
import ModelS from "../images/model-s.jpg";
import ModelX from "../images/model-x.jpg";
import SolarPanel from "../images/solar-panel.jpg";
import SolarRoof from "../images/solar-roof.jpg";
import Accessoires from "../images/accessories.jpg";
import DownArrowImage from "../images/down-arrow.svg";
import Promovideotesla from "../images/promovideotesla.mp4"


function Home() {
  const modelsData = [
    {
      id: 'model3',
      title: 'Model 3',
      description: 'Leasing starting at $399/mo',
      leftbutton: 'Explore inventory',
      rightbutton: 'Custom Order',
      image: Model3
    },
    {
      id: 'modely',
      title: 'Model Y',
      description: 'Order Online for Touchless Delivery',
      leftbutton: 'Explore inventory',
      rightbutton: 'Custom Order',
      image: ModelY
    },
    {
      id: 'models',
      title: 'Model S',
      description: 'Order Online for Touchless Delivery',
      leftbutton: 'Explore inventory',
      rightbutton: 'Custom Order',
      image: ModelS
    },
    {
      id: 'modelx',
      title: 'Model X',
      description: 'Order Online for Touchless Delivery',
      leftbutton: 'Explore inventory',
      rightbutton: 'Custom Order',
      image: ModelX
    },
    {
      id: 'solarpanel',
      title: 'Solar Panels',
      description: 'Lowest Cost Solar Panels in America',
      leftbutton: 'Explore inventory',
      rightbutton: 'Custom Order',
      image: SolarPanel
    },
    {
      id: 'solarroof',
      title: 'Solar Roof',
      description: 'Produce Clean Energy From Your Roof',
      leftbutton: 'Explore inventory',
      rightbutton: 'Custom Order',
      image: SolarRoof
    },
    {
      id: 'accessoires',
      title: 'Accessoires',
      description: 'Produce Clean Energy From Your Roof',
      leftbutton: '',
      rightbutton: 'Shop now',
      image: Accessoires
    },
  ];

  return (
    <Container>
      <Wrap id='home'>
        <VideoBackground autoPlay loop muted>
          <source src={Promovideotesla} type="video/mp4" />
        </VideoBackground>
        <ItemText>
          <Title>
            <h1 className='frontpage'>Experience Tesla</h1>
          </Title>
          <Description>
            <p className='frontpage'>Schedule a Demo Drive Today</p>
          </Description>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <Button>Demo Drive</Button>
          </ButtonGroup>
          <DownArrow src={DownArrowImage} />
        </Buttons>
      </Wrap>

      {modelsData.map((model, index) => (
        <Wrap key={index} id={model.id} bgImage={model.image}>
          <ItemText>
            <Title>
              <h1>{model.title}</h1>
            </Title>
            <Description>
              <p>{model.description}</p>
            </Description>
          </ItemText>
          <Buttons>
            <ButtonGroup>
            {model.leftbutton && (
              <LeftButton>{model.leftbutton}</LeftButton>
            )}
            {model.rightbutton && (
              <RightButton>{model.rightbutton}</RightButton>
            )}
            </ButtonGroup>
            <DownArrow/>
          </Buttons>
        </Wrap>
      ))}
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
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
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

const RightButton = styled.div`
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

const LeftButton = styled(RightButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const Button = styled(RightButton)`
  background-color: transparent;
  color: white;
  border: 3px solid white;
`;

const DownArrow = styled.img`
  margin: auto;
  display: flex;
  align-items: center;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;