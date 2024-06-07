import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app";

const initialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "spark battery",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "spark battery",
        image: "./images/about1.svg",
      },
    });
  };

  //  to get the API data
  const getServices = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  // to call the API
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
