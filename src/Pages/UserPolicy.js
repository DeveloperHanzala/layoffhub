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
const Heading2 = styled.h1`
  margin-top: 1.25rem;
  margin-bottom: 0.625rem;
  font-size: 1.5rem;
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

const UserPolicy = () => {
  return (
    <>
      <Navbar />
      <TermNavbar />
      <MainContainer>
        <TermContainer>
          <TextContainer>
            <Heading>LayoffHub.ai Privacy Policy</Heading>
            <Heading1>Introduction</Heading1>
            <Text>
              At LayoffHub.ai, the privacy and anonymity of our users are of
              paramount importance. Our mission is to provide a safe and
              anonymous platform for workers to discuss, connect, and share
              information. This Privacy Policy outlines the types of information
              we collect, how we use and safeguard that information, and the
              circumstances under which we may disclose it.
            </Text>
            <Heading1>Information We Collect</Heading1>
            <Heading2>1. Log Data</Heading2>
            <Text>
              We collect certain types of data automatically when you visit
              LayoffHub.ai. This data is collectively referred to as "Log Data."
            </Text>
            <Text>
              1.1 HTTP Request Data When you browse our website, your browser
              automatically submits certain data to our server. This data is
              typically stored in server log files and may include:
            </Text>
            <ListContainer>
              <List>
                IP Address: The unique address that identifies your device on
                the internet. .
              </List>
              <List>
                Browser Information: Details about the browser you use, such as
                its type and version.
              </List>
              <List>
                Referring/Exit Pages: The URLs of the websites you visited
                before and after our site.
              </List>
              <List>
                Date and Time Stamps: The date and time of your visits to our
                site.
              </List>
              <List>
                Clickstream Data: The pages you visit and the actions you take
                on our site.
              </List>
            </ListContainer>

            <Text>
              1.2 Cookies We use cookies to enhance your user experience and to
              analyze user behavior for statistical purposes. Cookies are small
              text files stored on your device that help us remember your
              preferences and improve your browsing experience. You can choose
              to disable cookies through your browser settings, but this may
              affect your ability to use certain features of our site.
            </Text>
            <Text>
              1.3 Signed-in User Information While registration is not required
              to use LayoffHub.ai, users who choose to sign in may benefit from
              a more personalized experience. When you sign in, we collect your
              email address. This information is considered private and is never
              displayed publicly on the site.
            </Text>
            <Heading1>Third-Party Cookies and Web Beacons</Heading1>
            <Text>
              In addition to our own cookies, third-party cookies and web
              beacons may be used by our advertising partners and analytics
              providers.
            </Text>
            <Text>
              2.1 Third-Party Advertising We use third-party advertisements to
              support LayoffHub.ai. These advertisers, such as Google through
              the Google AdSense program, may use cookies and web beacons to
              collect information, including your IP address, ISP, browser type,
              and browsing behavior. This information is typically used for
              geotargeting (e.g., showing ads for local services) or for
              displaying ads based on your interests (e.g., showing cooking ads
              to users who visit cooking sites).
            </Text>
            <Text>
              2.2 Google Analytics We use Google Analytics to analyze website
              traffic and user behavior. Google Analytics uses its own cookies
              to track and report website traffic. This is a common practice
              across the web, and it helps us understand how users interact with
              our site, enabling us to improve the user experience.
            </Text>
            <Heading1>Disclosure of Log Data</Heading1>
            <Text>
              We are committed to protecting your privacy and do not sell log
              data to third parties. However, there are certain situations where
              we may disclose log data:
            </Text>
            <Text>
              3.1 Legal Situations We may disclose log data if required to do so
              by law or in response to a legally enforceable subpoena, warrant,
              court order, or other judicial or administrative order.
            </Text>
            <Text>
              3.2 Emergency Situations In cases involving potential threats to
              personal safety, we may disclose log data if we believe in good
              faith that it is necessary to protect individuals or property.
            </Text>
            <Heading1>Conclusion</Heading1>
            <Text>
              We take your privacy seriously and strive to protect your personal
              information. By using LayoffHub.ai, you agree to the collection
              and use of information in accordance with this Privacy Policy. If
              you have any questions or concerns about our privacy practices,
              please contact us at [email address].
            </Text>
            <Text>Thank you for trusting LayoffHub.ai.</Text>
          </TextContainer>
        </TermContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default UserPolicy;
