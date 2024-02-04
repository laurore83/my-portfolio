import { projetProfil } from "../components/Card";
import { Projet } from "../components/Projet";

export default function ProjectsPerso() {
  const pastProjects = projetProfil.filter((projet) => projet.type === "past");

  return (
    <div className="projets-container">
      <h1>Projets Perso</h1>
      {pastProjects.map((projet) => (
        <Projet key={projet.id} {...projet} />
      ))}
    </div>
  );
}
