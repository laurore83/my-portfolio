import { Projet } from "../components/Projet";
import { useTheContext } from "../context/Context";

export default function MyPastProjects() {
  const { pastProjects } = useTheContext();

  return (
    <div className="projets-container">
      <h1>My PastProjects</h1>
      {pastProjects.map((projet) => (
        <Projet key={projet.id} {...projet} />
      ))}
    </div>
  );
}
