import React from "react";
import NavBar from "./NavBar";

function MainNavLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}

export default MainNavLayout;
