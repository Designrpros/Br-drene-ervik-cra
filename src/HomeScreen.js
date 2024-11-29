import React from "react";
import styled from "styled-components";
import { FaHammer, FaTools, FaBuilding } from "react-icons/fa"; // Icons for the service cards
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images for react-slick slider
import Logo from "./images/Logo.png";
import CarpenterBG1 from "./images/CarpenterBG1.jpg";
import CarpenterBG2 from "./images/CarpenterBG2.jpg";
import CarpenterBG3 from "./images/CarpenterBG3.jpg";

// Images for react-slick
const images = [
  { src: CarpenterBG1, alt: "Background 1" },
  { src: CarpenterBG2, alt: "Background 2" },
  { src: CarpenterBG3, alt: "Background 3" },
];

// Styled components for layout and design
const HeroContainer = styled.div`
  position: relative;
  height: 50vh; /* Slider section takes 50% of the screen height */
  width: 100%;
  overflow: hidden;
`;

const SwiperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: transparent;
`;

const LogoImage = styled.img`
  width: 180px;
  height: 150px;
  margin-bottom: 20px;
`;

const TitleText = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-bottom: 10px;
`;

const SubtitleText = styled.h2`
  color: black;
  font-size: 24px;
`;

const ContentContainer = styled.div`
  height: auto; /* Remove fixed height for content */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align content to the top */
  align-items: center;
  padding: 0 20px; /* Remove extra padding */
  background-color: #ffffff;
`;

const DescriptionText = styled.p`
  font-size: 20px;
  color: #555;
  line-height: 26px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 200px; /* Reduce margin to minimize the space between text and cards */
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
  gap: 15px; /* Reduced gap between cards */
  padding: 0; /* Remove unnecessary padding */
  background-color: #fff;
  width: 100%;
  margin-top: 0; /* Remove any margin to bring the cards closer to the text */

  /* For small screens (phones), we reduce to 2 cards per row */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
  }

  /* For even smaller screens (very small phones), 1 card per row */
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 card per row */
  }
`;

const Card = styled.div`
  background-color: #333;
  padding: 40px;
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); /* Slight hover effect */
  }
`;

const CardText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

function HomeScreen() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  return (
    <>
      {/* Hero Section */}
      <HeroContainer>
        {/* React-slick (image carousel) */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <SwiperImage src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>

        {/* Title and Subtitle */}
        <TitleContainer>
          <LogoImage src={Logo} alt="Logo" />
          <SubtitleText>Velkommen til</SubtitleText>
          <TitleText>Brødrene Ervik</TitleText>
        </TitleContainer>
      </HeroContainer>

      {/* Content Section */}
      <ContentContainer>
        {/* Description Text */}
        <DescriptionText>
          Jeg tilbyr kvalitetsarbeid innen snekkerfaget. Med min erfaring som dyktig håndverker,
          kan jeg hjelpe deg med å realisere dine byggeprosjekter. Jeg utfører små reparasjoner, leverer alltid topp kvalitet!
        </DescriptionText>

        {/* Service Cards */}
        <CardsContainer>
          <Card>
            <FaHammer size={40} />
            <CardText>Byggeprosjekter</CardText>
          </Card>
          <Card>
            <FaTools size={40} />
            <CardText>Renovering</CardText>
          </Card>
          <Card>
            <FaBuilding size={40} />
            <CardText>Snekkerarbeid</CardText>
          </Card>
        </CardsContainer>
      </ContentContainer>
    </>
  );
}

export default HomeScreen;