import React from "react";

function TextBold14(props) {
  return (
    <p className="text-bold-14" style={props.style}>
      {props.content}
    </p>
  );
}
function TextMedium14(props) {
  return (
    <p className="text-medium-14" style={props.style}>
      {props.content}
    </p>
  );
}
function TextMedium10(props) {
  return (
    <p className="text-medium-10" style={props.style}>
      {props.content}
    </p>
  );
}

function TextRegular14(props) {
  return (
    <p className="text-regular-14" style={props.style}>
      {props.content}
    </p>
  );
}
function TextRegular16(props) {
  return (
    <p className="text-regular-16" style={props.style}>
      {props.content}
    </p>
  );
}
function TextMedium16(props) {
  return (
    <p className="text-medium-16" style={props.style}>
      {props.content}
    </p>
  );
}
function TextHeavy40(props) {
  return (
    <p className="text-heavy-40" style={props.style}>
      {props.content}
    </p>
  );
}
function TextSB30(props) {
  return (
    <p className="custom-text" style={props.style}>
      {props.content}
    </p>
  );
}

export {
  TextBold14,
  TextMedium16,
  TextRegular14,
  TextSB30,
  TextHeavy40,
  TextRegular16,
  TextMedium14,
  TextMedium10,
};
