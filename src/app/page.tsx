"use client";
import HeaderComponent from "@/components/header/header.component";
import HeroComponent from "@/components/hero/hero.component";
import RepositoryComponent from "@/components/repository/repository.component";
import { useState } from "react";

export default function Home() {
  const [generateText, setGenerateText] = useState<string>("");
  return (
    <main>
      {/* <HeaderComponent /> */}
      <HeroComponent setGenerateText={setGenerateText} />
      <RepositoryComponent generateText={generateText} />
    </main>
  );
}
