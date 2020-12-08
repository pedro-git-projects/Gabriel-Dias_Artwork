import React from "react";
import home1 from "../../Dias/profile.png";
import { About, Description, Image, Hide } from "../Styles/framerStyle";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Animations/animation";
import Wave from "../Wave";
import Button from "@material-ui/core/Button";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Gabriel Dias</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Illustrator</span> and <span>Concept Artist</span> based In
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> Brazil.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact Me for Projects and Comissions.
        </motion.p>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/contact"
        >
          {" "}
          Get In Touch!{" "}
        </Button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Gabriel Dias" />
      </Image>
      <Wave />
    </About>
  );
};



export default AboutSection;
