import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "Some Title",
  description = "My Description",
  className = "text-white",
  children,background}) => {
  return (<div className="top"  style={background}>
    <Menu/>
    <div className={className}>
      {children}
    </div>
  </div>);
};

export default Base;
