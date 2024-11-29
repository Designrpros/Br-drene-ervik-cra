import React from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope, FaLink } from "react-icons/fa"; // Using React Icons for phone, email, and website
import ExternalLink from "./components/ExternalLink";
import CarpenterBG1 from "./images/CarpenterBG1.jpg"; // Import the background image here
import Avatar from "./images/Avatar.jpg"; // Import the avatar image here

// Styled components for layout and design
const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  background-image: url(${CarpenterBG1}); /* Set CarpenterBG1 as the background image */
  background-size: cover; /* Ensure the image covers the full container */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the image from repeating */
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  color: #fff; /* White text color to stand out on the background */
`;

const TopImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TopImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 30%;
`;

const ProfileContactContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Slightly darker background for contrast */
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const ContactName = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ContactText = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ContactDetail = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const AdditionalInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Slightly darker background for contrast */
  border-radius: 10px;
  padding: 20px;
`;

const InfoText = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export default function KontaktScreen() {
  return (
    <ScrollContainer>
      {/* Content Container with Background Image */}
      <Container>
        {/* Content with Avatar and Info */}
        <ContentContainer>
          {/* Top Section: Profile Image */}
          <TopImageContainer>
            <TopImage src={Avatar} alt="Profile Avatar" />
          </TopImageContainer>

          {/* Profile and Contact Information */}
          <ProfileContactContainer>
            <ContactInfo>
              <ContactName>Helge</ContactName>
              <ContactText>En trygg snekker med mye erfaring.</ContactText>
              <ContactDetail>
                <FaPhone /> Telefon: +47 463 70 403
              </ContactDetail>
              <ContactDetail>
                <FaEnvelope /> E-post: ervikhelge47@gmail.com
              </ContactDetail>
              <ExternalLink href="https://www.snikkeren.no">
                <ContactDetail>
                  <FaLink /> Nettside: www.Brødrene-Ervik.no
                </ContactDetail>
              </ExternalLink>
            </ContactInfo>
          </ProfileContactContainer>

          {/* Additional Information */}
          <AdditionalInfo>
            <InfoText>
              • Jeg kjøpte en vingård i Piemonte og pusset den opp, samtidig som jeg hadde tre små barn. Det var en helt spesiell tid!
            </InfoText>
            <InfoText>
              • På Føynland kjøpte jeg et hus som jeg pusset opp over 15 år. Det var mye jobb, men jeg fikk også vært hjemme med barna i den perioden, noe jeg setter stor pris på.
            </InfoText>
            <InfoText>
              • I 5 år jobbet jeg med skadedyrkontroll i Tønsberg. Der lærte jeg mye om å takle uforutsette utfordringer.
            </InfoText>
            <InfoText>
              • De siste 5 årene har jeg brukt mye tid på private oppdrag for familie og venner. Det har vært givende å hjelpe de nærmeste med prosjektene deres.
            </InfoText>
            <InfoText>
              • Under pandemien bygde jeg faktisk min egen hytte. Det var en drøm som gikk i oppfyllelse, og en fin måte å holde meg opptatt på.
            </InfoText>
            <InfoText>
              • Nå tar jeg kurs i «lafting». Det er både lærerikt og en fin måte å utfordre meg selv på.
            </InfoText>
            <InfoText>
              • Jeg fikk også være med litt i team Otto på Sinnasnekkerne. Det var skikkelig moro og en opplevelse for livet!
            </InfoText>
            <InfoText>
              • Byggmester Terje er min faste samarbeidspartner. Vi utfyller hverandre godt i prosjektene vi tar på oss.
            </InfoText>
          </AdditionalInfo>
        </ContentContainer>
      </Container>
    </ScrollContainer>
  );
}