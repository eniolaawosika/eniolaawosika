import "./Works.css";
import work from "./images/workz.png";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { manipulation } from "./store";
import { work_update } from "./store";
import MiniWork from "./MiniWork";

const Works = () => {
  const dispatch = useDispatch();
  const active = useSelector((val) => {
    return val.work.active_section;
  });
  useEffect(() => {
    dispatch(manipulation.change_active_link("Works"));
    Aos.init({
      offset: window.screen.availHeight * 0.01,
    });
    window.history.scrollRestoration = "manual";
  });

  function flip(val){
    const elem = document.getElementsByClassName('brands')[0]
    elem.style.opacity = '0'
    setTimeout(()=>{
      dispatch(work_update.change_active_section(val))
      elem.style.opacity = '1'
    },300)
  }

  return (
    <div className="work">
      <ScrollToTop />
      <section className="one">
        <span>Enny's</span>
        <img src={work} alt="" />
      </section>
      <p className="text">
        I work with clients across diverse sectors to reach planned goals
        through design that cuts across every aspect of brand development, from
        creating and rethinking brand identities, establishing unique brand
        experiences and building scalable and responsive consumer oriented
        products.
      </p>
      <section className="two">
        <div className="header">
          <span
            className={active === "All" ? "active" : ""}
            onClick={() => {
              flip('All');
            }}
          >
            All
          </span>
          <span
            className={active === "Branding" ? "active" : ""}
            onClick={() => {
              flip('Branding')
            }}
          >
            Branding
          </span>
          <span
            className={active === "Communication" ? "active" : ""}
            onClick={(e) => {
              flip('Communication');
            }}
          >
            Communications
          </span>
          <span
            className={active === "Web&App" ? "active" : ""}
            onClick={(e) => {
              flip('Web&App');
            }}
          >
            Web & App
          </span>
        </div>
        <MiniWork/>
      </section>
    </div>
  );
};

export default Works;
