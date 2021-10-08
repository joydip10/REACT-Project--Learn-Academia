import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from './Components/Home/Home';
import Services from "./Components/Services/Services";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import Opportunities from "./Components/Opportunities/Opportunities";
function App() {
  return (
    <div className="container">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route path='/service/:courseId'>
            <CourseDetails></CourseDetails>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/opportunities'>
            <Opportunities></Opportunities>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
