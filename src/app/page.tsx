import HeaderComponent from "@/components/header/header.component";
import RepositoryComponent from "@/components/repository/repository.component";

//https://first-issue-server.vercel.app/api/v1/repository
export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <RepositoryComponent />
    </main>
  );
}
