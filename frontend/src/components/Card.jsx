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
    github: "",
  },
  {
    id: 2,
    type: "recent",
    title: "Food treck",
    image: "src/assets/FoodTreck.img/foodTreck.logo.png",
    txt: "",

    github: "",
  },
  {
    id: 3,
    type: "recent",
    title: "Wild Eater",
    image: "src/assets/Wildeats.img/logo.wildeats.png",
    txt: "",

    github: "",
  },
  { id: 4, type: "past", title: "Hackathon", image: "", txt: "", github: "" },
  {
    id: 5,
    type: "past",
    title: "AEN Tech",
    image: "src/assets/Aentech.img/logo.aentech.png",
    txt: "",

    github: "",
  },
  { id: 6, type: "past", title: "Replik", image: "", txt: "", github: "" },
  {
    id: 7,
    type: "hackathon",
    title: "l'Hackathastrphe",
    image: "",
    txt: "",
    github: "",
  },
  {
    id: 8,
    type: "hackathon",
    title: "L'Idéal",
    image: "",
    txt: "",
    github: "",
  },
  {
    id: 9,
    type: "projetPerso",
    title: "My Portfolio",
    image: "",
    txt: "",
    github: "",
  },
  {
    id: 10,
    type: "projetPerso",
    title: "WCS PROMO JS BORDEAUX 2023/24",
    image: "",
    txt: "",
    github: "",
  },
  {
    id: 11,
    type: "projetPerso",
    title: "ARROS",
    image: "",
    txt: "",
    github: "",
  },
]; // Utiliser slice pour obtenir les six premiers éléments;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export { Card, projetProfil };
