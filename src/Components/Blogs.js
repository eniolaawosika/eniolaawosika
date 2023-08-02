import { useDispatch } from "react-redux";
import "./Blogs.css";
import blog from "./images/blog.png";
import b1 from "./images/memory.png";
import b2 from "./images/blog2.png";
import b3 from "./images/blog3.png";
import b4 from "./images/big_4.png";
import b5 from "./images/big_5.png";
import { useEffect } from "react";
import { manipulation } from "./store";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

const Blogs = () => {
  const dispatch = useDispatch();
  const width = window.screen.availWidth

  useEffect(() => {
    dispatch(manipulation.change_active_link("Blogs"));
    Aos.init({
      offset: window.screen.availHeight * 0.01,
    });
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className="blog">
      <ScrollToTop />
      <section className="one">
        <span>My</span>
        <img src={blog} alt="" />
      </section>
      <section className="two">
        <h5>My articles</h5>
        <article>
          <div data-aos="zoom-in" data-aos-delay={width > 1024 ? '100':""}>
            <img src={b1} alt="" />
            <aside>
              <h2>Going Down Memory Lane</h2>
              <span>Dec 15, 2022</span>
              <p>
                It was a gorgeous Thursday Morning, and i got ready to rant at
                my dry cleaner about why he hadn’t delivered my suit in time for
                FAAJI 1.0, an owanbe-themed party....
              </p>
              <a href="https://link.medium.com/v89bogIDgBb" target="_blank">
                READ MORE
              </a>
            </aside>
          </div>
          <div data-aos="zoom-in" data-aos-delay={width > 1024 ? '200':"100"}>
            <img src={b2} alt="" />
            <aside>
              <h2>Redefining the Pet Industry in Africa</h2>
              <span>Oct 24,2022</span>
              <p>
                Earlier this year, i was priviledged to work on a branding
                project for a client based in West Africa on his pet store which
                happened to be a really fun project for me
              </p>
              <a href="https://link.medium.com/G2iUxJGDgBb" target="_blank">
                READ MORE
              </a>
            </aside>
          </div>
          <div data-aos="zoom-in" data-aos-delay={width > 1024 ? '300':"100"}>
            <img src={b3} alt="" />
            <aside>
              <h2>How AI is boosting the design industry</h2>
              <span>Sep 13,2022</span>
              <p>
                There’s been a constant hype this past few days on the concept
                of AI, from people complaining about AI stealing their jobs to
                others accepting...
              </p>
              <a href="" target="_blank">
                READ MORE
              </a>
            </aside>
          </div>
          <div data-aos="zoom-in" data-aos-delay={width > 1024 ? '300':"100"}>
            <img src={b4} alt="" />
            <aside>
              <h2>How I Branded a Junk Food Startup in West Africa</h2>
              <span>Dec 15, 2022</span>
              <p>
                Early in 2023, I took on the task of branding a firm selling
                junk food startup in Nigeria, in the western portion of Africa.
                I’ve always been a huge fan of junk food, which....
              </p>
              <a href="https://link.medium.com/tUUuNLhDgBb" target="_blank">
                READ MORE
              </a>
            </aside>
          </div>
          <div data-aos="zoom-in" data-aos-delay={width > 1024 ? '400':"100"}>
            <img src={b5} alt="" />
            <aside>
              <h2>Hack to Living a More Fulfilled Life</h2>
              <span>Oct 24, 2022</span>
              <p>
                One fateful day, the principal of my excellent school, Mrs.
                Jacobs, called to wake me up. I was pretty surprised when i
                answered the phone only to hear her say, “Good Morning”
              </p>
              <a href="https://link.medium.com/JEigiaxDgBb" target="_blank">
                READ MORE
              </a>
            </aside>
          </div>
        </article>
        <a href="https://medium.com/@ennysapparel" className="follow_me">
          FOLLOW ME ON MEDIUM
        </a>
      </section>
    </div>
  );
};

export default Blogs;
