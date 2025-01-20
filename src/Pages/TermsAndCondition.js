import React from "react";
import styled from "styled-components";
import TermNavbar from "./TermNavbar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
`;
const TermContainer = styled.div`
  width: 70%;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;
const TextContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;
const Heading = styled.h1`
  margin-top: 1.25rem;
  margin-bottom: 0.625rem;
  font-size: 2.25rem;
`;
const Heading1 = styled.h1`
  margin-top: 1.25rem;
  margin-bottom: 0.625rem;
  font-size: 1.75rem;
`;
const Text = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const List = styled.li`
  list-style: circle;
  text-align: justify;
`;

const TermsAndCondition = () => {
  return (
    <>
      <Navbar />
      <TermNavbar />
      <MainContainer>
        <TermContainer>
          <TextContainer>
            <Heading>LayoffHub.ai Content Rules</Heading>
            <Heading1>LayoffHub.ai Community Guidelines</Heading1>
            <Text>
              Welcome to LayoffHub.ai, a platform dedicated to providing a space
              for workers to discuss, connect, and share information. Our
              community values open and respectful dialogue. While the nature of
              the content shared here can vary—ranging from serious and sad to
              funny or offensive—we ask all participants to respect one another
              and adhere to the following guidelines to maintain a healthy and
              supportive environment.
            </Text>
            <Heading1>Unwelcome Content</Heading1>
            <Text>
              LayoffHub.ai allows a wide range of content to foster open
              discussion. However, certain types of content are not acceptable.
              Please adhere to the spirit of these guidelines rather than
              seeking loopholes.
            </Text>
            <Text>Content is prohibited if it:</Text>
            <ListContainer>
              <List>
                Is illegal: Any content that violates local, state, national, or
                international laws.
              </List>
              <List>
                Contains any form of pornography: This includes explicit sexual
                content and nudity.
              </List>
              <List>
                Encourages or incites violence or harm: Any content that
                promotes or incites violence against individuals or property.
              </List>
              <List>
                Threatens, harasses, or bullies: Content that threatens,
                harasses, or bullies others, or encourages such behavior.
              </List>
              <List>
                Reveals personal and confidential information: Sharing someone
                else's private information without their consent.
              </List>
              <List>
                Impersonates someone misleadingly or deceptively: Pretending to
                be someone else in a way that deceives or misleads others.
              </List>
              <List>
                Is spam: Unsolicited or repetitive content intended to disrupt
                the community.
              </List>
            </ListContainer>
            <Heading1>Prohibited Behavior</Heading1>
            <Text>
              In addition to the content guidelines, certain behaviors are also
              prohibited on LayoffHub.ai:
            </Text>
            <ListContainer>
              <List>
                Asking for votes or engaging in vote manipulation: Soliciting
                votes or engaging in any behavior that manipulates the voting
                system.
              </List>
              <List>
                Disrupting the site: Any actions that interfere with the normal
                operation of LayoffHub.ai, including hacking or flooding.
              </List>
              <List>
                Evading bans or restrictions: Switching IP addresses or using
                other methods to avoid penalties or restrictions imposed by the
                site.
              </List>
            </ListContainer>
            <Heading1>Not Safe For Work (NSFW) Content</Heading1>
            <Text>
              NSFW content is strictly prohibited on LayoffHub.ai. This includes
              content containing:
            </Text>
            <ListContainer>
              <List>Nudity: Any visual content displaying nudity.</List>
              <List>Pornography: Explicit sexual content.</List>
              <List>
                Profanity: Language or content that is offensive or
                inappropriate for a public or formal setting, such as a
                workplace.
              </List>
            </ListContainer>
            <Heading1>Enforcement</Heading1>
            <Text>
              We take the enforcement of these rules seriously to maintain a
              respectful and safe community. Violations of these guidelines can
              result in the removal of your content and/or the blocking of your
              access to LayoffHub.ai.
            </Text>
            <Text>
              For details on how we handle log data and disclosures related to
              legal and safety matters, please refer to our Privacy Policy.
            </Text>
            <Text>
              Thank you for being a part of LayoffHub.ai community and for
              helping to keep our discussions respectful and informative.
            </Text>
          </TextContainer>
        </TermContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
