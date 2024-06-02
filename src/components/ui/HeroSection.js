import React from "react";
import styled from "styled-components";
import HeroIcon from "../../assets/svg/hero_icon.svg";
import Button from "../Button";

const HeroSection = () => {
  return (
    <Section>
      <Text>
        <h1>
          Finding the right fit <img src={HeroIcon} alt="user-icon" /> has never
          been easier
        </h1>
        <p>
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
      </Text>
      <Search>
        <label htmlFor="search">Looking for</label>
        <input type="text" placeholder="design |" />
        <Button bg="#FFBE2E" color="#000" direction="right" />
      </Search>
    </Section>
  );
};

const Section = styled.section`
  max-width: 550px;
  width: 100%;
  margin: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
`;

const Text = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & h1 {
    font-size: 32px;
    line-height: 1.2;
    font-family: "switzerBold";
    font-weight: 900;

    & img {
      width: 40px;
    }

    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
  & p {
    font-size: 15px;
  }
`;

const Search = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;
  & input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #d1d1d1;
    position: relative;
    outline: none;
    padding: 0 20px;
    font-size: 14px;
    padding-left: 85px;
  }

  & button {
    position: absolute;
    right: 7px;
    padding: 10px 12px;
  }

  & label {
    position: absolute;
    z-index: 1;
    left: 10px;
    font-size: 12px;
  }
`;

export default HeroSection;
