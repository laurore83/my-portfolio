import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import PropTypes from "prop-types";

const Card = ({ id, title, image }) => (
  <>
    <div className="card" key={id}>
      <img className="card-img" src={image} alt="..." />
    </div>
    <div className="text-dark ">{title}</div>
  </>
);
const projetProfil = [
  {
    id: 1,
    type: "recent",
    title: "Geocode",
    image: "src/assets/Geocode.img/geocode.logo.png",
    txt: "",
    github: "https://github.com/WildCodeSchool/2023-09-JS-BDX-P3-lesgeocodeurs",
  },
  {
    id: 2,
    type: "recent",
    title: "Food treck",
    image: "src/assets/FoodTreck.img/foodTreck.logo.png",
    txt: "https://github.com/WildCodeSchool/2023-09-JS-BDX-P2-hakuna-matata",

    github: "",
  },
  {
    id: 3,
    type: "recent",
    title: "WildEats",
    image: "src/assets/Wildeats.img/logo.wildeats.png",
    txt: "",

    github: "https://github.com/laurore83/Wild-eats-Projet-1",
  },
  {
    id: 4,
    type: "past",
    title: "AEN Tech",
    image: "src/assets/Aentech.img/logo.aentech.png",
    txt: "",

    github: "",
  },
  {
    id: 5,
    type: "past",
    title: "Replik",
    image: "",
    txt: "",
    github: "https://github.com/laurore83/Replik",
  },
  {
    id: 6,
    type: "hackathon",
    title: "Calendrier de l'avent",
    image: "",
    txt: "",
    github:
      "https://github.com/WildCodeSchool/2023-09-bordeaux-hackathon-L-Hackatastrophe",
  },
  {
    id: 7,
    type: "hackathon",
    title: "L'Idéal",
    image: "",
    txt: "",
    github: "https://github.com/WildCodeSchool/lideal",
  },
  {
    id: 8,
    type: "projetPerso",
    title: "My Portfolio",
    image: "",
    txt: "",
    github: "https://github.com/laurore83/my-portfolio",
  },
  {
    id: 9,
    type: "projetPerso",
    title: "WCS PROMO JS BORDEAUX 2023/24",
    image: "",
    txt: "",
    github: "https://github.com/laurore83/wcs",
  },
  {
    id: 10,
    type: "projetPerso",
    title: "ARROS",
    image: "",
    txt: "",
    github:
      "https://github.com/WildCodeSchool/2023-09-js-bordeaux-checkpoint-4/pull/12",
  },
]; // Utiliser slice pour obtenir les six premiers éléments;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};
export { Card, projetProfil };
