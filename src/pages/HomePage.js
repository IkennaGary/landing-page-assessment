import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/ui/HeroSection";
import WhatWeDo from "../components/ui/WhatWeDo";
import MarketPlace from "../components/ui/marketPlace";
import HowItWorks from "../components/ui/HowItWorks";
import EnsureSection from "../components/ui/EnsureSection";
import JourneySection from "../components/ui/JourneySection";
import WhyChooseZwilt from "../components/ui/whychoosezwilt";
import FrequentlyAskedQuestions from "../components/ui/FrequentlyAskedQuestions";
import Footer from "../components/footer";
import styled from "styled-components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <HeroSection />
        <WhatWeDo />
        <MarketPlace />
        <HowItWorks />
        <EnsureSection />
        <JourneySection />
        <WhyChooseZwilt />
        <FrequentlyAskedQuestions />
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.section`
  margin-top: 150px;
`;

export default HomePage;
