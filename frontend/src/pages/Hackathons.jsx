import { projetProfil } from "../components/Card";
import { Projet } from "../components/Projet";

export default function Hackathon() {
  const pastProjects = projetProfil.filter((projet) => projet.type === "past");

  return (
    <div className="projets-container">
      <h1>Hackathon</h1>
      {pastProjects.map((projet) => (
        <Projet key={projet.id} {...projet} />
      ))}
    </div>
  );
}
