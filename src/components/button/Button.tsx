import React from "react";
import { IconType } from "react-icons";
import "./buttonStyle.css";

type Props = {
  children: React.ReactNode;
  Icon?: IconType;
  classIcon: string;
};

const Button = (props: Props) => {
  return (
    <div className={`container_button`}>
      {props.Icon ? <props.Icon className={`${props.classIcon} icon`} /> : ""}
      <div className="container_button_text">{props.children}</div>
    </div>
  );
};

export default Button;
