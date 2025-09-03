import React, { useEffect, useMemo, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile=useMemo(()=>{
       if(screenSize<640) return true;
       return false
  },[screenSize])

  return {isMobile};
};

export default useScreenSize;
