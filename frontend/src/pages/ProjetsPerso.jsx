import { Projet } from "../components/Projet";
import { useTheContext } from "../context/Context";

export default function ProjectsPerso() {
  const { projets } = useTheContext();

  const pastProjects = projets.filter((projet) => projet.type === "past");

  return (
    <div className="projets-container">
      <h1>Projets Perso</h1>
      {pastProjects.map((projet) => (
        <Projet key={projet.id} {...projet} />
      ))}
    </div>
  );
}
