import React from 'react';
import { Link } from 'react-router-dom';
import c from "./MainCard.module.css";
import { v4 as uuidv4 } from 'uuid';

const MainCard = ({ image, title, linkText, linkURL, cardImages }) => {
  return (
    <div className={c.card}>
      <h2 style={{paddingBottom: "5px"}}>{title}</h2>
      {
        cardImages ?
          <div className={c.container_div}>
            {
              cardImages.map(item =>
                  <Link key={uuidv4()} to={item.link}>
                    <img className={c.single_imgs} src={item.image} alt="" />
                    <p style={{color: "gray", fontSize: "12px"}}>{item.subtitle}</p>
                  </Link>
              )
            }
          </div> : <img  className={c.single_img} src={image} alt=""/>
      }
      <Link className={c.ab_link_under} style={{color: "#007185", fontSize: "13px" }} to={linkURL}>{linkText}</Link>
    </div>
  )
}

export default MainCard