import React, { useState } from "react";
import caretRightSrc from "./images/caret-right.svg";
import "./scss/close-drawer.scss";

const CloseDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const handleToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const buttonClassName = `close-drawer ${
    drawerOpen ? "close-drawer--open" : "close-drawer--closed"
  }`;

  return (
    <button
      className={buttonClassName}
      onClick={handleToggle}
      aria-label="Toggle Drawers"
    >
      <img src={caretRightSrc} aria-hidden="true" alt="" />
      <span className="sr-only">Toggle Drawers</span>
    </button>
  );
};

export default CloseDrawer;
