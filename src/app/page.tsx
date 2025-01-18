import HeaderComponent from "@/components/header/header.component";
import HeroComponent from "@/components/hero/hero.component";
import RepositoryComponent from "@/components/repository/repository.component";

export default function Home() {
  return (
    <main>
      {/* <HeaderComponent /> */}
      <HeroComponent />
      <RepositoryComponent />
    </main>
  );
}
