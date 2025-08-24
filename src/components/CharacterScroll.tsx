import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import character from "../data/character.png"; // Replace with your character image path

const CharacterScroll: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Move character horizontally based on scroll
  const x = useTransform(scrollYProgress, [0, 1],[0,0]);

  return (
        <motion.img
          src={character}
          alt="Character"
          style={{ x }}
          className="fixed top-1/2 -translate-y-1/2 right-0 w-60 h-60 z-50"
        />
  );
};

export default CharacterScroll;
