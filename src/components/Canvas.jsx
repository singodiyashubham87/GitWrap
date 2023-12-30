import { useEffect } from "react";
import getCanvas from "../utils/getCanvas";

const Canvas = () => {
  useEffect(() => {
    getCanvas();
  }, []);

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 overflow-hidden">
      <canvas id="myCanvas"></canvas>
    </div>
  );
};

export default Canvas;
