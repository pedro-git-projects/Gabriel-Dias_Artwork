import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../Components/Animations/animation";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import ScrollTop from "../Components/Animations/ScrollTop";

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Button
              style={{ minHeight: "56px" }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              href="https://www.instagram.com/gabrieldias_artwork/ "
            >
              Instagram
            </Button>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Button
              style={{ minHeight: "56px" }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              href="https://twitter.com/dias_artwork"
            >
              Twitter
            </Button>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Button
              style={{ minHeight: "56px" }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              href="https://gabrieldiasartwork.tumblr.com"
            >
              Tumblr
            </Button>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Button
              style={{ minHeight: "56px" }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              href="https://www.deviantart.com/gabrielmegs"
            >
              Deviantart
            </Button>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Button
              style={{ minHeight: "56px" }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              href="https://www.buymeacoffee.com/GabrielDias"
            >
              By Me A Coffee
            </Button>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Button
              style={{ minHeight: "56px" }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              href="https://www.behance.net/diasartwork/"
            >
              Behance
            </Button>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Button
              style={{ minHeight: "56px" }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              href="https://www.artstation.com/gabrieldias_artwork"
            >
              Artstation
            </Button>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Button
              style={{ minHeight: "56px" }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              href="https://www.facebook.com/gabrieldiasartwork/"
            >
              Facebook
            </Button>
          </Social>
        </Hide>
        <ScrollTop />
      </div>
    </ContactStyle>
   
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 1rem;
`;

export default Contact;
