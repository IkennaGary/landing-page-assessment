import styled from "styled-components";
import SkewedContainer from "sc-react";
import Button from "../Button";
import UsersJourney from "../../assets/svg/users-jouney.svg";
import UsersJourney2 from "../../assets/svg/user-journey2.svg";
import UsersJourney3 from "../../assets/svg/user-journey3.svg";

const JourneySection = () => {
  return (
    <Main>
      <h1>Start your journey today.</h1>
      <SkewedContainer
        top="left"
        bottom="right"
        bgColor="#EDEFFF"
        noMargin
        skew={2}
      >
        <Container>
          <LeftContainer>
            <FadingText color="#a387d1">1</FadingText>
            <TextsContainer>
              <h2>Find your next star performer.</h2>
              <p>
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
              <div className="btn-container">
                <Button bg="#202229" color="#fff" direction="right" />
                <p>Join Now</p>
              </div>
            </TextsContainer>
          </LeftContainer>
          <RightContainer>
            <img src={UsersJourney} alt="users" />
          </RightContainer>
        </Container>
      </SkewedContainer>
      <SkewedContainer
        top="left"
        bottom="right"
        bgColor="#FFF7E1"
        noMargin
        skew={2}
      >
        <Container>
          <LeftContainer>
            <FadingText color="#FFBE2E">2</FadingText>
            <TextsContainer>
              <h2>Find your next star performer.</h2>
              <p>
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
              <div className="btn-container">
                <Button bg="#202229" color="#fff" direction="right" />
                <p>Join Now</p>
              </div>
            </TextsContainer>
          </LeftContainer>
          <RightContainer>
            <img src={UsersJourney2} alt="users" />
          </RightContainer>
        </Container>
      </SkewedContainer>
      <SkewedContainer
        top="left"
        bottom="right"
        bgColor="#EDEFFF"
        noMargin
        skew={2}
      >
        <Container>
          <LeftContainer>
            <FadingText color="#000000">3</FadingText>
            <TextsContainer>
              <h2>Find your next star performer.</h2>
              <p>
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
              <div className="btn-container">
                <Button bg="#202229" color="#fff" direction="right" />
                <p>Join Now</p>
              </div>
            </TextsContainer>
          </LeftContainer>
          <RightContainer>
            <img src={UsersJourney3} alt="users" />
          </RightContainer>
        </Container>
      </SkewedContainer>
    </Main>
  );
};

const Main = styled.section`
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;

  & h1 {
    font-family: switzerBold;
    font-size: 50px;

    @media (max-width: 768px) {
      text-align: center;
    }
    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
`;

const Container = styled.section`
  padding: 0 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const LeftContainer = styled.section`
  width: 40%;
  display: flex;
  gap: 15px;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

const FadingText = styled.section`
  font-size: 100px;
  font-weight: bold;
  background: -webkit-linear-gradient(top, #a387d1, transparent);
  background: ${({ color }) =>
    ` -webkit-linear-gradient(top, ${color}, transparent)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 60px;
  }
`;
const TextsContainer = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  & h2 {
    font-size: 35px;

    @media (max-width: 480px) {
      font-size: 25px;
      text-align: center;
    }
  }

  & .btn-container {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;

    & button {
      padding: 10px 15px;
    }
  }
`;

const RightContainer = styled.section`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 400px;
  }
`;

export default JourneySection;
