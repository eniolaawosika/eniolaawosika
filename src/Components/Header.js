import ea from "./images/Untitled-111 1.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { manipulation } from "./store";

const Header = () => {
  const link = useSelector((val) => {
    return val.manipulate.link;
  });
  const width = window.screen.availWidth
  const dispatch = useDispatch();

  function navigate(e) {
    dispatch(manipulation.change_active_link(e));
    const nav = document.getElementById("nav");
    const icon = document.getElementById('nav-icon4')
    const body = document.getElementsByTagName("body")[0];
    if(width <501){
      nav.style.right = "-60vw";
      icon.classList.toggle('open')
      body.style.overflowY = "scroll";
      setTimeout(() => {
        nav.style.display = "none";
      }, 400);
    }
  }
  function toggle_nav(e) {
    const nav = document.getElementById("nav");
    const body = document.getElementsByTagName("body")[0];
    if (!e.target.classList.contains("open")) {
      nav.style.display = "flex";
      setTimeout(() => {
        nav.style.right = "-10vw";
        body.style.overflow = "hidden";
      }, 100);
    } else {
      nav.style.right = "-60vw";
      body.style.overflowY = "scroll";
      setTimeout(() => {
        nav.style.display = "none";
      }, 400);
    }
    e.target.classList.toggle("open");
  }

  return (
    <header id="header">
      <img src={ea} alt="" />
      <aside className="hamburger">
        <div onClick={toggle_nav} id="nav-icon4">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </aside>
      <nav id="nav">
        <NavLink
          to="/"
          onClick={() => {
            navigate("Home");
          }}
          className={link === "Home" ? "activate" : ""}
        >
          Home
        </NavLink>
        <NavLink
        to='/about'
          onClick={() => {
            navigate("About");
          }}
          className={link === "About" ? "activate" : ""}
        >
          About
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("Works");
          }}
          to="/work"
          className={link === "Works" ? "activate" : ""}
        >
          Works
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("Blogs");
          }}
          to="/blogs"
          className={link === "Blogs" ? "activate" : ""}
        >
          Blogs
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("Contact");
          }}
          to="contact"
          className={link === "Contact" ? "activate" : ""}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
