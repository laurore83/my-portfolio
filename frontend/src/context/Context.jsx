import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const theContext = createContext();

export default function ContextProvider({ children }) {
  //const givenData = useLoaderData();
  //const [isAdmin, setIsAdmin] = useState(givenData?.preloadUser?.data?.isAdmin);
  // [user, setUser] = useState(givenData?.preloadUser?.data);
  // const [basicDanger, setBasicDanger] = useState(false);
  // const navigate = useNavigate();
  // const login = async (credentials) => {
  //   try {
  //     const data = await apiService.post(
  //       `http://localhost:3312/login`,
  //       credentials
  //     );
  //     localStorage.setItem("token", data.token);

  //     apiService.setToken(data.token);

  //     const result = await apiService.get("http://localhost:3312/users/me");

  //     alert(`Content de vous revoir ${result.data.email}`);
  //     setUser(result.data);
  //     //  if (result.data.isAdmin === 1) {
  //     //    return navigate("/admin/demo");
  //     //  }
  //     return navigate("/demo");
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }

  //   return null;
  // };

  // const register = async (newUser) => {
  //   try {
  //     setUser(await axios.post("http://localhost:3312/users", newUser));
  //     alert(`Bienvenue ${newUser.email}`);
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  // const logout = () => {
  //   setUser(undefined);
  //   setIsAdmin(false);
  //   localStorage.clear();
  //   return navigate("/demo");
  // };
  // exemple méthodes pour communiquer avec une api
  const [langages, setLangages] = useState([]);
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    const fetchLangages = async () => {
      try {
        const response = await axios.get("http://localhost:3312/langages");
        setLangages(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des langages :", err);
      }
    };
    fetchLangages();
  }, []);

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const response = await axios.get("http://localhost:3312/projets");
        setProjets(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des projets :", err);
      }
    };
    fetchProjets();
  }, []);

  // const newLangages = async (newlangages) => {
  //   try {
  //     setLangages(
  //       await axios.post("http://localhost:3312/langages", newlangages)
  //     );
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  // const contextData = useMemo(
  //   () => ({ login, logout, register, newLangages, langages }),
  //   [login, logout, register, newLangages, langages]
  // );
  const contextData = useMemo(
    () => ({ langages, projets }),
    [langages, projets]
  );

  return (
    <theContext.Provider value={contextData}>{children}</theContext.Provider>
  );
}

ContextProvider.propTypes = { children: PropTypes.node.isRequired };
export const useTheContext = () => useContext(theContext);
