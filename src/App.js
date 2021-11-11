import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

const AboutUs = () => {
  return <h1>AboutUs</h1>;
};
const ContactUs = () => {
  return <h1>ContactUs</h1>;
};

function App() {
  return (
    <Router>
      <NavBar fixed="top" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/review" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
