"use client";
import HeroComponent from "@/components/hero/hero.component";
import ReportButton from "@/components/report_button";
import RepositoryComponent from "@/components/repository/repository.component";
import { useState } from "react";

export default function Home() {
  const [generateText, setGenerateText] = useState<string>("");
  return (
    <main>
      <HeroComponent setGenerateText={setGenerateText} />
      <RepositoryComponent generateText={generateText} />
      <ReportButton />
    </main>
  );
}
