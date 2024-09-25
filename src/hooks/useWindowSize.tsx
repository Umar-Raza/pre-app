import React, { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    hight: window.innerHeight,
  });
  useEffect(() => {
    const handaleResize = () => {
      setSize({ width: window.innerWidth, hight: window.innerHeight });
    };
    window.addEventListener("resize", handaleResize);
    return () => {
      return window.removeEventListener("resize", handaleResize);
    };
  }, []);
  return size;
};
