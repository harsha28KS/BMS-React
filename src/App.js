import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SliderImages from "./components/SliderImages";
import CardsSlider from "./components/CardsSlider";
import Premiere from "./components/Premiere";
// import AllMovies from "./components/AllMovies";
import AllMoviesFetch from "./components/AllMoviesFetch";
// import SingleMovie from "./components/SingleMovie";
import SingleMovieFetch from "./components/SingleMovieFetch";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <SliderImages />
            <CardsSlider />
            <Premiere />
          </Route>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
