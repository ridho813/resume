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
              <div className="text-base leading-relaxed">
                <p className="mb-2">
                  My interest in technology started with a deep desire to solve
                  real-life problems, which led me to pursue a Computer
                  Technology degree at{" "}
                  <strong>Respati University Yogyakarta</strong>.
                </p>
                <p className="mb-2">
                  During my studies, I contributed to several impactful academic
                  projects such as:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-2">
                  <li>
                    <strong>Point of Sale Application</strong>
                  </li>
                  <li>
                    <strong>Auction Item Information System</strong>
                  </li>
                  <li>
                    <strong>Voting Information System</strong>
                  </li>
                  <li>
                    <strong>Goods Inventory System</strong>
                  </li>
                  <li>
                    <strong>TIMCS.ID</strong>
                  </li>
                  <li>
                    <strong>TIMHR.ID</strong>
                  </li>
                  <li>
                    <strong>REGOPOS.ID</strong>
                  </li>
                </ul>
                <p>
                  These systems were recognized not only by academic staff but
                  also appreciated by actual clients for their real-world
                  applicability.
                </p>
              </div>
            </AnimationOnScroll>

            <br />
            <br />

            <AnimationOnScroll animateIn="fadeInLeft">
              <div className="text-base leading-relaxed">
                <h3 className="text-xl font-semibold mb-2">
                  💼 Professional & Technical Experience
                </h3>
                <p className="mb-4">
                  At <strong>PT. Benderaku Berkibar Selalu</strong>, I’ve been
                  deeply involved in building systems with large-scale
                  challenges, such as:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    ✅ <strong>Real-Time Notification Systems</strong> for
                    hundreds of millions of users using{" "}
                    <strong>Socket.IO</strong> and <strong>Node.js</strong>{" "}
                    (without Firebase)
                  </li>
                  <li>
                    ✅ <strong>Comment and Coordination Platforms</strong> (like
                    WhatsApp) using <strong>PHP & MySQL</strong>, where
                    performance and user division mapping are handled{" "}
                    <strong>without Redis</strong>
                  </li>
                  <li>
                    ✅ <strong>Email-like Messaging System</strong> with
                    labeling, starring, multi-user, and read tracking using{" "}
                    <strong>JSON</strong> for optimal database storage
                  </li>
                  <li>
                    ✅ <strong>Project Task Coordination</strong>, Chat, and
                    Multi-user Collaboration Tools
                  </li>
                  <li>
                    ✅ <strong>High-performance frontend</strong> using{" "}
                    <strong>IndexedDB</strong>, <strong>DataTables</strong>, and{" "}
                    <strong>AJAX</strong> for billions of data records
                  </li>
                  <li>
                    ✅ <strong>Exporting billions of rows</strong> directly in
                    the browser using <strong>xlsx.js</strong>, bypassing heavy
                    server-side load (without PHPSpreadsheet)
                  </li>
                  <li>
                    ✅ <strong>Mobile Development</strong> using{" "}
                    <strong>Flutter</strong> to create modern, cross-platform
                    solutions
                  </li>
                </ul>
              </div>
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
