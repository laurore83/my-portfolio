import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

export default function DropDown() {
  return (
    <MDBDropdown group className="shadow-0">
      <MDBDropdownToggle color="light">Projets</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBNavbarLink href="/mesprojets">Projets Récents</MDBNavbarLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBNavbarLink href="/Hackathons">Hackathon</MDBNavbarLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBNavbarLink href="/projetsperso">Projets Perso</MDBNavbarLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBNavbarLink href="/mesanciensprojets">
            Anciens Projets
          </MDBNavbarLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
