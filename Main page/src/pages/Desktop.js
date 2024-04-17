import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import QuillmailIcon from "../components/QuillmailIcon";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <section className="desktop-1-inner">
        <header className="frame-parent">
          <div className="frame-wrapper">
            <div className="frame-group">
              <div className="frame-container">
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="home">HOME</div>
                </div>
              </div>
              <div className="frame-div">
                <div className="vector-parent">
                  <img className="frame-item" alt="" src="/rectangle-1.svg" />
                  <div className="about">ABOUT</div>
                </div>
              </div>
              <div className="rectangle-group">
                <div className="frame-inner" />
                <div className="policy-action">{`POLICY & ACTION`}</div>
              </div>
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <div className="log-in">LOG IN</div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent1">
            <div className="frame-child1" />
            <div className="flavour-fusion"> FLAVOUR FUSION</div>
          </div>
        </header>
      </section>
      <div className="desktop-1-item" />
      <section className="frame-section">
        <div className="frame-parent1">
          <div className="frame-wrapper1">
            <div className="frame-parent2">
              <div className="top-rated-wrapper">
                <div className="top-rated">TOP RATED</div>
              </div>
              <img
                className="rectangle-icon"
                loading="lazy"
                alt=""
                src="/rectangle-6.svg"
              />
            </div>
          </div>
          <FrameComponent1 />
          <div className="rectangle-parent2">
            <div className="frame-child2" />
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
