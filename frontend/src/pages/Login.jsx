import { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useTheContext } from "../context/Context";

function Login() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const { login } = useTheContext();

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
        label="Password"
        type="password"
      />
      <MDBInput
        className="mb-4"
        type="password"
        name="confirmPassword"
        label="Confirmer le mot de passe"
        value={formValue.confirmPassword}
        onChange={onChange}
      />
      <MDBBtn onClick={() => login(formValue)}>Connexion</MDBBtn>
    </div>
  );
}

export default Login;
