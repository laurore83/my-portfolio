import { Projet } from "../components/Projet";
import { useTheContext } from "../context/Context";

export default function Hackathon() {
  const { hackProjects } = useTheContext();

  return (
    <div className="projets-container">
      <h1>Hackathon</h1>
      {hackProjects.map((projet) => (
        <Projet key={projet.id} {...projet} />
      ))}
    </div>
  );
}
