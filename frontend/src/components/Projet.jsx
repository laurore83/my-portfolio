import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//  import Pelemele from "./PelemeleGeo";

const Projet = ({ id, github, title, image }) => (
  <div className="modelProjet" key={id}>
    <div className="grid-container projet">
      <div className="grid-item project-first-view">
        <div className="grid-item photo-projet">
          {/* <Pelemele /> */}
          <div className="grid-img">
            <img src={image} />
            <img src={image} />
          </div>
          <img src={image} />
        </div>

        <div className="grid-item resume-projet">resumé projet</div>
        <div className="github-link">
          <Link to={github}> lien github </Link>
        </div>
      </div>
      <div className="grid-item full-height">
        <div className="vertical-text">{title}</div>
      </div>
    </div>
  </div>
);
Projet.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};
export { Projet };
