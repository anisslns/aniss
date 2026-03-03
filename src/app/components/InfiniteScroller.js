"use client";

import { useEffect, useRef } from "react";

export default function InfiniteScroll({
  className,
  images = [],
  direction = "left",
  speed = "normal",
}) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      scrollerRef.current
    ) {
      const scroller = scrollerRef.current;
      scroller.setAttribute("data-animated", "true");

      const inner = scroller.querySelector(".scroller__inner");
      const content = Array.from(inner.children);

      content.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        inner.appendChild(clone);
      });
    }
  }, []);

  return (
    <div
      ref={scrollerRef}
      className={`scroller max-md:mb-10 ${className}`}
      data-direction={direction}
      data-speed={speed}
    >
      <div className="scroller__inner">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" loading="eager" />
        ))}
      </div>
    </div>
  );
}
