import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <ThreeCircles
        height="60"
        width="60"
        color="secondary"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );
};

export default Loader;
