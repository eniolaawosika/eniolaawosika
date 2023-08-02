import ea from "./images/Untitled-111 1.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { manipulation } from "./store";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import be from './images/Vector (1).png'
const Footer = () => {
    const link = useSelector((val) => {
        return val.manipulate.link;
      });
      const dispatch = useDispatch()
    
      function navigate(e){
        dispatch(manipulation.change_active_link(e.target.value))
      }
  return (
    <footer>
        <img src={ea} alt="" />
        <nav>
        <NavLink
          to="/"
          onClick={navigate}
        >
          Home
        </NavLink>
        <NavLink
          onClick={navigate}
          to='/about'
        >
          About{" "}
        </NavLink>
        <NavLink
          onClick={navigate}
          to='/work'
        >
          Works
        </NavLink>
        <NavLink
          onClick={navigate}
          to='/blogs'
        >
          Blogs
        </NavLink>
        <NavLink
          onClick={navigate}
          to='/contact'
        >
          Contact
        </NavLink>
      </nav>
      <section>
      <a href="https://instagram.com/the_eniolaawosika?igshid=NTc4MTIwNjQ2YQ=="><InstagramIcon/></a>
      <a href="https://www.linkedin.com/in/eniola-awosika-122b72197"><LinkedInIcon/></a>
      <a href="https://twitter.com/awosika_eniola?s=11&t=JKaJu5VQkL3eyrcFSM370A"><TwitterIcon/></a>
      <a href="https://www.behance.net/eniolafestus"><img src={be} alt=""></img></a>
      </section>
      <p> &#169; eniolaawosika. All Rights Reserved</p>

    </footer>
  )
}

export default Footer