import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const winScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[1.5px] z-50 bg-transparent">

      <div
        className="h-full bg-blue-600/70 rounded-full transition-all duration-150"
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
