import React from "react";

import * as ReactBootStrap from "react-bootstrap";
import ChineseCourses from "./Component/ChineseCourses";
import JapaneseCourses from "./Component/JapaneseCourses";
import KoreanCourses from "./Component/KoreanCourses";
import Navbar from "./Component/Navbar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
      </Router>
    </div>
  );
};

export default App;
