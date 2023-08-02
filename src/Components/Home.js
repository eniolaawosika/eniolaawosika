import main_logo from "./images/Untitled-13 1.png";
import enny from "./images/1D0A7876 1.png";
import one from "./images/Rectangle 104.png";
import two from "./images/Rectangle 105.png";
import three from "./images/Rectangle 106.png";
import four from "./images/Rectangle 106 (1).png";
import five from "./images/Rectangle 106 (2).png";
import six from "./images/Rectangle 106 (3).png";
import seven from "./images/Rectangle 106 (4).png";
import { useEffect } from "react";
import fax from "./images/Untitled-2 1 (1).png";
import Aos from "aos";
import "aos/dist/aos.css";
import device from "./images/Untitled-24 1.png";
import { useDispatch, useSelector } from "react-redux";
import { change_email_data, manipulation } from "./store";
import curve from "./images/curvature.png";
import mobil from "./images/responsive-design.png";
import enny2 from "./images/ennyx.png";
import Testimonial from "./Testimonial";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  const name = useSelector((val) => {
    return val.data.name;
  });
  const email = useSelector((val) => {
    return val.data.email;
  });
  const phone = useSelector((val) => {
    return val.data.phone;
  });
  const project = useSelector((val) => {
    return val.data.project;
  });
  const note = useSelector((val) => {
    return val.data.note;
  });


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(manipulation.change_active_link('Home'))
    Aos.init({
      offset: window.screen.availHeight * 0.01,
    });
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className="home">
      <ScrollToTop/>
      <section className="one">
        <p className="intro first">
          <span>
            Looking for a designer with maximum design skills to help execute
            your brand ideas? <br />
            ----------- Then i’m that guy.
          </span>
        </p>
        <article>
          <span className="develop">Developing</span>
          <img src={main_logo} alt="" />
          <p className="brand">brands.</p>
        </article>
        <p className="intro">
          I believe every design should be easy to understand and distinctive
          enough to be more memorable & identifiable. I’m a brand designer with
          the aim of taking your million dollar brand to the top.
        </p>
      </section>
      <section className="two">
        <picture>
          <source />
          <source srcSet={enny2} media="(max-width:1080px)" />
          <img data-aos="fade-right" src={enny} alt="" />
        </picture>
        <aside>
          <div>
            <p>
              Eniola Awosika is a Brand & UI Designer from Lagos, Nigeria with a
              consumer oriented approach towards brand ideation. With over 4
              years of design experience building brands across the world,
              Eniola has developed himself into being one of the most sought
              after designers in Lagos, Nigeria
            </p>
            <p>
              His design has also won an award for “The Best Use of Creative”.
              With a background in engineering and brand strategy, Eniola looks
              to develop ambitious brands to get to the top and stand out
              amongst their competitors.
            </p>
            <p>
              When Eniola isn’t designing, he’s either reading books, listening
              to music or playing video games, asides that he loves to teach
              designs and help fellow designers grow.
            </p>
          </div>
          <button>Resume/Cv</button>
        </aside>
      </section>
      <section className="three">
        <span className="head">Works</span>
        <aside className="aside">
          <div className="div">
            <article>
              <div className="float">
                <h5>JustPhresh</h5>
                <span>Brand Design</span>
              </div>
              <img src={one} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>BetaBank</h5>
                <span>Mobile App Design</span>
              </div>
              <img src={two} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>DUIDE</h5>
                <span>Product Packaging</span>
              </div>
              <img src={three} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>EAT UP</h5>
                <span>Brand And Product Design</span>
              </div>
              <img src={four} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>ORAIMO</h5>
                <span>Apparel Design</span>
              </div>
              <img src={five} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>LEG IT</h5>
                <span>Brand And Web Design</span>
              </div>
              <img src={six} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>Quick ETA</h5>
                <span> Brand & Product Design</span>
              </div>
              <img src={seven} alt="" />
            </article>
          </div>
          <div className="div">
            <article>
              <div className="float">
                <h5>JustPhresh</h5>
                <span>Brand Design</span>
              </div>
              <img src={one} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>BetaBank</h5>
                <span>Mobile App Design</span>
              </div>
              <img src={two} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>DUIDE</h5>
                <span>Product Packaging</span>
              </div>
              <img src={three} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>EAT UP</h5>
                <span>Brand And Product Design</span>
              </div>
              <img src={four} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>ORAIMO</h5>
                <span>Apparel Design</span>
              </div>
              <img src={five} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>LEG IT</h5>
                <span>Brand And Web Design</span>
              </div>
              <img src={six} alt="" />
            </article>
            <article>
              <div className="float">
                <h5>Quick ETA</h5>
                <span> Brand & Product Design</span>
              </div>
              <img src={seven} alt="" />
            </article>
          </div>
        </aside>
      </section>
      <section className="four">
        <span className="service">Services</span>
        <aside>
          <div>
            <img src={fax} alt="" />
            <h3>Brand & Identity System</h3>
            <p>
              Logo & Identity, Brand Guide, Pattern Design, Packaging, Art
              Direction, Stationery Design and many more.
            </p>
          </div>
          <div className="mobile">
            <img src={mobil} alt="" />
            <h3>Web & Mobile Designs</h3>
            <p>
              User research, Mobile App Designs, Web App Designs, Screenshot
              Designs for product launch, Responsive Designs.
            </p>
          </div>
          <div className="b_illustrate">
            <img src={curve} alt="" />
            <h3>Brand Illustrations</h3>
            <p>
              Brand Illustrations, Iconography, Isometric Illustrations for
              brand or event based projects.
            </p>
          </div>
          <div>
            <img src={device} alt="" />
            <h3>Social Media Contents</h3>
            <p>
              Social Campaign Designs, Brands Social Media tone & voice and many
              more.
            </p>
          </div>
        </aside>
      </section>
      <Testimonial/>
      <section className="six">
        <h3>Contact</h3>
        <article>
          <aside>
            <span className="head">LET'S WORK TOGETHER!</span>
            <p className="free">
              Feel free to leave me a message via the form, or you can get a
              hold of me at theeniolaawosika@gmail.com or <br />
              (+234) 811 9700 827
            </p>
            <p>Lets create something beautiful and impactful.</p>
          </aside>
          <aside className="second_side">
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => {
                dispatch(change_email_data.change_name(e.target.value));
              }}
              type="text"
            />
            <input
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                dispatch(change_email_data.change_email(e.target.value));
              }}
              type="text"
            />
            <input
              placeholder="Phone"
              value={phone}
              onChange={(e) => {
                dispatch(change_email_data.change_phone_number(e.target.value));
              }}
              type="text"
            />
            <input
              placeholder="Project Description"
              value={project}
              onChange={(e) => {
                dispatch(change_email_data.update_project(e.target.value));
              }}
              type="text"
            />
            <textarea
              placeholder=" Add a note here ..."
              onChange={(e) => {
                dispatch(change_email_data.write_note(e.target.value));
              }}
              value={note}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <a
              href={`mailto:gabrielayoku@gmail.com?subject = ${project}&body =${note} `}
            >
              SUBMIT
            </a>
          </aside>
        </article>
      </section>
    </div>
  );
};

export default Home;
