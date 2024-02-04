import { DarkModeContext } from "../context/DarkModeProvider";
import { useContext, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import ToggleButton from "./ToggleButton";
import DropDown from "./DropDown";

export default function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="content">
      <MDBNavbar
        expand="lg"
        light={!darkMode}
        dark={darkMode}
        bgColor={darkMode ? "dark" : "light"}
      >
        <MDBContainer fluid>
          <ToggleButton />
          <MDBNavbarBrand>
            <img
              src="src/assets/Profil.img/LOGO.AV.CERCLE.png"
              alt="logo_rond"
              height="30"
            />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink href="/">Home</MDBNavbarLink>
              </MDBNavbarItem>

              <DropDown />

              <MDBNavbarItem>
                <MDBNavbarLink href="/#a_propos">A propos de Moi</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/contact">Contactez-Moi</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">login</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/register"></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
