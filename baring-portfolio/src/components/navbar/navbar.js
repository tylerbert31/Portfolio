import "./navbar.css";
import logo from "../../logo.svg";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <>
      <nav className={`${isNavbarVisible ? "visible" : ""}`}>
        <img src={logo} alt="Logo" />
        <div className="nav-items">
          <a href="https://fb.com">Portfolio</a>
          <a href="https://fb.com">Skills</a>
          <a href="https://fb.com">About</a>
        </div>
      </nav>
    </>
  );
};
