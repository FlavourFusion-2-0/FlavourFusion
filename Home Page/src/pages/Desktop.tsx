import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import QuillmailIcon from "../components/QuillmailIcon";
import "./Desktop.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <FrameComponent3 />
      <div className="desktop-1-item" />
      <section className="desktop-1-inner">
        <div className="frame-parent">
          <div className="frame-wrapper">
            <div className="frame-group">
              <div className="top-rated-wrapper">
                <div className="top-rated">TOP RATED</div>
              </div>
              <img
                className="frame-child"
                loading="lazy"
                alt=""
                src="/rectangle-6.svg"
              />
            </div>
          </div>
          <FrameComponent1 />
          <div className="rectangle-parent">
            <div className="frame-item" />
            <div className="click-here-for-container">
              <span>Click Here For More Filters</span>
              <span className="span">{` `}</span>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
      <div className="image-2" />
      <footer className="complaints-link">
        <img className="complaints-link-child" alt="" src="/rectangle-8.svg" />
        <img
          className="mdiinstagram-icon"
          loading="lazy"
          alt=""
          src="/mdiinstagram.svg"
        />
        <img
          className="skill-iconsinstagram"
          alt=""
          src="/skilliconsinstagram.svg"
        />
        <img
          className="mingcutetwitter-line-icon"
          loading="lazy"
          alt=""
          src="/mingcutetwitterline.svg"
        />
        <img
          className="quillmail-icon"
          loading="lazy"
          alt=""
          src="/quillmail.svg"
        />
        <img
          className="simple-line-iconssocial-faceb"
          loading="lazy"
          alt=""
          src="/simplelineiconssocialfacebook.svg"
        />
        <img
          className="tdesignlocation-icon"
          loading="lazy"
          alt=""
          src="/tdesignlocation.svg"
        />
        <img
          className="vaadinqrcode-icon"
          loading="lazy"
          alt=""
          src="/vaadinqrcode.svg"
        />
      </footer>
      <QuillmailIcon />
    </div>
  );
};

export default Desktop;
