import React from "react";

const Cover = (props) => {
  document.title = "Cheers Beers APP -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Cover;