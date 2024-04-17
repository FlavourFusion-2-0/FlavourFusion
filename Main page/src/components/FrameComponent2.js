import { useMemo } from "react";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  nONVEG,
  propPadding,
  propPadding1,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const nONVEGStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="vector-group" style={frameDivStyle}>
      <img
        className="ellipse-icon"
        loading="lazy"
        alt=""
        src="/ellipse-8@2x.png"
      />
      <div className="non-veg-wrapper" style={frameDiv1Style}>
        <div className="non-veg" style={nONVEGStyle}>
          {nONVEG}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
