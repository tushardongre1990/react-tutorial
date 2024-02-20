import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise Homepage</h1>
      {/* if we use <a> it will work but will reload the page instead of simply replaing the DOM content on the page*/}
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
