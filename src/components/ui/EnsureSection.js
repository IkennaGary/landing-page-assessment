import styled from "styled-components";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Resume Screening",
    description:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    id: 2,
    title: "Videos Interview",
    description:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    id: 3,
    title: "Technical Evaluation",
    description:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    id: 4,
    title: "Application Review",
    description:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
  {
    id: 5,
    title: "Let's get to work",
    description:
      "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
  },
];

const EnsureSection = () => {
  const [activeStep, setActiveStep] = useState();

  const handleToggle = (id) => {
    setActiveStep((prevStep) => (prevStep === id ? null : id));
  };
  return (
    <Main>
      <Container>
        <Header>
          <h1>How we ensure you're in good hands.</h1>
          <p>
            With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days.
          </p>
        </Header>
        <div className="container">
          {data.map(({ id, title, description }) => (
            <Section
              onClick={() => handleToggle(id)}
              key={id}
              activeStep={activeStep}
              id={id}
            >
              <div className="section-top">
                <div className="player-container">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 15 17"
                    fill={activeStep === id ? "#fff" : "#000"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0.822115C0 0.368429 0.391439 1.52588e-05 0.873481 1.52588e-05H14.96C15.4421 1.52588e-05 15.8335 0.368429 15.8335 0.822115V14.08C15.8333 14.298 15.7412 14.507 15.5774 14.6611C15.4136 14.8152 15.1916 14.9019 14.96 14.9021H0.873481C0.641891 14.9019 0.419853 14.8152 0.256094 14.6611C0.0923348 14.507 0.000232871 14.298 0 14.08V0.822115ZM6.70461 4.48307C6.65167 4.44982 6.59014 4.43072 6.52657 4.42778C6.46301 4.42485 6.39979 4.43819 6.34364 4.4664C6.2875 4.4946 6.24053 4.53661 6.20775 4.58795C6.17496 4.63929 6.15759 4.69803 6.15747 4.75793V10.1442C6.15759 10.2041 6.17496 10.2629 6.20775 10.3142C6.24053 10.3655 6.2875 10.4075 6.34364 10.4358C6.39979 10.464 6.46301 10.4773 6.52657 10.4744C6.59014 10.4714 6.65167 10.4523 6.70461 10.4191L10.9964 7.72676C11.0446 7.69653 11.0842 7.65555 11.1116 7.60745C11.139 7.55935 11.1533 7.50564 11.1533 7.45107C11.1533 7.39651 11.139 7.34279 11.1116 7.29469C11.0842 7.2466 11.0446 7.20561 10.9964 7.17538L6.70373 4.48307H6.70461Z"
                      fill={activeStep === id ? "#fff" : "#000"}
                    />
                  </svg>
                </div>
                <div className="player-text">
                  <p>
                    <span>Step {id}: </span>
                    {title}
                  </p>
                </div>
              </div>
              <div className="section-bottom">
                <p>{description}</p>
              </div>
            </Section>
          ))}
        </div>
      </Container>
    </Main>
  );
};

const Main = styled.section`
  padding: 150px 0;
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 50px 0;
  }
`;

const Container = styled.section`
  width: 500px;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 100%;
  }

  & .container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    text-align: center;
  }
  & h1 {
    font-family: switzerBold;
    font-size: 40px;

    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
`;
const Section = styled.section`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  padding: 15px;
  cursor: pointer;
  height: ${({ activeStep, id }) => (activeStep === id ? "160px" : "60px")};
  overflow: hidden;

  & .section-top {
    display: flex;
    align-items: center;
    gap: 15px;

    & .player-container {
      width: 40px;
      height: 40px;
      padding: 15px;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      background: ${({ activeStep, id }) =>
        activeStep === id ? " #8ba4fd" : " #ececec"};

      &active {
        background: #8ba4fd;
      }
    }

    & .player-text p {
      font-size: 15px;
      & span {
        font-family: switzerBold;
      }
    }
  }
  & .section-bottom {
    font-size: 15px;
    padding: 15px 0;
  }
`;
export default EnsureSection;
