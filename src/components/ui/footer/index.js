import React from "react";
import styled from "styled-components";
import SkewedContainer from "sc-react";
import GetStarted from "./GetStarted";
import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/svg/logo.svg";

const links = [
  {
    title: "platform",
    link: ["find work", "find talent", "categories", "about us"],
  },
  {
    title: "categories",
    link: ["data science", "IT & networking", "web & mobile"],
  },
  {
    title: "help",
    link: ["FAQ's", "contact us"],
  },
];

const Footer = () => {
  return (
    <Main>
      <SkewedContainer top="left" bgColor="#202229" noMargin skew={2}>
        <Container>
          <GetStarted />
          <MainContainer>
            <LeftSection>
              <div className="logo-section">
                <Link to="/">
                  <img src={LogoIcon} alt="logo-img" />
                </Link>
              </div>
              <div className="logo-details">
                <p>
                  We take complex hiring processes - and simplify them.
                  Connecting you to the world’s highly qualified talent pool.
                </p>
              </div>
              <div className="logo-buttons">
                <p>LINKS AND REDIRECTS</p>

                <div className="btn-containers">
                  <button>Hire now</button>
                  <button>Apply now</button>
                </div>
              </div>
            </LeftSection>
            <RightSection>
              <h1>Connecting the right people to the right businesses.</h1>
              <div className="footer-links-container">
                {links.map(({ title, link }, i) => (
                  <div className="footer-ech" key={i}>
                    <h3>{title}</h3>
                    <div className="links">
                      {link.map((link, i) => (
                        <li key={i}>
                          <Link to="/">{link}</Link>
                        </li>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RightSection>
          </MainContainer>
        </Container>
        <BottomSection>
          <p>All rights reserved by Zwilt</p>
          <div className="policies">
            <Link>Privacy Policy</Link>
            <Link>Terms and Conditions</Link>
          </div>
        </BottomSection>
      </SkewedContainer>
    </Main>
  );
};

const Main = styled.main`
  margin-top: 150px;
`;
const Container = styled.section`
  //   max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
`;
const MainContainer = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  padding-bottom: 200px;
  width: 100%;

  @media (max-width: 976px) {
    flex-direction: column;
    gap: 50px;
  }
`;
const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;

  @media (max-width: 976px) {
    width: 100%;
    align-items: center;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  .logo-section {
    width: 130px;

    & img {
      width: 100%;
    }
  }

  .logo-details {
    & p {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .logo-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;

    p {
      color: rgba(255, 255, 255, 0.4);
      font-size: 15px;
    }

    & .btn-containers {
      display: flex;
      gap: 15px;
      align-items: center;
      margin-top: 15px;

      @media (max-width: 480px) {
        flex-direction: column;
      }

      & button {
        border: none;
        background: #292b34;
        color: #fff;
        border-radius: 20px;
        padding: 15px 40px;
        font-size: 15px;
        cursor: pointer;
        transition: 0.3s;

        @media (max-width: 480px) {
          width: 100%;
        }

        &:hover {
          background: #ffbe2e;
        }
      }
    }
  }
`;
const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 60%;

  @media (max-width: 976px) {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }

  & h1 {
    font-family: switzerMedium;
    color: #fff;
    font-size: 35px;

    @media (max-width: 480px) {
      font-size: 25px;
    }
  }

  & .footer-links-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 50px;
    }

    & .footer-ech {
      display: flex;
      flex-direction: column;
      gap: 25px;

      & h3 {
        color: rgba(255, 255, 255, 0.5);
        font-size: 15px;
        font-family: switzerMedium;
        text-transform: uppercase;
      }

      & .links {
        display: flex;
        flex-direction: column;
        gap: 15px;

        & li a {
          position: relative;
          color: #fff;
          text-decoration: none;
          text-transform: capitalize;

          &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -3px;
            left: 0;
            background-color: #fff;
            transition: width 0.3s ease-in-out;
          }

          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }
`;
const BottomSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 15px 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.4);

  @media (max-width: 976px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    text-align: center;
  }

  & p {
    color: #fff;
    font-size: 15px;
  }
  & .policies {
    display: flex;
    align-items: center;
    gap: 15px;

    & a {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: underline;
      transition: 0.3s;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

export default Footer;
