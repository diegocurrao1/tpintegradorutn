import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Timer from "./Timer";
import Countdown from "./Countdown";
import Home from "./Home";

export default function Main() {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/inicio" component={Home}></Route>
          <Route path="/cronómetro" component={Timer}></Route>
          <Route path="/countdown" component={Countdown}></Route>
          <Redirect to="/inicio" />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}
