import { useTheContext } from "../context/Context";
import { Card, projetProfil } from "/src/components/Card";
import { MDBBtn, MDBCardImage } from "mdb-react-ui-kit";

export default function Home() {
  const { langages } = useTheContext();
  const recentProjects = projetProfil.filter(
    (projet) => projet.type === "recent"
  );

  const pastProjects = projetProfil.filter((projet) => projet.type === "past");
  return (
    <>
      <div className="accueil">
        <div className="accueil-title">
          <h1 className="accueil-title">AURORE VALLEIX</h1>
          <h2 className="accueil-title">DEVELOPPEUSE WEB FULLSTACK</h2>
          <h3 className="accueil-title">My Portfolio</h3>
        </div>

        <MDBCardImage
          className="img-profil-home"
          src="src/assets/Profil.img/profil1.jpg"
          alt="my-portrait"
          fluid
        />
      </div>
      <section id="a_propos" className="a-propos">
        <div>
          <div className="a-propos-title">
            <p>A Propos de moi</p>
          </div>
          <p>
            En reconversion, j’ai su réorganiser ma vie pour un nouveau
            challenge ! Désormais orientée vers le développement web, je suis en
            plein apprentissage. Toujours en recherche et découverte, je
            souhaite approfondir mes connaissances . Prête à coder avec style et
            efficacité !”
          </p>
          <div className="langages">
            {langages.map((langage) => (
              <div className="circle" key={langage.id}>
                {langage.name}
              </div>
            ))}
          </div>
        </div>
        <div className="img2-container">
          <img
            className="img2"
            src="./src/assets/Profil.img/img2.profil.png"
            alt="my-portrait-2"
          />
        </div>
      </section>
      <div className="profilproject">
        <div>
          <h2 className="title-recent-project">Projets récents</h2>
        </div>
        <div className="recent-project-card">
          <div className="recent-project">
            {recentProjects.map((projet) => (
              <Card key={projet.id} {...projet} />
            ))}
          </div>
          <div className="btn-plus">
            <MDBBtn className="rounded-pill" color="dark" href="#">
              Voir +
            </MDBBtn>
          </div>
          <div className="past-project-card">
            <h2 className="title-recent-project">Projets passés</h2>
            <div className="past-project">
              {pastProjects.map((projet) => (
                <Card key={projet.id} {...projet} />
              ))}
            </div>
            <div className="btn-plus">
              <MDBBtn className="rounded-pill" color="dark" href="#">
                Voir +
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
