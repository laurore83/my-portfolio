import { FormspreeProvider } from "@formspree/react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import { DarkModeContext } from "./context/DarkModeProvider.jsx";
import { useContext } from "react";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <FormspreeProvider project="{your-project-id}">
      <div className={`app ${darkMode && "dark-theme"}`}>
        <NavBar />
        <Outlet />
      </div>
    </FormspreeProvider>
  );
}

export default App;
