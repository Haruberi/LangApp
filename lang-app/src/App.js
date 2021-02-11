import React from "react";

import * as ReactBootStrap from "react-bootstrap";
import Home from "./Main/home";
import ChineseCourses from "./Component/ChineseCourses";
import JapaneseCourses from "./Component/JapaneseCourses";
import KoreanCourses from "./Component/KoreanCourses";
import Navbar from "./Component/Navbar";

import Chinlevel1 from "./Levelpages/chinlevel1";
import Japlevel1 from "./Levelpages/japlevel1";
import Korlevel1 from "./Levelpages/korlevel1";
import Button from "react-bootstrap/Button";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/chinesecourses" component={ChineseCourses}>
            <ChineseCourses />
          </Route>
          <Route path="/japanesecourses" component={JapaneseCourses}>
            <JapaneseCourses />
          </Route>
          <Route path="/koreancourses" component={KoreanCourses}>
            <KoreanCourses />
          </Route>
        </Switch>

        <Button />
        <Switch>
          <Route path="/chinlevel1" component={Chinlevel1}>
            <Chinlevel1 />
          </Route>
          <Route path="/japlevel1" component={Japlevel1}>
            <Japlevel1 />
          </Route>
          <Route path="/korlevel1" component={Korlevel1}>
            <Korlevel1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
