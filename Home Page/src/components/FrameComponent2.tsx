import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  nONVEG?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  nONVEG,
  propPadding,
  propPadding1,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const nONVEGStyle: CSSProperties = useMemo(() => {
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
