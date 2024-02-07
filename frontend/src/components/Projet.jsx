import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//  import Pelemele from "./PelemeleGeo";

const Projet = ({ id, lien_github, title, img }) => (
  <div className="modelProjet" key={id}>
    <div className="grid-container projet">
      <div className="grid-item project-first-view">
        <div className="grid-item photo-projet">
          {/* <Pelemele /> */}
          <div className="grid-img">
            <img src={img} />
            <img src={img} />
          </div>
          <img src={img} />
        </div>

        <div className="grid-item resume-projet">resumé projet</div>
        <div className="github-link">
          <Link to={lien_github}> lien github </Link>
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
  img: PropTypes.string.isRequired,
  lien_github: PropTypes.string.isRequired,
};
export { Projet };
