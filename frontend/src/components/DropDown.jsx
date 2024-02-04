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
          <MDBNavbarLink href="/mesprojets">Récent</MDBNavbarLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBNavbarLink href="/Hackathons">Hackathon</MDBNavbarLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBNavbarLink href="/projetsperso">Perso</MDBNavbarLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBNavbarLink href="/mesanciensprojets">Ancien</MDBNavbarLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
