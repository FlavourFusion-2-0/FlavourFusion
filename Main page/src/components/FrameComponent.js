import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="desktop-1-inner1">
      <div className="feedback-box-parent">
        <img
          className="feedback-box-icon"
          loading="lazy"
          alt=""
          src="/rectangle-9@2x.png"
        />
        <div className="location-icon">
          <div className="what-they-say-parent">
            <div className="what-they-say">What they say !!</div>
            <div className="mission-statement">
              <div className="feedback-message">
                <div className="when-it-comes-container">
                  <p className="when-it-comes-to-ingredients">
                    <span className="when-it-comes">
                      When it comes to ingredients, less is often more.
                    </span>
                  </p>
                  <p className="something-with-three-or-four-i">
                    <span>
                      <span className="span1">"</span>
                      <span className="something-with-three">{`Something with three or four ingredients that go really well together is better than something with 12 ingredients that clash with each other." `}</span>
                      <span>—</span>
                    </span>
                    <a
                      className="udaneoid"
                      href="https://www.reddit.com/r/AskReddit/comments/5s70ly/chefs_of_reddit_whats_your_number_one_useful/ddcx5yx/"
                      target="_blank"
                    >
                      <span>
                        <span>
                          <span className="udaneoid1">u/daneoid</span>
                        </span>
                      </span>
                    </a>
                  </p>
                </div>
                <div className="privacy-policy-link">
                  <h2 className="cookies-policy-link">{`  ->`}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
