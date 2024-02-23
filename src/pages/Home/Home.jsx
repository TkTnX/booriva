import React from "react";
import { Hero } from "./elements/Hero/Hero";
import { New } from "./elements/New/New";
import { NewCollection } from "./elements/New-collection/NewCollection";
import { Marquee } from "./elements/Marquee/Marquee";

export const Home = () => {
  return (
    <main>
      <Hero />
      <New />
      <NewCollection />
      <Marquee />
    </main>
  );
};
