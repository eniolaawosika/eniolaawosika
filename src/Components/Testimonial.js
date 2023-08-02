import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch,useSelector } from "react-redux";
import { manipulation } from "./store";

const Testimonial = () => {
  const index = useSelector((val) => {
    return val.manipulate.index_reader;
  });
  const data = useSelector((val) => {
    return val.manipulate.data;
  });
  const width = window.screen.availWidth;
  
  const dispatch = useDispatch();
  const interval = setInterval(() => {
    const element = document.getElementsByClassName(" testament")[0];
    if(width < 1024){
         if(index >= 0 && index < data.length-1){
            element.style.opacity = "0.025";
            setTimeout(() => {
              dispatch(manipulation.change_indexer(index + 1));
              element.style.opacity = "1";
            }, 300);
         }
         else if ( index === data.length-1){
            element.style.opacity = "0.025";
            setTimeout(() => {
              dispatch(manipulation.change_indexer(0));
              element.style.opacity = "1";
            }, 300);
         }
    }
    clearInterval(interval);
  }, 4000);
  return (
    <section className="five">
      <h3>Testimonials</h3>
      <article>
        <span
          className="arrow"
          onClick={() => {
            const element = document.getElementsByClassName(" testament")[0];
            if (index > 0) {
              element.style.opacity = "0.025";
              setTimeout(() => {
                dispatch(manipulation.change_indexer(index - 1));
                element.style.opacity = "1";
              }, 300);
            }
          }}
        >
          <ArrowBackIosIcon />
        </span>
        <div className="testament">
          <aside>
            <p className="descrypt">{data[index].description}</p>
            <p className="rating">
              <span className={data[index].star_rating >= 1 ? "positive" : ""}>
                <StarIcon />
              </span>
              <span className={data[index].star_rating >= 2 ? "positive" : ""}>
                <StarIcon />
              </span>
              <span className={data[index].star_rating >= 3 ? "positive" : ""}>
                <StarIcon />
              </span>
              <span className={data[index].star_rating >= 4 ? "positive" : ""}>
                <StarIcon />
              </span>
              <span className={data[index].star_rating === 5 ? "positive" : ""}>
                <StarIcon />
              </span>
            </p>
            <h5>{data[index].name}</h5>
            <span className="ceo">{data[index].position}</span>
          </aside>
          <img src={data[index].image} alt="" />
        </div>
        <span
          onClick={() => {
            const element = document.getElementsByClassName(" testament")[0];
            if (index < data.length - 1) {
              element.style.opacity = "0.025";
              setTimeout(() => {
                dispatch(manipulation.change_indexer(index + 1));
                element.style.opacity = "1";
              }, 300);
            }
          }}
          className="arrow"
        >
          <ArrowForwardIosIcon />
        </span>
      </article>
    </section>
  );
};

export default Testimonial;
