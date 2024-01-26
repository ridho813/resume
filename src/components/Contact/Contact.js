import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import{WA} from "./WaElement";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showToolWa, setShowToolWa] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("muhridho448@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };
  const copyToWA = () => {
    navigator.clipboard.writeText("6281249429071");
    setShowToolWa(true);
    setTimeout(() => {
      setShowToolWa(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <AnimationOnScroll animateIn="fadeIn" >
          <div className="BigCard">
          <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>muhridho448@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:muhridho448@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
          </div>
        </AnimationOnScroll>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
