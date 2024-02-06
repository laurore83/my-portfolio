import { Projet } from "../components/Projet";
import { useTheContext } from "../context/Context";

export default function MyProjects() {
  const { projets } = useTheContext();

  const recentProjects = projets.filter((projet) => projet.type === "recent");
  return (
    <div className="projets-container">
      <h1>My Projects</h1>
      {recentProjects.map((projet) => (
        <Projet key={projet.id} {...projet} />
      ))}
    </div>
  );
}
