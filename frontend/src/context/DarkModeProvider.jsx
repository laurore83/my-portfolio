import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const DarkModeContext = createContext();

// début du composant
export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
}
DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
