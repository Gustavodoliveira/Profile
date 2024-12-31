import React from "react";

import "./Btn.css";
import { IconType } from "react-icons";

type props = {
  className: string;
  link: string;
  text: string;
  Icon?: IconType;
  classIcon: string;
};

const Btn = ({ className, link, text, Icon, classIcon }: props) => {
  return (
    <a href={link} target="_blank" className={`btn ${className}`}>
      {Icon && <Icon className={`icon ${classIcon}`} />}
      <p>{text}</p>
    </a>
  );
};

export default Btn;
