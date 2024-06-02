import styled from "styled-components";
import QuoteIcon from "../../assets/svg/quote.svg";
import HowIcon from "../../assets/svg/howIcon.svg";
import GrooveLogo from "../../assets/svg/groovehq.svg";
import GrooveProfileIcon from "../../assets/svg/groove_user_icon.svg";
import SkewedContainer from "sc-react";
import Button from "../Button";

const HowItWorks = () => {
  return (
    <Main>
      <SkewedContainer
        top="left"
        bottom="right"
        bgColor="#202229"
        noMargin
        skew={1.5}
      >
        <ImageContainer>
          <div>
            <img src={QuoteIcon} alt="" />
          </div>
        </ImageContainer>
        <Container>
          <LeftSection>
            <h1>
              How it worked for Jason <img src={HowIcon} alt="user-icon" /> at{" "}
              <br />
              <img src={GrooveLogo} alt="logo-icon" className="logo" />
            </h1>
            <p>
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
            </p>
            <div className="btn-container">
              <Button bg="#fff" color="#50589F" direction="left" />
              <Button bg="#fff" color="#50589F" direction="right" />
            </div>
          </LeftSection>
          <RightSection>
            <Profile>
              <img src={GrooveProfileIcon} alt="logo-icon" className="logo" />
              <div className="details">
                <h2>Jason Makki</h2>
                <p>Engineer at groove</p>
                <p>San Francisco</p>
              </div>
            </Profile>
            <p>
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since.Zwilt enabled us to
              deliver on time and they’ve been heavy hitters.
            </p>
          </RightSection>
        </Container>
      </SkewedContainer>
    </Main>
  );
};

const Main = styled.main`
  margin-top: 30px;
`;

const ImageContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: end;
  position: relative;

  & div {
    width: 100px;
    z-index: 1;

    & img {
      width: 100%;
    }
  }
`;

const Container = styled.section`
  position: relative;
  max-width: 1150px;
  width: 100%;
  margin: 100px auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    width: 100%;
    margin: auto;
    gap: 70px;
  }

  & .btn-container {
    display: flex;
    gap: 20px;
    margin-top: 20px;

    & button {
      padding: 10px 13px;
    }
  }
`;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }

  & h1 {
    font-family: switzerBold;
    color: #fff;

    @media (max-width: 480px) {
      font-size: 25px;
    }

    & img {
      width: 30px;
    }
    & .logo {
      width: 120px;
      margin-top: 10px;
    }
  }

  & p {
    color: #fff;
  }
`;

const RightSection = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }

  & p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    padding-bottom: 50px;
  }
`;

const Profile = styled.section`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  & img {
    width: 50px;
  }
  & .details {
    display: flex;
    flex-direction: column;
    & p {
      color: rgba(255, 255, 255, 0.5);
      font-size: 12px;
    }
    & h2 {
      font-family: switzerBold;
      color: #fff;
    }
  }
`;

export default HowItWorks;
