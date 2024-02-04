import PropTypes from "prop-types";

const Projet = ({ id, title, image }) => (
  <div className="modelProjet" key={id}>
    <div className="grid-container projet">
      <div className="grid-item project-first-view">
        <div className="grid-item photo-projet">
          <img src={image} />
        </div>

        <div className="grid-item resume-projet">resumé projet</div>
        <div className="github-link">
          <li>Lien GitHub</li>
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
};
export { Projet };
