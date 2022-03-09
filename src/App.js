// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import  {Switch , Route}  from 'react-router-dom'
import './App.css';
import Home from "./Home";
import NavBar from './Navbar';
import Footer from "./Footer";
import ServiceList from "./ServiceList";
import ServiceDetail from "./ServiceDetail";
import BlogDefault from "./BlogDefault";
import FeaturesTestimonial from "./FeaturesTestimonial"
import BlogSingle from "./BlogSingle";
import FeaturesStyleGuide from "./FeaturesStyleGuide";
import Contact from "./Contact";
import StyleGuide from "./StyleGuide";
import "./index1.css";


function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path = "/"  component={Home} />
        <Route exact path = "/service list"  component={ServiceList} />
        <Route exact path = "/service detail"  component={ServiceDetail} />
        <Route exact path = "/blog default"  component={BlogDefault} />
        <Route exact path = "/blog single"  component={BlogSingle} />
        <Route exact path = "/testimonial"  component={FeaturesTestimonial} />
        <Route exact path = "/style guide"  component={FeaturesStyleGuide} /> 
        <Route exact path = "/StyleGuide"  component={StyleGuide} />
        <Route exact path = "/Contact"  component={Contact} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
