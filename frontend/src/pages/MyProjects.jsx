import { Projet } from "../components/Projet";
import { projetProfil } from "/src/components/Card";

export default function MyProjects() {
  const recentProjects = projetProfil.filter(
    (projet) => projet.type === "recent"
  );
  return (
    <div className="projets-container">
      <h1>My Projects</h1>
      {recentProjects.map((projet) => (
        <Projet key={projet.id} {...projet} />
      ))}
    </div>
  );
}
