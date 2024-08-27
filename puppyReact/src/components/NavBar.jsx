import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      {/* navBar link */}
      <nav id="navBar">
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
