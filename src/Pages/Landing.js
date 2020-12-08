import React from "react";
import AboutSection from "../Components/Sections/AboutSection";
import ServicesSection from "../Components/Sections/ServicesSection";
import FaqSection from "../Components/Sections/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Components/Animations/animation";
import ScrollTop from "../Components/Animations/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
