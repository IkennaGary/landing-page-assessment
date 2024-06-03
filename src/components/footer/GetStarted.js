import styled from "styled-components";
import Button from "../Button";
import BackgroundImage from "../../assets/svg/skew-inner-footer.svg";

const GetStarted = () => {
  return (
    <Container>
      <Head>
        <h1>Need a job done, and done well? Get started</h1>
        <Button bg="#000" color="#fff" direction="down" />
      </Head>
    </Container>
  );
};

const Container = styled.section`
  background-size: contain;
  background: url(${BackgroundImage});
  background-repeat: no-repeat;
  height: 480px;
  width: 100%;
  padding: 20px;
`;

const Head = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100%;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  & h1 {
    font-size: 40px;
    font-family: switzerBold;
    color: #fff;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  & button {
    padding: 13px 15px;
  }
`;

export default GetStarted;
