import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { colors } from "./data";

export function useAnimate() {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(65% 125% at 50% 50%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 2px 20px ${color}`;

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return { backgroundImage, border, boxShadow };
}
