import React, { useEffect } from "react";
import Testimonial from "./Testimonial";
import "./About.css";
import enny from "./images/boy.png";
import { useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import { manipulation } from "./store";
import ScrollToTop from "./ScrollToTop";
import img1 from "./images/e_1.png";
import img2 from "./images/e_2.png";
import img3 from "./images/e_3.png";
import img4 from "./images/e_4.png";
import l1 from "./images/l1.png";
import notion from "./images/pngwing.com (4).png";
import l3 from "./images/pngwing.com (6).png";
import l4 from "./images/l4.png";
import l5 from "./images/pngwing.com (5).png";
import l6 from "./images/l6.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import slack from "./images/slack.avif";

const About = () => {
  const dispatch = useDispatch();
  const width = window.screen.availWidth

  useEffect(() => {
    dispatch(manipulation.change_active_link("About"));
    Aos.init({
      offset: window.screen.availHeight * 0.01,
    });
    window.history.scrollRestoration = "manual";
  });

  function view(e) {
    const click = e.target;
    const child = click.children[0];
    const element = e.target.parentElement;
    const next = element.nextElementSibling;
    const parent = element.parentElement;
    const style = parent.style.height;
    if(width > 500){
      if (style === "" || style === "277px") {
        next.style.display = "none";
        parent.style.height = "130px";
        child.style.transform = "rotateZ(0deg)";
      } else {
        parent.style.height = "277px";
        child.style.transform = "rotateZ(180deg)";
        setTimeout(() => {
          next.style.display = "block";
        }, 200);
      }
    }
    else{
      if (style === "" || style === "130px") {
        next.style.display = "none";
        parent.style.height = "94px";
        child.style.transform = "rotateZ(0deg)";
      } else {
        parent.style.height = "130px";
        child.style.transform = "rotateZ(180deg)";
        setTimeout(() => {
          next.style.display = "block";
        }, 200);
      }
    }
  }
  function view2(e) {
    const click = e.target;
    const child = click.children[0];
    const element = e.target.parentElement;
    const next = element.nextElementSibling;
    const parent = element.parentElement;
    const style = parent.style.height;
    if(width > 500){
      if (style === "") {
        parent.style.height = "277px";
        child.style.transform = "rotateZ(180deg)";
        setTimeout(() => {
          next.style.display = "block";
        }, 200);
      }
      else if (style === '277px'){
        next.style.display = "none";
        parent.style.height = "130px";
        child.style.transform = "rotateZ(0deg)";
      }
      else{
        parent.style.height = "277px";
        child.style.transform = "rotateZ(180deg)";
        setTimeout(() => {
          next.style.display = "block";
        }, 200);
      }
    }
    else{
      if (style === "") {
        parent.style.height = "130px";
        child.style.transform = "rotateZ(180deg)";
        setTimeout(() => {
          next.style.display = "block";
        }, 200);
      }
      else if (style === '130px'){
        next.style.display = "none";
        parent.style.height = "94px";
        child.style.transform = "rotateZ(0deg)";
      }
      else{
        parent.style.height = "130px";
        child.style.transform = "rotateZ(180deg)";
        setTimeout(() => {
          next.style.display = "block";
        }, 200);
      }
    }
  }
  return (
    <div className="about">
      <ScrollToTop />
      <section className="one">
        <span>About</span>
        <img src={enny} alt="" />
      </section>
      <section className="two">
        <aside>
          <img data-aos="zoom-in" data-aos-delay="100" src={img1} alt="" />
          <img data-aos="zoom-in" data-aos-delay="200" src={img2} alt="" />
          <div data-aos="zoom-in" data-aos-delay="300">
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </aside>
        <article>
          <p className="e_1">
            Eniola Awosika is a Brand & UI Designer from Lagos, Nigeria with a
            consumer oriented approach towards brand ideation, brand
            communication and marketing design on a global scale. With over 4
            years of design experience building brands across the world, Eniola
            has developed himself into being one of the most sought after
            designers in Lagos, Nigeria.
          </p>
          <p className="e_2">
            He’s currently working with Toptal as a Digital Designer to help
            create compelling brand and user experience for top brands across
            the world, he previously served as a Designer for Garmspot where he
            came up with strategies to improve the companies brand image as well
            as boost in publicity. His design has also won an award for “The
            Best Use of Creative” at a School of Branding in Nigeria.
          </p>
          <p className="e_3">
            With a background in engineering and brand strategy, Eniola looks to
            develop ambitious brands to get to the top and stand out amongst
            their competitors. He has also volunteered as a visual designer for
            several tech events in Nigeria like PAADC ( the largest student led
            competition in Nigeria using innovation and technology) and many
            more
          </p>
          <p className="e_4">
            When Eniola isn’t designing, he’s either reading books, listening to
            music or playing video games, asides that he loves to teach designs
            and empower fellow designers into being a better version of
            themselves.
          </p>
        </article>
      </section>
      <section className="three">
        <h5>Work Experience</h5>
        <article>
          <div className="div">
            <header>
              <p className="infonet">
                <span className="head_C">Toptal</span>
                <span>Digital Designer</span>
              </p>
              <span className="date">
                Oct 2022- <br /> present
              </span>
            </header>
            <p>
              Building up strategies to improve companies brand image via Web
              Banners, News Letters, GIF’s, product images as well as printable
              assets.
            </p>
          </div>
          <div className="div">
            <header>
              <p className="infonet">
                <span className="head_C">Garmspot</span>
                <span>Graphic Designer</span>
              </p>
              <span className="date">
                Dec 2021- <br /> Dec 2022
              </span>
            </header>
            <p>
              Creating unique brand identities and User experience strategies
              for ambitious brands and businesses across the platform.
            </p>
          </div>
          <div className="div">
            <header>
              <p className="infonet">
                <span className="head_C">PAADC 6.o</span>
                <span>Design Volunteer</span>
              </p>
              <span className="date">
                Mar 2022- <br /> Oct 2022
              </span>
            </header>
            <p>
              Collaborated with the design team to create designs for campaign
              ads, content and other printable design assets.
            </p>
          </div>
          <div className="div">
            <header>
              <p className="infonet">
                <span className="head_C">EarlyBell</span>
                <span>Digital Intern</span>
              </p>
              <span className="date">
                Nov 2019 - <br /> Sep 2020
              </span>
            </header>
            <p>
              Assisting designers with a range of print and web projects as well
              as assisting the design tutors during trainings.
            </p>
          </div>
        </article>
      </section>
      <section className="four">
        <p>
          <img src={l1} alt="" />
        </p>
        <p>
          <img src={notion} alt="" />
        </p>
        <p>
          <img src={l3} alt="" />
        </p>
        <p>
          <img src={l4} alt="" />
        </p>
        <p>
          <img src={l5} alt="" />
        </p>
        <p>
          <img src={l6} alt="" />
        </p>
        <p>
          <img src={slack} alt="" />
        </p>
      </section>
      <section className="five">
        <span id="span">FAQ</span>
        <h6>Frequently asked questions</h6>
        <article className="cool">
          <div className="diver q-1">
            <p className="question">
              <span>What is your design process?</span>
              <span onClick={view} className="cursor">
                <KeyboardArrowDownIcon />
              </span>{" "}
            </p>
            <p className="response">
              {
                "Onboarding > Research > Creative Direction & Moodboard > Design > Testing & Project review"
              }
            </p>
          </div>
          <div className="diver q-2">
            <p className="question special" span>
              {" "}
              <span>What is the duration of your project?</span>
              <span onClick={view} className="cursor">
                <KeyboardArrowDownIcon />
              </span>
            </p>
            <p className="answer">
              Every design project comes with a different duration depending on
              the complexity of the project as well as the industry.
            </p>
          </div>
          <div className="diver q-3">
            <p className="question payment">
              <span>Do you have a payment plan?</span>
              <span onClick={view2} className="cursor">
                <KeyboardArrowDownIcon />
              </span>{" "}
            </p>
            <p className="answer">
              We do, indeed. Once you’ve filled an inquiry, you’ll be given our
              Nigerian bank account information or the option to pay using
              PayPal. Additionally, we take USDC from our international
              customers.
            </p>
          </div>
          <div className="diver q-4">
            <p className="question">
              <span>Cost and Payment?</span>
              <span onClick={view2} className="cursor">
                <KeyboardArrowDownIcon />
              </span>{" "}
            </p>
            <p className="answer">
              Prices vary depending on the size of the projects, and delivery
              time is a major consideration.
            </p>
          </div>
        </article>
      </section>
      <Testimonial />
    </div>
  );
};

export default About;
