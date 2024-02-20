import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise Homepage</h1>
      {/* if we use <a> it will work but will reload the page instead of simply replaing the DOM content on the page*/}
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default Homepage;
