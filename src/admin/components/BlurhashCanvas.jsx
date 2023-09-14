import { decode } from "blurhash";
import { useRef } from "react";

const BlurhashCanvas = ({ height, width, hash, punch, ...rest }) => {
  const canvasRef = useRef(null);

  const pixels = decode(hash, height, width, punch);

  if (canvasRef.current) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(height, width);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
  }

  return (
    <canvas height={height} width={width} {...rest} ref={canvasRef}></canvas>
  );
};

export default BlurhashCanvas;

BlurhashCanvas.deaultProps = {
  height: 200,
  width: 400,
  punch: 1
};
