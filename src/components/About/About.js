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
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <AnimationOnScroll animateIn="fadeInLeft">
            <Image src="ai2.png" alt="man-svgrepo" />
          </AnimationOnScroll>
          <div className="AboutBio">
            <AnimationOnScroll animateIn="fadeInLeft">
              Hello! My name is <strong>Muh Ridho Wachid S</strong>. I’m a
              passionate and adaptable full-stack developer based in Yogyakarta,
              Indonesia, currently working at PT. Benderaku Berkibar Selalu.
              Over the past few years, I’ve gained hands-on experience in
              designing, developing, and optimizing high-performance web and
              mobile systems tailored for real-world scalability.
            </AnimationOnScroll>

            <br />
            <br />

            <AnimationOnScroll animateIn="fadeInLeft">
              My interest in technology started with a deep desire to solve
              real-life problems, which led me to pursue a Computer Technology
              degree at Respati University Yogyakarta. During my studies, I
              contributed to several impactful academic projects such as: Point
              of Sale Application Auction Item Information System Voting
              Information System Goods Inventory System These systems were
              recognized not only by academic staff but also appreciated by
              actual clients for their real-world applicability.
            </AnimationOnScroll>

            <br />
            <br />

            <AnimationOnScroll animateIn="fadeInLeft">
              💼 Professional & Technical Experience At PT. Benderaku Berkibar
              Selalu, I’ve been deeply involved in building systems with
              large-scale challenges, such as: ✅ Real-Time Notification Systems
              for hundreds of millions of users using Socket.IO and Node.js
              (without Firebase) ✅ Comment and Coordination Platforms (like
              WhatsApp) using PHP & MySQL, where performance and user division
              mapping are handled without Redis ✅ Email-like Messaging System
              with labeling, starring, multi-user, and read tracking using JSON
              for optimal database storage ✅ Project Task Coordination, Chat,
              and Multi-user Collaboration Tools ✅ High-performance frontend
              using IndexedDB, DataTables, and AJAX for billions of data records
              ✅ Exporting billions of rows directly in the browser using
              xlsx.js, bypassing heavy server-side load (without PHPSpreadsheet)
              ✅ Mobile Development using Flutter to create modern,
              cross-platform solutions
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
