import FrameComponent2 from "./FrameComponent2";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-parent3">
      <div className="rectangle-parent3">
        <div className="frame-child3" />
        <div className="ellipse-div" />
        <div className="search-your-recipe-wrapper">
          <div className="search-your-recipe"> SEARCH YOUR RECIPE</div>
        </div>
        <img className="line-icon" alt="" />
      </div>
      <div className="instagram-facebook-social-medi-wrapper">
        <div className="instagram-facebook-social-medi">
          <div className="ellipse-parent">
            <img
              className="frame-child4"
              loading="lazy"
              alt=""
              src="/ellipse-4@2x.png"
            />
            <div className="veg-wrapper">
              <div className="veg">VEG</div>
            </div>
          </div>
          <FrameComponent2 nONVEG="NON-VEG" />
          <div className="vector-container">
            <img
              className="frame-child5"
              loading="lazy"
              alt=""
              src="/ellipse-6@2x.png"
            />
            <div className="lunch-wrapper">
              <div className="lunch">
                <span>{` `}</span>
                <span className="lunch1">LUNCH</span>
              </div>
            </div>
          </div>
          <FrameComponent2
            nONVEG="DINNER"
            propPadding="unset"
            propPadding1="0px var(--padding-23xl) 0px var(--padding-19xl)"
            propMinWidth="124px"
          />
          <div className="skill-icon-container">
            <div className="follow-us-call-to-action-butto">
              <img
                className="follow-us-call-to-action-butto-child"
                loading="lazy"
                alt=""
                src="/ellipse-5@2x.png"
              />
            </div>
            <div className="breakfast">BREAKFAST</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
