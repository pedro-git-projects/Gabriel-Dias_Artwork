import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons/faMoneyBill";
import home2 from "../../Dias/lo2.png";
import { About, Description, Image } from "../Styles/framerStyle";
import styled from "styled-components";
import { scrollReveal } from "../Animations/animation";
import { useScroll } from "../Animations/useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faClock} color="#23d997" size="3x" />
              <h3>Punctual</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faComments} color="#23d997" size="3x" />
              <h3>Taylor made</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faPen} color="#23d997" size="3x" />
              <h3>Professional</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <FontAwesomeIcon icon={faMoneyBill} color="#23d997" size="3x" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt="Hardwired Lofi Profile Pic Comission" src={home2} />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
