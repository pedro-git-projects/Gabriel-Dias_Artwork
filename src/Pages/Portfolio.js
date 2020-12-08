import React from "react";
import styled from "styled-components";

//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  lineAnim,
} from "../Components/Animations/animation";
import { useScroll } from "../components/Animations/useScroll";
import ScrollTop from "../components/Animations/ScrollTop";
//lightbox
import { SRLWrapper } from "simple-react-lightbox";
//images
import hi from "../Dias/hi.jpg";
import jin from "../Dias/jin.jpg";
import link1 from "../Dias/link.jpg";
import link2 from "../Dias/link2.jpg";
import link3 from "../Dias/link3.jpg";
import lo2 from "../Dias/lo2.png";
import orphen from "../Dias/orphen.jpg";
import scott from "../Dias/scott.jpg";
import sieg from "../Dias/sieg.jpg";
import tanj from "../Dias/tanj.jpg";
import tanj2 from "../Dias/tanj2.jpg";
import wikk from "../Dias/wikk.jpg";
import zero from "../Dias/zero.jpg";

const options = {
  buttons: {
    showDownloadButton: false,
  },
};

const Portfolio = () => {
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <motion.h2 variants={fade}>Portfolio</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <motion.div variants={lineAnim} className="line"></motion.div>
      </Movie>
      <SRLWrapper options={options}>
        <Imgs>
          <Item>
            <a
              href="https://instagram.fbsb8-2.fna.fbcdn.net/v/t51.2885-15/e35/67288782_881751315526118_4833596345178527518_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=_ssk8yT-gWUAX-AHmIn&tp=1&oh=ab59f85bd8e331898a81cab7bfdd2081&oe=5FF9A821"
              data-attribute="SRL"
            >
              <img src={hi} alt="Hyakkimaru" />
            </a>
          </Item>
          <Item>
            <a
              href="https://instagram.fbsb8-1.fna.fbcdn.net/v/t51.2885-15/e35/56664975_313929965957235_1686019931849587645_n.jpg?_nc_ht=instagram.fbsb8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jIJ-E0PSvRcAX8ACrUe&tp=1&oh=0d62888ced82c644feaf1c8a19406057&oe=5FFA57CE"
              data-attribute="SRL"
            >
              <img src={jin} alt="Jin" />
            </a>
          </Item>
          <Item>
            <a
              href="https://instagram.fbsb8-2.fna.fbcdn.net/v/t51.2885-15/e35/57488399_377469539521272_656633538632817136_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=qSqDqpGxbh0AX-hsqOE&tp=1&oh=e2c7266023e7d3eb4c33cad11cc099f4&oe=5FF6C33B"
              data-attribute="SRL"
            >
              <img src={link1} alt="Toon Link" />
            </a>
          </Item>

          <Item>
            <a
              href="https://instagram.fbsb8-2.fna.fbcdn.net/v/t51.2885-15/e35/121318980_225988162373122_1487856565351339781_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=OH850o6oEBUAX-X-i3I&tp=1&oh=f230dc46a924788888105ce044d96766&oe=5FF9557D"
              data-attribute="SRL"
            >
              <img src={link2} alt="Item Collection Biggoron Sword" />
            </a>
          </Item>

          <Item>
            <a
              href="https://instagram.fbsb8-2.fna.fbcdn.net/v/t51.2885-15/e35/121466531_1659864601017046_1474385097880967201_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=qwBzpNLiOxkAX9jLWYy&tp=1&oh=04684fe3ec220c6cb196684e656401c6&oe=5FF9786E"
              data-attribute="SRL"
            >
              <img
                src={link3}
                alt="Item Collection Child Link With All Items"
              />
            </a>
          </Item>

          <Item>
            <a
              href="https://cdnb.artstation.com/p/assets/images/images/032/156/617/large/gabriel-dias-profile-pic.jpg?1605632829"
              data-attribute="SRL"
            >
              <img src={lo2} alt="Hardwired Lo-Fi Icon" />
            </a>
          </Item>

          <Item>
            <a
              href="https://instagram.fbsb8-2.fna.fbcdn.net/v/t51.2885-15/e35/103532365_257468988654863_7726919338652034997_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=9wK9n0w_ksoAX_amSVX&tp=1&oh=ab83f52e6b611fec405922d201629ed4&oe=5FF7338B"
              data-attribute="SRL"
            >
              <img src={orphen} alt="Orphen" />
            </a>
          </Item>

          <Item>
            <a
              href="https://instagram.fbsb8-1.fna.fbcdn.net/v/t51.2885-15/e35/117730885_710628986452829_829061371253991996_n.jpg?_nc_ht=instagram.fbsb8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=rlRMj2ySliMAX-WZaMb&tp=1&oh=acc75797951d9bf4227f007460773e70&oe=5FF71C8D"
              data-attribute="SRL"
            >
              <img src={scott} alt="Scott Pilgrim" />
            </a>
          </Item>

          <Item>
            <a
              href="https://instagram.fbsb8-1.fna.fbcdn.net/v/t51.2885-15/e35/60263349_439502763261985_313741700427684921_n.jpg?_nc_ht=instagram.fbsb8-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=EujntMPYwV4AX8a_q7K&tp=1&oh=8e3a75f30561cb49c087034c37d1bda9&oe=5FF9E706"
              data-attribute="SRL"
            >
              <img src={sieg} alt=" Sieghart's last job, Prime Knight" />
            </a>
          </Item>

          <Item>
            <a
              href="https://instagram.fbsb8-2.fna.fbcdn.net/v/t51.2885-15/e35/67654568_2531113567123802_4197273337139092532_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=iNgN2Q4GbOgAX_ou24N&tp=1&oh=371b578f69b53b080cbfead3994711c7&oe=5FF7A238"
              data-attribute="SRL"
            >
              <img src={tanj} alt=" Tanjirou" />
            </a>
          </Item>

          <Item>
            <a
              href="https://instagram.fbsb8-2.fna.fbcdn.net/v/t51.2885-15/e35/118121783_721165578466951_8115996625236185124_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=GqS8L0Cb1fcAX8alebu&tp=1&oh=16f7060fcfea04105f18e5d136722035&oe=5FFA1454"
              data-attribute="SRL"
            >
              <img src={tanj2} alt="Zenitsu" />
            </a>
          </Item>

          <Item>
            <a
              href="https://instagram.fbsb8-2.fna.fbcdn.net/v/t51.2885-15/e35/103977466_2674780836078838_393927016911622497_n.jpg?_nc_ht=instagram.fbsb8-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=6zREXfFcJ0gAX86_ER-&tp=1&oh=db50dbef1fd75bf04ac8bedd9b924918&oe=5FF7C34F"
              data-attribute="SRL"
            >
              <img src={wikk} alt="The Will" />
            </a>
          </Item>

          <Item>
            <a
              href="https://instagram.fbsb8-1.fna.fbcdn.net/v/t51.2885-15/e35/66287117_434724517383483_3301709004944302534_n.jpg?_nc_ht=instagram.fbsb8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=bSBLNJ_dZ_4AX8qCIG2&tp=1&oh=82d081baf938de5628c707ebac85bc2b&oe=5FF67F61"
              data-attribute="SRL"
            >
              <img src={zero} alt="Zero - Wanderer" />
            </a>
          </Item>
        </Imgs>
      </SRLWrapper>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const Imgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Item = styled.div`
  padding: 0 20px 20px;
`;

export default Portfolio;
