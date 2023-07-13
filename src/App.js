import React, { useEffect, useState, useRef } from "react";
import Home from "../src/Pages/Home/Home";
import Experience from "../src/Pages/Experience/Experience";
import Blogs from "../src/Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.sass";

// Global contexts export
export const ThemeContext = React.createContext();
export const FloatingCardContext = React.createContext();
export const LoadingContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [slideFloatingCard, setSlideFloatingCard] = useState(false);
  const floatingContainerRef = useRef(null);
  const appRef = useRef(null);

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
        <ThemeContext.Provider value={ThemeContextValues}>
          <FloatingCardContext.Provider value={FloatingCardContextValues}>
            <LoadingContext.Provider value={LoadingContextValues}>
              <BrowserRouter>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </BrowserRouter>
            </LoadingContext.Provider>
          </FloatingCardContext.Provider>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
