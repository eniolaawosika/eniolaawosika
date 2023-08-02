import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { work_update } from "./store";

const MiniWork = () => {
  const dispatch = useDispatch()
  const active = useSelector((val) => {
    return val.work.active_section;
  });
  const data = useSelector((val) => {
    return val.work.data;
  });
  const seasoned_data = useSelector((val)=>{
    return val.work.seasoned_data;
  })
  useEffect(()=>{
    dispatch(work_update.updated_seasoned_data('reload'))
    data.map((val)=>{
      if(active === 'Branding'){
        if(val.category === 'Branding')
        dispatch(work_update.updated_seasoned_data(val))
      }
      else if (active === 'Communication'){
        if(val.category === 'Communication')
        dispatch ( work_update.updated_seasoned_data(val))
      }
      else if (active === 'Web&App'){
        if(val.category === 'Web&App')
        dispatch (work_update.updated_seasoned_data(val))
      }
      else{
        dispatch (work_update.updated_seasoned_data(val))
      }
    })
  },[active])
  if (active === "All") {
    return (
      <div className="brands">
        {data.map((val, index) => {
          return (
            <NavLink key={index} to={`/work/${val.name}`}>
              <img src={val.image} alt="" />
              <aside>
                <p className="color">
                  <span>{val.year}</span> | <span>{val.Project_type}</span>
                </p>
                <p className="big">{val.name}</p>
              </aside>
            </NavLink>
          );
        })}
      </div>
    );
  } else if (active === "Branding") {
    return (
      <div className="brands">
        {data.map((val, index) => {
          if (val.category === "Branding") {
            return (
              <NavLink key={index} to={`${val.name}`}>
                <img src={val.image} alt="" />
                <aside>
                  <p className="color">
                    <span>{val.year}</span> | <span>{val.Project_type}</span>
                  </p>
                  <p className="big">{val.name}</p>
                </aside>
              </NavLink>
            );
          }
        })}
      </div>
    );
  } else if (active === "Communication") {
    return (
      <div className="brands">
        {data.map((val, index) => {
          if (val.category === "Communication") {
            return (
              <NavLink key={index} to={`${val.name}`}>
                <img src={val.image} alt="" />
                <aside>
                  <p className="color">
                    <span>{val.year}</span> | <span>{val.Project_type}</span>
                  </p>
                  <p className="big">{val.name}</p>
                </aside>
              </NavLink>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="brands">
        {data.map((val, index) => {
          if (val.category === "Web&App") {
            return (
              <NavLink key={index} to={`${val.name}`}>
                <img src={val.image} alt="" />
                <aside>
                  <p className="color">
                    <span>{val.year}</span> | <span>{val.Project_type}</span>
                  </p>
                  <p className="big">{val.name}</p>
                </aside>
              </NavLink>
            );
          }
        })}
      </div>
    );
  }
};

export default MiniWork;
