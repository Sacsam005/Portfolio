import React, { useEffect, useState, useRef } from "react";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.sass";

// Global contexts export
export const SlideDownContext = React.createContext();
export const SlideUpContext = React.createContext();
export const ThemeContext = React.createContext();
export const FloatingCardContext = React.createContext();
export const LoadingContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [slideFloatingCard, setSlideFloatingCard] = useState(false);
  const floatingContainerRef = useRef(null);
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
          div.style.backgroundColor = "#2E386A";
          div.style.color = "#fff";
        });
      } else {
        domObject.forEach((div) => {
          div.style.backgroundColor = "#fff";
          div.style.color = "#222";
        });
      }
    } else {
      if (darkMode) {
        domObject.style.backgroundColor = "#2E386A";
        domObject.style.color = "#fff";
      } else {
        domObject.style.backgroundColor = "#fff";
        domObject.style.color = "#222";
      }
    }
  }

  // Floating card setup
  function handleSlideCard() {
    setSlideFloatingCard(!slideFloatingCard);
    floatingContainerRef.current.classList.toggle("visible");
  }

  function handleRemoveFloatingCard() {
    setSlideFloatingCard(slideFloatingCard);
    floatingContainerRef.current.classList.remove("visible");
  }

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode(true);
      appRef.current.classList.add("dark_mode");
    } else {
      setDarkMode(false);
      appRef.current.classList.remove("dark_mode");
    }

    setTimeout(() => {
      if (floatingContainerRef.current) {
        floatingContainerRef.current.classList.add("visible");
      }
    }, 4000);

    setIsLoading(false);
  }, []);

  const SlideDownContextValues = {
    slideDownVariants,
  };

  const SlideUpContextValues = {
    slideUpVariants,
  };

  const ThemeContextValues = {
    darkMode,
    setDarkMode,
    handleDarkMode,
    darkModeForSmallerDiv,
  };

  const LoadingContextValues = {
    isLoading,
    setIsLoading,
  };

  const FloatingCardContextValues = {
    floatingContainerRef,
    handleSlideCard,
    handleRemoveFloatingCard,
  };

  return (
    <>
      <div className="app" ref={appRef}>
        <SlideDownContext.Provider value={SlideDownContextValues}>
          <SlideUpContext.Provider value={SlideUpContextValues}>
            <ThemeContext.Provider value={ThemeContextValues}>
              <FloatingCardContext.Provider value={FloatingCardContextValues}>
                <LoadingContext.Provider value={LoadingContextValues}>
                  <BrowserRouter>
                    <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route path="*" element={<PageNotFound />} />
                    </Routes>
                  </BrowserRouter>
                </LoadingContext.Provider>
              </FloatingCardContext.Provider>
            </ThemeContext.Provider>
          </SlideUpContext.Provider>
        </SlideDownContext.Provider>
      </div>
    </>
  );
}

export default App;
