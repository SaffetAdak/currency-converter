"use client";

import { useAnimate } from "@/lib/hooks";
import { extractCode } from "@/lib/utils";
import { useCurrencyStore } from "@/store/currencyStore";
import { motion } from "framer-motion";
export default function Rate() {
  const { from, to, rate } = useCurrencyStore();
  const { border, boxShadow } = useAnimate();
  return (
    <motion.div
      style={{ border, boxShadow }}
      className="text-center rounded-lg text-zinc-100 sm:mx-72 p-2 sm:py-2"
    >
      <h2>{`Rate: 1 ${extractCode(from)} = ${rate} ${extractCode(to)}`}</h2>
    </motion.div>
  );
}
