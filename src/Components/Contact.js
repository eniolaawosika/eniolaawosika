import "./Contact.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change_email_data, manipulation } from "./store";
import touch from "./images/touch.png";
import ScrollToTop from "./ScrollToTop";

const Contact = () => {
  const dispatch = useDispatch();

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
  useEffect(() => {
    dispatch(manipulation.change_active_link("Contact"));
    window.history.scrollRestoration = "manual";
  });
  return (
    <div className="contact">
        <ScrollToTop/>
      <section className="one">
        <span>Get in</span>
        <img src={touch} alt="" />
      </section>
      <section className="two">
        <h2>LET'S WORK TOGETHER</h2>
        <p>
          Feel free to leave me a message via the form, or you can get a hold of
          me at theeniolaawosika@gmail.com <br /> or (+234) 811 9700 827
        </p>
        <p>Lets create something beautiful and impactful.</p>
        <aside>
          <input
            value={name}
            onChange={(e) => {
              dispatch(change_email_data.change_name(e.target.value));
            }}
            placeholder="Name"
            type="text"
          />
          <input
            value={email}
            onChange={(e) => {
              dispatch(change_email_data.change_email(e.target.value));
            }}
            placeholder="Email Address"
            type="text"
          />
          <input
            value={phone}
            onChange={(e) => {
              dispatch(change_email_data.change_phone_number(e.target.value));
            }}
            placeholder="Phones"
            type="text"
          />
          <input
            value={project}
            onChange={(e) => {
              dispatch(change_email_data.update_project(e.target.value));
            }}
            placeholder="Project Description"
            type="text"
          />
          <textarea
            value={note}
            onChange={(e) => {
              dispatch(change_email_data.write_note(e.target.value));
            }}
            placeholder=" Add a note here ...."
            name=""
            id=""
            cols="20"
            rows="6"
          ></textarea>
        </aside>
        <a
          href={`mailto:gabrielayoku@gmail.com?subject = ${project}&body =${note} `}
        >
          SUBMIT
        </a>
      </section>
    </div>
  );
};

export default Contact;
