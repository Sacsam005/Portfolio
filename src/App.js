import React, { useEffect, useState, useRef } from "react";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { Routes, Route } from "react-router-dom";
import "./App.sass";

export const AppContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const appRef = useRef(null);

  const slideDownVariants = {
    hidden: { y: -70, transformOrigin: "top" },
    visible: {
      y: 0,
      transformOrigin: "top",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const slideUpVariants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        damping: 50, // Controls the stiffness of the spring. Increase for less bouncing.
        mass: 1, // Controls the mass of the moving object. Increase for slower movement.
        stiffness: 200, // Controls the stiffness of the spring. Increase for faster movement.
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  // Dark mode setup
  function handleDarkMode() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      setDarkMode(true);
      appRef.current.classList.add("dark_mode");
      localStorage.setItem("selectedTheme", "dark");
    } else {
      setDarkMode(false);
      appRef.current.classList.remove("dark_mode");
      localStorage.removeItem("selectedTheme", "dark");
    }
  }

  function darkModeForSmallerDiv(domObject) {
    if (domObject && domObject.length > 1) {
      if (darkMode) {
        domObject.forEach((div) => {
          div.style.backgroundColor = "#272727";
          div.style.color = "#ddd";
        });
      } else {
        domObject.forEach((div) => {
          div.style.backgroundColor = "#ddd";
          div.style.color = "#222";
        });
      }
    } else {
      if (darkMode) {
        domObject.style.backgroundColor = "#272727";
        domObject.style.color = "#ddd";
      } else {
        domObject.style.backgroundColor = "#ddd";
        domObject.style.color = "#222";
      }
    }
  }

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark" || selectedTheme === null) {
      setDarkMode(true);
      appRef.current.classList.add("dark_mode");
      localStorage.setItem("selectedTheme", "dark");
    } else {
      setDarkMode(false);
      appRef.current.classList.remove("dark_mode");
    }

    setIsLoading(false);
  }, []);

  const AppContextValues = {
    slideDownVariants,
    slideUpVariants,
    darkMode,
    setDarkMode,
    handleDarkMode,
    darkModeForSmallerDiv,
    isLoading,
    setIsLoading,
  };

  return (
    <>
      <div className="app" ref={appRef}>
        <AppContext.Provider value={AppContextValues}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
