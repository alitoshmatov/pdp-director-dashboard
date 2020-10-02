import React from "react";

function TypeChangeBtn(props) {
  function activeClass(btn) {
    if (btn === props.active) {
      return "active";
    }
  }

  return (
    <div className="type-change-btn flex-row">
      <p
        className={activeClass(1)}
        onClick={() => {
          props.showAll();
        }}
      >
        BARCHASI
      </p>
      <p
        className={activeClass(2)}
        onClick={() => {
          props.showReal();
        }}
      >
        REAL PUL
      </p>
      <p
        className={activeClass(3)}
        onClick={() => {
          props.showNoReal();
        }}
      >
        NO REAL PUL
      </p>
    </div>
  );
}

export default TypeChangeBtn;
