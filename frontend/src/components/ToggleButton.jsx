import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  //return <button onClick={toggleDarkMode}>Toggle</button>;

  return (
    <label className="switch">
      <input type="checkbox" onClick={toggleDarkMode} />
      <span></span>
    </label>
  );
}
