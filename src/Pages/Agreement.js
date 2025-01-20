import React from "react";
import styled from "styled-components";
import TermNavbar from "./TermNavbar";
import { Link } from "react-router-dom";
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

const Agreement = () => {
  return (
    <>
      <Navbar />
      <TermNavbar />
      <MainContainer>
        <TermContainer>
          <TextContainer>
            <Heading>LayoffHub.ai User Agreement</Heading>
            <Heading1>Introduction</Heading1>
            <Heading1>Dear User,</Heading1>
            <Text>
              This document represents an agreement ("User Agreement" or
              "Agreement") between LayoffHub.ai ("we," "our," "us") and you.
              This Agreement sets forth the terms and conditions governing your
              use of the LayoffHub.ai website and services ("LayoffHub.ai"),
              which include discussion boards, messaging, LayoffHub.ai mobile,
              and LayoffHub.ai social media sites. Our goal is to foster a fair
              and tolerant environment for discussion, news, ideas, people,
              links, and entertainment.
            </Text>
            <Text>
              This Agreement is a legal contract between you and us. By using
              LayoffHub.ai, you acknowledge that you have read, understood, and
              agree to be bound by the terms of this Agreement. If you do not
              agree to this Agreement, you should not use LayoffHub.ai. Please
              also review our Privacy Policy, which explains how we collect and
              use your information.
            </Text>

            <Heading1>General LayoffHub.ai User Agreement Clauses</Heading1>
            <Text>User Access to LayoffHub.ai</Text>
            <Text>
              Without advance notice and at any time, we may, for violations of
              this Agreement or for any other reason we choose:
            </Text>
            <ListContainer>
              <List>(a) Block or suspend your access to LayoffHub.ai.</List>
              <List>
                (b) Remove any of your user content from LayoffHub.ai.
              </List>
            </ListContainer>
            <Heading2>Personal and Lawful Use Only</Heading2>
            <Text>
              LayoffHub.ai is designed and supported for personal use only. You
              may not use LayoffHub.ai to break any law, violate an individual's
              privacy, or infringe any person or entity's intellectual property
              or other proprietary rights.
            </Text>
            <Heading2>Socializing, Ideas, and Entertainment</Heading2>
            <Text>
              LayoffHub.ai is intended to be a place for socializing,
              user-provided news, information, idea exchange, and entertainment.
              We are not responsible for any decisions you make based on
              information read on LayoffHub.ai.
            </Text>
            <Heading2>Not a Marketplace</Heading2>
            <Text>
              LayoffHub.ai is not intended to be a marketplace for any goods or
              services. Any transactions you undertake are your responsibility
              alone. You may not use LayoffHub.ai to conduct transactions for
              any illegal goods or services, nor to advertise any products or
              services.
            </Text>
            <Heading1>LayoffHub.ai Account</Heading1>
            <Heading2>
              LayoffHub.ai does not provide user account creation capability.
            </Heading2>
            <Heading1>Content on LayoffHub.ai</Heading1>
            <Heading2>LayoffHub.ai Content</Heading2>
            <Text>
              LayoffHub.ai contains graphics, text, audio, software, code,
              website compilation, photographs, images, video, website "look and
              feel," and advertisements supplied by us or our licensors
              ("LayoffHub.ai Content"). LayoffHub.ai Content is protected by
              intellectual property laws including copyright and other
              proprietary rights of the United States and foreign countries.
            </Text>
            <Text>
              We grant you the right to access our content in the manner
              described in this Agreement. You may not otherwise make
              unauthorized use of, reproduce, prepare derivative works,
              distribute copies, perform, or publicly display LayoffHub.ai
              Content, except as permitted by the doctrine of fair use or as
              authorized in writing by us.
            </Text>
            <Heading2>Your Content</Heading2>
            <Text>
              You retain the rights to your copyrighted content or information
              that you submit to LayoffHub.ai ("User Content"), except as
              outlined below.
            </Text>
            <Text>
              By submitting User Content to LayoffHub.ai, you grant LayoffHub.ai
              a royalty-free, unrestricted, perpetual, irrevocable,
              non-exclusive, worldwide license to reproduce, prepare derivative
              works, distribute copies, perform, or publicly display your User
              Content in any medium and for any purpose, including commercial
              purposes, and to authorize others to do so.
            </Text>
            <Text>
              You agree that you have the right to submit any content you post,
              and that your User Content does not violate the copyright, trade
              secret, trademark, or any other personal or proprietary right of
              any other party.
            </Text>
            <Heading2>No Endorsement of User Content</Heading2>
            <Text>
              We take no responsibility for, do not implicitly or expressly
              endorse, and do not assume any liability for any User Content
              submitted by you to LayoffHub.ai.
            </Text>
            <Heading2>Links to Third-Party Sites</Heading2>
            <Text>
              LayoffHub.ai contains many third-party links posted by our users.
              We are not responsible for the content or actions of any
              third-party websites or services associated with these links. You
              agree to take full legal responsibility for any links you post.
              This Agreement and our Privacy Policy do not apply to any content
              on other websites related to those links. You should consult the
              terms and privacy policies of those other websites to understand
              your rights.
            </Text>
            <Heading1>Rules</Heading1>
            <Heading2>Your Participation on LayoffHub.ai</Heading2>
            <Text>
              You agree to follow LayoffHub.ai Content Rules, which are intended
              to keep people safe, protect children, keep LayoffHub.ai running
              smoothly, and encourage personal responsibility for your actions
              on LayoffHub.ai.
            </Text>
            <Heading2>No Spam</Heading2>
            <Text>
              You may not post any graphics, text, photographs, images, video,
              audio, or other material that we deem to be junk or spam (e.g.,
              self-promotion). Cluttering LayoffHub.ai with such content reduces
              the quality of the experience for others. We reserve the right to
              define spam on a case-by-case basis, and comments will be
              moderated accordingly.
            </Text>
            <Heading2>Misuse of LayoffHub.ai</Heading2>
            <Text>
              You agree not to interrupt the operation of LayoffHub.ai,
              introduce malicious code, make it difficult for anyone else to use
              LayoffHub.ai due to your actions, attempt to manipulate votes or
              LayoffHub.ai's systems, or assist anyone in misusing LayoffHub.ai
              in any way.
            </Text>
            <Heading2>Children and LayoffHub.ai</Heading2>
            <Text>
              LayoffHub.ai is not intended for use by persons under the age of
              18, and LayoffHub.ai does not knowingly collect any personal
              information from such persons.
            </Text>
            <Heading2>DMCA / Copyright / Takedowns</Heading2>
            <Text>
              LayoffHub.ai will respond to legitimate requests under the Digital
              Millennium Copyright Act ("DMCA"). We retain the right to remove
              User Content on LayoffHub.ai that we deem to be infringing the
              copyright of others. If you become aware of User Content on
              LayoffHub.ai that infringes your copyright rights, you may submit
              a properly formatted DMCA request (see 17 U.S.C. § 512) to
              LayoffHub.ai.
            </Text>
            <Text>
              Misrepresentations of infringement can result in liability for
              monetary damages. You may want to consult an attorney before
              taking any action pursuant to the DMCA. Any DMCA request should be
              sent using our support contact page and must include:
            </Text>
            <ListContainer>
              <List>
                The physical or electronic signature of the copyright owner (or
                the person authorized to act on the owner's behalf).
              </List>
              <List>
                Identification of the copyrighted work claimed to have been
                infringed on LayoffHub.ai, or a representative list of such
                works.
              </List>
              <List>
                The URL of the materials claimed to be infringing or information
                reasonably adequate to permit us to locate the material.
              </List>
              <List>
                Your name, address, email address, and telephone number.
              </List>
              <List>
                A statement by you that you have a good faith belief that the
                disputed use of the material is not authorized by the copyright
                owner, its agent, or the law.
              </List>
              <List>
                A statement by you, made under penalty of perjury, that the
                above information in your notice is fully accurate and that you
                are the copyright owner or are authorized to act on the
                copyright owner's behalf.
              </List>
            </ListContainer>
            <Heading1>Additional Legal Considerations</Heading1>
            <Heading2>Indemnity</Heading2>
            <Text>
              You are responsible for all the information you submit or post to
              LayoffHub.ai. You will not hold us legally liable for any of your
              User Content or actions that infringe the law or the rights of a
              third party.
            </Text>
            <Text>
              Specifically, you agree to hold LayoffHub.ai, its affiliates,
              officers, directors, employees, agents, and third-party service
              providers harmless from and defend them against any claims, costs,
              damages, losses, expenses, and any other liabilities, including
              attorneys' fees and costs, arising out of or related to your
              access to or use of LayoffHub.ai, your violation of this User
              Agreement, and/or your violation of the rights of any third party.
            </Text>
            <Heading2>Disclaimer of Warranties</Heading2>
            <Text>
              LayoffHub.ai is provided "as is" and without warranty of any kind.
              To the maximum extent permitted by law, we and our affiliates and
              third-party service providers disclaim any and all warranties,
              express or implied, including (but not limited to) implied
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement of proprietary rights. You are solely
              responsible for any damage to your device, loss of use, or loss of
              your User Content. We do not guarantee that LayoffHub.ai will
              always work properly.
            </Text>
            <Heading2>Limitation of Liability</Heading2>
            <Text>
              We will not be liable for any special, consequential, indirect,
              incidental, punitive, reliance, or exemplary damages, whether in
              tort, contract, or any other legal theory, arising out of or in
              any way connected with this Agreement or your use of or attempt to
              use LayoffHub.ai, including (but not limited to) damages for loss
              of profits, goodwill, use, or data. This limitation on liability
              shall apply even if we have been advised of the possibility of
              such damages. Some states do not allow for the exclusion of
              implied warranties or the limitation or exclusion of liability for
              incidental or consequential damages, so the above exclusions may
              not apply to you. You may have other rights that vary from state
              to state.
            </Text>
            <Text>
              You agree to release us, our affiliates, and third-party service
              providers, and each associated director, employee, agent, and
              officer, from claims, demands, and damages (actual and
              consequential), of every kind and nature, known and unknown,
              arising out of or in any way connected to your use of
              LayoffHub.ai.
            </Text>
            <Heading1>Governing Law</Heading1>

            <Text>
              We want you to enjoy LayoffHub.ai. If you have an issue or
              dispute, you agree to raise it and try to resolve it with us
              informally. You can contact us with feedback and concerns via our
              support contact page.
            </Text>
            <Text>
              The headings in this Agreement are for convenience and do not
              control any of its provisions.
            </Text>
            <Text>
              Any claim or dispute between you and us arising out of or relating
            </Text>
            <Heading2>
              Contact{" "}
              <Link style={{ padding: "0px 3px", textDecoration: "none" }}>
                admin@layoffhub.ai
              </Link>{" "}
              for any questions or concerns.
            </Heading2>
          </TextContainer>
        </TermContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Agreement;
