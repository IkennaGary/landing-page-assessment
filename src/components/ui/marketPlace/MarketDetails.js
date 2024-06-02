import styled from "styled-components";
import CategoryIcon from "../../../assets/svg/category-icon.svg";
import ProfileIcon from "../../../assets/svg/profile-icon.svg";
import SkillIcon from "../../../assets/svg/skills-icon.svg";
import WebflowIcon from "../../../assets/svg/webflowIcon.svg";
import DonotIcon from "../../../assets/svg/doNoIcon.svg";
import MagentoIcon from "../../../assets/svg/magentoIcon.svg";
import ShopifyIcon from "../../../assets/svg/shopifyIcon.svg";
import DataScienceIcon from "../../../assets/svg/dataScienceIcon.svg";
import CinemaIcon from "../../../assets/svg/cinema.svg";
import UxDesignerIcon from "../../../assets/svg/ux-designer.svg";
import GraphicsIcon from "../../../assets/svg/graphics_designer.svg";
import IllustrateIcon from "../../../assets/svg/illustrate.svg";
import UnrealIcon from "../../../assets/svg/unreal.svg";
import Button from "../../Button";

const creativeData = [
  {
    img: UxDesignerIcon,
    title: "UX Designer",
  },
  {
    img: GraphicsIcon,
    title: "Graphics Designer",
  },
  {
    img: IllustrateIcon,
    title: "Illustration Artist",
  },
  {
    img: UnrealIcon,
    title: "Unreal Engine",
  },
  {
    img: CinemaIcon,
    title: "Cinema 4D",
  },
];
const iTData = [
  {
    img: ShopifyIcon,
    title: "Shopify Developer",
  },
  {
    img: MagentoIcon,
    title: "Magento Developer",
  },
  {
    img: DataScienceIcon,
    title: "Data Scientist",
  },
  {
    img: WebflowIcon,
    title: "Webflow Developer",
  },
  {
    img: DonotIcon,
    title: "DotNet Developer",
  },
];

const MarketDetails = () => {
  return (
    <Main>
      <Container>
        <Section>
          <h2>Find Dev and IT professionals to scale your business.</h2>
          <SectionItem>
            <Item>
              <img src={SkillIcon} alt="skill-icon" />
              <p>989 Skills</p>
            </Item>
            <Item>
              <img src={CategoryIcon} alt="category-icon" />
              <p>45 Sub-Categories</p>
            </Item>
            <Item>
              <img src={ProfileIcon} alt="profile-icon" />
              <p>1011 Profiles</p>
            </Item>
          </SectionItem>
        </Section>
        <ExploreContainer>
          <p>IT & Development</p>
          <Thumbnails>
            <div className="thumbnail-container">
              {iTData.map(({ img, title }, i) => (
                <Thumbnail key={i}>
                  <div className="img_container">
                    <img src={img} />
                  </div>
                  {title.split(" ").map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                </Thumbnail>
              ))}
              <Button bg="#f6f6f6" color="#000" direction="right" />
            </div>
          </Thumbnails>
        </ExploreContainer>
      </Container>
      <Container>
        <Section>
          <h2>Explore Creative individuals with a keen eye for details.</h2>
          <SectionItem>
            <Item>
              <img src={SkillIcon} alt="skill-icon" />
              <p>989 Skills</p>
            </Item>
            <Item>
              <img src={CategoryIcon} alt="category-icon" />
              <p>45 Sub-Categories</p>
            </Item>
            <Item>
              <img src={ProfileIcon} alt="profile-icon" />
              <p>1011 Profiles</p>
            </Item>
          </SectionItem>
        </Section>
        <ExploreContainer>
          <p>Design & Creative</p>
          <Thumbnails>
            <div className="thumbnail-container">
              <Button bg="#f6f6f6" color="#000" direction="left" />
              {creativeData.map(({ img, title }, i) => (
                <Thumbnail key={i}>
                  <div className="img_container">
                    <img src={img} />
                  </div>
                  {title.split(" ").map((word, index) => (
                    <p key={index}>{word}</p>
                  ))}
                </Thumbnail>
              ))}
            </div>
          </Thumbnails>
        </ExploreContainer>
      </Container>
      <BottomContainer>
        <div className="explore-container">
          <Button bg="#202229" color="#fff" direction="right" />
          <p>Explore More</p>
        </div>
        <div className="explore-more">
          <p>
            <span>30 more </span>to explore
          </p>
        </div>
      </BottomContainer>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: 976px) {
    max-width: 600px;
    width: 100%;
    margin: auto;
    gap: 50px;
  }
`;

const Container = styled.section`
  display: flex;
  gap: 80px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 976px) {
    margin: auto;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 30%;

  @media (max-width: 976px) {
    width: 100%;
    margin: auto;
    text-align: center;
  }

  & h2 {
    font-size: 18px;
  }
`;
const SectionItem = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 976px) {
    justify-content: space-around;
  }
`;

const Item = styled.section`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ExploreContainer = styled.section`
  background: #fff;
  border-radius: 20px;
  padding: 25px 15px;

  & .thumbnail-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    margin-top: 20px;

    @media (max-width: 480px) {
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
    }

    & button {
      width: 60px;
      height: 60px;
    }
  }
`;
const Thumbnails = styled.section`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Thumbnail = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100px;
  text-align: center;
  align-items: center;

  & .img_container {
    width: 60px;
    height: 60px;
    padding: 15px;
    border-radius: 50%;
    background: #f6f6f6;
    display: flex;
    justify-content: center;

    & img {
      width: 100%;
    }
  }
  & p {
    font-size: 12px;
    line-height: 0px;
    font-family: switzerMedium;
  }
`;

const BottomContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 80px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  & .explore-container {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 30%;

    @media (max-width: 480px) {
      width: 100%;
      justify-content: center;
      text-align: center;
    }

    & button {
      padding: 12px 15px;
    }
    & p {
      font-family: switzerMedium;
      font-size: 15px;
    }
  }

  & .explore-more {
    width: 50%;

    & p {
      font-size: 17px;
      color: rgba(0, 0, 0, 0.6);

      & span {
        font-family: switzerBold;
        color: #202229;
      }
    }
  }
`;
export default MarketDetails;
