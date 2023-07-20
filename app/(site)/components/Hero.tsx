"use client";

import SectionContainer from "@/app/components/SectionContainer";
import animateText from "@/app/utils/animateText";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

const Hero = () => {
  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const id = animateText(
      "Simply write your content and keep blogging...",
      index,
      setText,
      setIndex
    );

    return () => clearTimeout(id);
  }, [index]);
  return (
    <SectionContainer>
      <div className="flex h-[340px]">
        <h1
          className="font-bold text-7xl text-slate-900 max-w-md"
          style={{
            textShadow:
              "0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
          }}
        >
          {text}
        </h1>
        <div className="absolute right-[120px] bottom-[80px]">
          <ThreeCircles
            height="100"
            width="100"
            color="secondary"
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
