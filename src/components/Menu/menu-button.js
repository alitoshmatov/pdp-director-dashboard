import React from "react";

function MenuButton(props) {
  return (
    <div
      className={
        props.active ? "menu-buttons active-menu-button" : "menu-buttons"
      }
    >
      {props.icon}
      <p>{props.title}</p>
    </div>
  );
}

export default MenuButton;
