import { BrowserRouter as Link} from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Post() {
    return (
      <div>
         <Navbar>
          <Link to="/about"/>
          <Link to="/contact" />
          <Link to="/resources"/>
        </Navbar>
        <h1>Post a Job</h1>
      </div>
    );
  }