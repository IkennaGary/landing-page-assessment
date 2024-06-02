import styled from "styled-components";
import SkewMarketImg from "../../../assets/svg/skew.svg";
import SkewedContainer from "sc-react";
import MarketDetails from "./MarketDetails";

const MarketPlace = () => {
  return (
    <>
      <SkewImage>
        <img src={SkewMarketImg} alt="skew" />
      </SkewImage>
      <SkewedContainer
        top="left"
        bottom="right"
        bgColor="#EDEFFF"
        noMargin
        skew={2}
      >
        <Container>
          <Head>
            <h1>
              Your one-stop marketplace for finding the talent your business
              needs.
            </h1>
          </Head>
          <Body>
            <MarketDetails />
          </Body>
        </Container>
      </SkewedContainer>
    </>
  );
};

const SkewImage = styled.section`
  margin-top: 50px;
  width: 100%;

  & img {
    width: 100%;
  }
`;
const Container = styled.section`
  position: relative;
  padding: 20px;
  padding-bottom: 50px;
`;
const Head = styled.section`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px;

  & h1 {
    line-height: 1.2;
    font-family: "switzerBold";
    font-weight: 900;

    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
`;
const Body = styled.section`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  max-width: 1150px;
  width: 100%;
  margin: 30px auto;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export default MarketPlace;
