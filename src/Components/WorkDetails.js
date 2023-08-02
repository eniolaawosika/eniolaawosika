import "./Detail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";
import { manipulation } from "./store";
import Aos from "aos";
import "aos/dist/aos.css";

const WorkDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((val) => {
    return val.work.seasoned_data;
  });
  const nav = useNavigate();
  useEffect(() => {
    Aos.init({
    });

    dispatch(manipulation.change_active_link("Works"));
    window.history.scrollRestoration = "manual";
  }, []);
  function left(index) {
    if (index > 0) {
      
      nav(`/work/${data[index - 1].name}`);
    }
  }
  function right(index) {
    if (index < data.length - 1) {
      nav(`/work/${data[index + 1].name}`);
    }
  }

  return (
    <>
      <ScrollToTop />
      {data.map((val, index) => {
        if (val.name === id) {
          return (
            <div key={index} className="detail">
              <section className="one">
                <aside className="left">
                  <h1>{val.name}</h1>
                  <div className="roll">
                    <p className="highlight">
                      <span className="big">PROJECT TYPE</span>
                      <span>{val.Project_type}</span>
                    </p>
                    <p className="highlight">
                      <span className="big">ROLE</span>
                      <span>{val.Role}</span>
                    </p>
                  </div>
                  <div>
                    <section className="tools">
                      <span className="big ">TOOLS USED</span>
                      <article>
                        {val.tools.map((val, index) => {
                          return <span key={index}>{val}</span>;
                        })}
                      </article>
                    </section>
                    <p>
                      <span className="big">YEAR</span>
                      <span>{val.year}</span>
                    </p>
                  </div>
                </aside>
                <aside className="right">
                  {val.information.map((val, index) => {
                    return <p key={index}>{val}</p>;
                  })}
                </aside>
              </section>
              <section className="two">
                {val.collection1.map((value, index) => {
                  return (
                    <img
                      data-aos="zoom-in"
                      data-aos-delay="220"
                      key={index}
                      src={value}
                      alt=""
                    />
                  );
                })}
                {val.content2 ? (
                  <>
                    <h2>{val.content2.header}</h2>
                    {val.content2.content.map((value, index) => {
                      return <p key={index}>{value}</p>;
                    })}
                  </>
                ) : (
                  ""
                )}
                {val.video2 ? (
                  <>
                    {val.video2.map((value, index) => {
                      return (
                        <video
                          key={index}
                          controls
                          muted
                          autoPlay
                          loop
                          playsInline
                        >
                          <source src={value} type="video/mp4" />
                        </video>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
                {val.collection2
                  ? val.collection2.map((value, index) => {
                      return (
                        <img
                          data-aos="zoom-in"
                          data-aos-delay="220"
                          key={index}
                          src={value}
                          alt=""
                        />
                      );
                    })
                  : ""}
                {val.content3 ? (
                  <>
                    <h2>{val.content3.header}</h2>
                    {val.content3.content.map((value, index) => {
                      return <p key={index}>{value}</p>;
                    })}
                  </>
                ) : (
                  ""
                )}
                {val.collection3
                  ? val.collection3.map((value, index) => {
                      return (
                        <img
                          data-aos="zoom-in"
                          data-aos-delay="220"
                          key={index}
                          src={value}
                          alt=""
                        />
                      );
                    })
                  : ""}
                {val.video3 ? (
                  <>
                    {val.video3.map((value, index) => {
                      return (
                        <video key={index} controls muted autoPlay loop playsInline>
                          <source src={value} type="video/mp4" />
                        </video>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
                {val.content4 ? (
                  <>
                    <h2>{val.content4.header}</h2>
                    {val.content4.content.map((value, index) => {
                      return <p key={index}>{value}</p>;
                    })}
                  </>
                ) : (
                  ""
                )}
                {val.collection4
                  ? val.collection4.map((value, index) => {
                      return (
                        <img
                          data-aos="zoom-in"
                          data-aos-delay="220"
                          key={index}
                          src={value}
                          alt=""
                        />
                      );
                    })
                  : ""}
                {val.video4 ? (
                  <>
                    {val.video4.map((value, index) => {
                      return (
                        <video key={index} controls muted autoPlay loop playsInline>
                          <source src={value} type="video/mp4" />
                        </video>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
                {val.content5 ? (
                  <>
                    <h2>{val.content5.header}</h2>
                    {val.content5.content.map((value, index) => {
                      return <p key={index}>{value}</p>;
                    })}
                  </>
                ) : (
                  ""
                )}
                {val.collection5
                  ? val.collection5.map((value, index) => {
                      return (
                        <img
                          data-aos="zoom-in"
                          data-aos-delay="220"
                          key={index}
                          src={value}
                          alt=""
                        />
                      );
                    })
                  : ""}
                {val.video5 ? (
                  <>
                    {val.video5.map((value, index) => {
                      return (
                        <video key={index} controls muted autoPlay loop playsInline>
                          <source src={value} type="video/mp4" />
                        </video>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </section>
              <section className="footer">
                {index !== 0 ? (
                  <span
                    onClick={() => {
                      left(index);
                    }}
                  >
                    Previous Project
                  </span>
                ) : (
                  ""
                )}
                {index === data.length - 1 ? (
                  ""
                ) : (
                  <span
                    onClick={() => {
                      right(index);
                    }}
                    className="next"
                  >
                    Next Project
                  </span>
                )}
              </section>
            </div>
          );
        }
      })}
    </>
  );
};

export default WorkDetails;
