import Navbar from "../components/Navbar";
import { BrowserRouter as Link } from "react-router-dom";

export default function About() {
  return (
    <main>
      <Navbar>
        <Link to="/about" />
        <Link to="/contact" />
        <Link to="/resources" />
      </Navbar>
      <h2>About</h2>
    </main>
  );
}