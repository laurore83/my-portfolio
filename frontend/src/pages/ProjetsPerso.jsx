import { Projet } from "../components/Projet";
import { useTheContext } from "../context/Context";

export default function ProjectsPerso() {
  const { persoProjects } = useTheContext();

  return (
    <div className="projets-container">
      <h1>Projets Perso</h1>
      {persoProjects.map((projet) => (
        <Projet key={projet.id} {...projet} />
      ))}
    </div>
  );
}
