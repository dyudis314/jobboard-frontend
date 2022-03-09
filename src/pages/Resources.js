import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Resources() {
  return (
    <main>
      <Navbar>
        <Link to="/about" />
        <Link to="/contact" />
        <Link to="/resources" />
      </Navbar>
      <h1>Resources</h1>
    </main>
  );
}