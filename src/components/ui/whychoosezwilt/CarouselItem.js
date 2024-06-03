import styled from "styled-components";

const CarouselItem = ({ data }) => {
  const { title, list, image, color } = data;
  return (
    <>
      <Container>
        <LeftContainer color={color}>
          <h2>{title}</h2>
          <ul>
            {list.map((list, index) => (
              <li key={index}>
                <span></span>
                {list}
              </li>
            ))}
          </ul>
        </LeftContainer>
        <RightContainer>
          <img src={image} alt={`images`} />
        </RightContainer>
      </Container>
    </>
  );
};

const Container = styled.section`
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  gap; 20px;
  justify-content: space-around;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }

  & h2 {
    font-family: switzerBold;
    font-size: 40px;
    text-align: initial;

    @media (max-width: 768px) {
      text-align: center;
    }
    @media (max-width: 480px) {
      font-size: 25px;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & li {
      display: flex;
      gap: 10px;
      align-items: center;
      text-align: initial;
    }
    & span {
      display: block;
      width: 12px;
      height: 5px;
      border-radius: 5px;
      background: #50589f;
      background: ${({ color }) => color};
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
  }
`;

const RightContainer = styled.section`
  width: 55%;

  @media (max-width: 768px) {
    width: 100%;
  }

  & img {
    width: 100%;
  }
`;

export default CarouselItem;
