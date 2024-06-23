import React from "react";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const about = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
          sapiente. Minima, beatae exercitationem deserunt labore excepturi
          iusto accusamus itaque qui assumenda inventore fugit natus voluptates
          provident esse harum cumque voluptatum nesciunt autem mollitia
          incidunt necessitatibus, quos enim error.
        </p>
        <p>     
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          aliquam dolorum quas labore? Eligendi sed illo ratione veritatis.
          Dicta, eveniet.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          consequuntur. Dicta ad laboriosam ullam error odio architecto quisquam
          deserunt accusamus numquam quibusdam, incidunt inventore impedit ex
          ducimus voluptatum, a id.
        </p>
      </div>
    </div>
  );
};

export default about;
