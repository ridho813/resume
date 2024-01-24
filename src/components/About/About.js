import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <AnimationOnScroll animateIn="fadeInLeft">
          <Image
            src="ai2.png"
            alt="man-svgrepo"
          />
        </AnimationOnScroll>
          <div className="AboutBio">
            <AnimationOnScroll animateIn="fadeInLeft">
            Hello! My name is <strong>Muh Ridho Wachid S</strong>. I'm originally from Indonesia and have been living in Yogyakarta city for the past four years. I now Work at PT. Benderaku Berkibar Selalu. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability, as well as problem solving.
            </AnimationOnScroll>

            <br /><br />
            
            <AnimationOnScroll animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
             Throughout my studies at Respati University Yogyakarta I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the Pont Of sale App, auction item information system, voting information system and goods inventory system, projects that garnered recognition from my instructors, and clients alike
            </AnimationOnScroll>

            <br /><br />

            <AnimationOnScroll animateIn="fadeInLeft">
            Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </AnimationOnScroll>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <AnimationOnScroll animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </AnimationOnScroll>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
