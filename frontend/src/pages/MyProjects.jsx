import { Projet } from "../components/Projet";
import { projetProfil } from "/src/components/Card";

export default function MyProjects() {
  return (
    <div className="projets-container">
      <h1>My Projects</h1>
      {projetProfil.map((projet) => (
        <Projet key={projet.id} {...projet} />
      ))}
    </div>
  );
}
