import React from "react";
import BlurhashCanvas from "./BlurhashCanvas";

const Blurhash = ({
  hash,
  height,
  width,
  punch,
  resolutionX,
  resolutionY,
  style,
  ...rest
}) => {
  const canvasStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%"
  };

  return (
    <div
      {...rest}
      style={{
        display: "inline-block",
        height,
        width,
        ...style,
        position: "relative"
      }}
    >
      <BlurhashCanvas
        hash={hash}
        height={resolutionY}
        width={resolutionX}
        punch={punch}
        style={canvasStyle}
      />
    </div>
  );
};

Blurhash.defaultProps = {
  height: 200,
  width: 200,
  resolutionX: 200,
  resolutionY: 300
};

export default Blurhash;
