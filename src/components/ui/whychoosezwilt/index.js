import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselImg1 from "../../../assets/images/carousel-img1.png";
import CarouselImg2 from "../../../assets/images/carousel-img2.png";
import CarouselImg3 from "../../../assets/images/carousel-img3.png";

const data = [
  {
    title: "Onboard without the risk.",
    list: [
      "We pick the best for you to select.",
      " Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    image: CarouselImg1,
    color: "#50589f",
  },
  {
    title: "An Open book.",
    list: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ],
    image: CarouselImg2,
    color: "#FFBE2E",
  },
  {
    title: "Stay in the loop.",
    list: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ],
    image: CarouselImg3,
    color: "#C7F4C2",
  },
];

const WhyChooseZwilt = () => {
  return (
    <Main>
      <LeftContainer>
        <h2>Why Choose Zwilt?</h2>
        <p>
          We take complex hiring processes - and simplify them. Connecting you
          to the world’s highly qualified talent pool.
        </p>
      </LeftContainer>
      <RightContainer>
        <Carousel
          autoPlay
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          showThumbs={false}
        >
          {data.map((data, index) => (
            <CarouselItem key={index} data={data} />
          ))}
        </Carousel>
      </RightContainer>
    </Main>
  );
};

const Main = styled.main`
  max-width: 1150px;
  width: 100%;
  margin: 150px auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 986px) {
    max-width: 800px;
    width: 100%;
    flex-direction: column;
    gap: 40px;
  }
`;

const LeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;

  @media (max-width: 986px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  & h2 {
    font-family: switzerBold;
    font-size: 40px;

    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
`;

const RightContainer = styled.section`
  width: 65%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 976px) {
    width: 100%;
  }
`;

export default WhyChooseZwilt;
