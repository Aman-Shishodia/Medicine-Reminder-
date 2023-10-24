
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <div className="main">
      <nav>
        <h1>Reminder App</h1>
        <h2 className="btn">
          {" "}
          <Link to="/addreminder" className="link">
            Add Reminder
          </Link>
        </h2>
      </nav>
     
    </div>
  );
};

export default Home;
