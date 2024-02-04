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
  },
  {
    id: 2,
    type: "recent",
    title: "Food treck",
    image: "src/assets/FoodTreck.img/foodTreck.logo.png",
  },
  {
    id: 3,
    type: "recent",
    title: "Wild Eater",
    image: "src/assets/Wildeats.img/logo.wildeats.png",
  },
  { id: 4, type: "past", title: "Hackathon", image: "" },
  {
    id: 5,
    type: "past",
    title: "AEN Tech",
    image: "src/assets/Aentech.img/logo.aentech.png",
  },
  { id: 6, type: "past", title: "Replik", image: "" },
]; // Utiliser slice pour obtenir les six premiers éléments;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export { Card, projetProfil };
