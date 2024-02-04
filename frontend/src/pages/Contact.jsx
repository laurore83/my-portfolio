export default function Contact() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <div className="contact">Work with me</div>
          <img
            className="img-contact"
            src="./src/assets/Profil.img/profil3.png"
            alt=""
          />
        </div>
        <div className="grid-item full-height">
          <div className="vertical-text"> Aurore Valleix</div>
        </div>

        <div className="grid-item-list">
          <ul>
            <li>
              <span>Address </span> <div id="barre1"></div>
              <span className="coord"> Bordeaux</span>
            </li>

            <li>
              <span>Phone</span> <div id="barre2"></div>
              <span className="coord"> 06 30 50 59 91</span>
            </li>
            <li>
              <span>Email</span> <div id="barre3"></div>
              <span className="coord"> laurore83@yahoo.fr</span>
            </li>
            <li>
              <img
                className="icon"
                src="./src/assets/icon.img/linkdin.png"
                alt=""
              />
              <div id="barre4"></div>
              <span className="coord"> Aurore Valleix</span>
            </li>
            <li>
              <img
                className="icon"
                src="./src/assets/icon.img/github.png"
                alt=""
              />
              <div id="barre4"></div>
              <span className="coord"> @laurore83</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
