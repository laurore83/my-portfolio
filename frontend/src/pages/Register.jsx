import { useState } from "react";
import { MDBBtn, MDBInput, MDBSwitch } from "mdb-react-ui-kit";
import { useTheContext } from "../context/Context";

function Register() {
  const [formValue, setFormValue] = useState({
    email: "elea@gmail.com",
    password: "1234",
    is_admin: false,
  });

  const { register } = useTheContext();

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <MDBInput
        value={formValue.email}
        name="email"
        onChange={onChange}
        id="validationCustom01"
        required
        label="Email"
        type="email"
      />
      <MDBInput
        value={formValue.password}
        name="password"
        onChange={onChange}
        id="validationCustom02"
        required
        pattern="^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$"
        label="Password"
        type="password"
      />
      {/*} <MDBInput
        className="mb-4"
        type="password"
        name="confirmPassword"
        pattern="^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$"
        label="Confirmer le mot de passe"
        value={formValue.confirmPassword}
        onChange={onChange}
  />
      <MDBSwitch
        id="flexSwitchCheckDefault"
        label="Admin"
        onClick={() =>
          setFormValue({ ...formValue, is_admin: !formValue.admin })
        }
      />
*/}
      <MDBBtn onClick={() => register(formValue)}>Enregistrement</MDBBtn>
    </div>
  );
}

export default Register;
