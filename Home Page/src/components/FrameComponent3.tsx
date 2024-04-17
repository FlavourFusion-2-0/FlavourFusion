import { FunctionComponent } from "react";
import "./FrameComponent3.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className="frame-section">
      <header className="frame-container">
        <div className="frame-div">
          <div className="frame-parent1">
            <div className="frame-wrapper1">
              <div className="rectangle-group">
                <div className="frame-inner" />
                <div className="home">HOME</div>
              </div>
            </div>
            <div className="frame-wrapper2">
              <div className="vector-parent">
                <img className="rectangle-icon" alt="" src="/rectangle-1.svg" />
                <div className="about">ABOUT</div>
              </div>
            </div>
            <div className="rectangle-container">
              <div className="rectangle-div" />
              <div className="policy-action">{`POLICY & ACTION`}</div>
            </div>
            <div className="rectangle-parent1">
              <div className="frame-child1" />
              <div className="log-in">LOG IN</div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent2">
          <div className="frame-child2" />
          <div className="flavour-fusion"> FLAVOUR FUSION</div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent3;
