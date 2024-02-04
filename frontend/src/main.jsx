import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";

import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyProjects from "./pages/MyProjects.jsx";
import Contact from "./pages/Contact.jsx";
import DarkModeProvider from "./context/DarkModeProvider.jsx";
import Login from "./pages/Login.jsx";
import ContextProvider from "./context/Context.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import MyPastProjects from "./pages/MyPastProjects.jsx";
import Hackathon from "./pages/Hackathons.jsx";
import ProjectsPerso from "./pages/ProjetsPerso.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DarkModeProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </DarkModeProvider>
    ),

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mesprojets",
        element: <MyProjects />,
      },
      {
        path: "/mesanciensprojets",
        element: <MyPastProjects />,
      },
      {
        path: "/hackathons",
        element: <Hackathon />,
      },
      {
        path: "/projetsperso",
        element: <ProjectsPerso />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contactform",
        element: <ContactForm />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
