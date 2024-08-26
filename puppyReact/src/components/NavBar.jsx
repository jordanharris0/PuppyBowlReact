import { Link } from "react-router-dom";

import { useState } from "react";

export default function NavBar() {
  return (
    <>
      <nav id="navBar">
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
