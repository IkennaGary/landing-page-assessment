import React, { useState } from "react";
import styled from "styled-components";

const WhatWeDo = () => {
  const [isClicked, setIsClicked] = useState(false);

  const devItems = [
    "Python Developer",
    "Data Scientist",
    "Shopify Developer",
    "Shopify Devoloper",
    "Front End Developer",
    "Python Developer",
    "MERN Stack Developer",
    "Shopify Developer",
    "Front End Developer",
    "Full Stack Developer",
    "Python Developer",
    "Data Scientist",
  ];

  const creativeItems = [
    "Web Designer",
    "Web Developer",
    "Web Designer",
    "Web Designer",
    "Web Developer",
    "Web Designer",
    "Web Designer",
    "Web Developer",
    "Web Designer",
    "Web Designer",
    "Web Developer",
    "Web Designer",
  ];

  const toggleSection = () => {
    setIsClicked(!isClicked);
  };
  return (
    <Container>
      <Header>
        <div className={!isClicked ? "show" : ""} onClick={toggleSection}>
          <p>IT & Development</p>
        </div>
        <div className={isClicked ? "show" : ""} onClick={toggleSection}>
          <p>Design and Creative</p>
        </div>
      </Header>
      <Items>
        {isClicked
          ? creativeItems.map((item, i) => <p key={i}>{item}</p>)
          : devItems.map((item, i) => <p key={i}>{item}</p>)}
      </Items>
    </Container>
  );
};

const Container = styled.section`
  max-width: 800px;
  margin: 0 auto;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 15px 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
const Header = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
  width: auto;
  background: #e8e8e8;
  border-radius: 12px;

  & div {
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;

    &.show {
      background: #c7f4c2;
    }
    & p {
      font-size: 14px;
      font-family: switzerMedium;

      @media (max-width: 480px) {
        font-size: 12px;
        text-align: center;
      }
    }
  }
`;
const Items = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  padding: 15px 50px;
  background: #f8f8f8;
  border-radius: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 15px 0px;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }

  & p {
    font-size: 14px;
    font-family: switzerMedium;
    width: 30%;

    @media (max-width: 480px) {
      width: 100px;
      font-size: 13px;
      line-height: 18px;
    }
  }
`;
export default WhatWeDo;
