"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { bgPrimary } from "@/lib/constants";
import { initializeFirebase } from "@/lib/firebase";

export default function Home() {
  useEffect(() => {
    // Initialize Firebase once when app loads
    initializeFirebase();

    console.log(
      "%cI'm not a great programmer; I'm just a good programmer with great skills (of asking AI).",
      [
        "font-size: 12px",
        "font-family: monospace",
        "background: #00f9d0",
        "display: inline-block",
        "color: black",
        "padding: 8px 20px",
        "margin: 8px 19px",
        "border: 1px dashed;",
      ].join(";")
    );
  }, []);

  return (
    <div className={`${bgPrimary} text-white`}>
      <a
        href="https://gruz.ch"
        className="sticky py-1 top-0 w-full bg-red-500 z-50 block text-center"
      >
        New launch - www.gruz.ch (view →)
      </a>
      <Header />
      <Hero />
      <div className="space-y-24 md:space-y-32">
        <Highlights />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
