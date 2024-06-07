"use client";
import Converter from "@/components/Converter";
import Header from "@/components/Header";
import { useAnimate } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  const { backgroundImage } = useAnimate();
  return (
    <main className="">
      <motion.section
        style={{ backgroundImage }}
        className="flex flex-col items-center relative min-h-screen place-content-center overflow-hidden px-4  bg-gray-950 text-gray-200"
      >
        <Header />
        <Converter />
      </motion.section>
      <div className="absolute inset-0 z-0 ">
        <Canvas>
          <Stars radius={55} count={750} fade speed={2} />
        </Canvas>
      </div>
    </main>
  );
}
