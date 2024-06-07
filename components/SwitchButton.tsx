"use client";
import { RiExchangeLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useAnimate } from "@/lib/hooks";

export default function SwitchButton({ onSwitch }: any) {
  const { border, boxShadow } = useAnimate();

  return (
    <motion.button
      className="group relative flex w-fit items-center rounded-full bg-none transition hover:scale-110 active:scale-95 focus:outline-none"
      style={{ border, boxShadow }}
    >
      <RiExchangeLine
        className="text-5xl text-white cursor-pointer transition group-hover:-rotate-180 group-active:rotate-180"
        onClick={onSwitch}
      />
    </motion.button>
  );
}
