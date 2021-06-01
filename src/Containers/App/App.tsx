import React from "react";
import { Route, Switch } from "react-router-dom";
import RegPageContainer from "../RegPageContainer";
import AuthPageContainer from "../AuthPageContainer";
import MainPageContainer from "../MainPageContainer";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPageContainer} />
        <Route path="/auth" exact component={AuthPageContainer} />
        <Route path="/reg" exact component={RegPageContainer} />
      </Switch>
    </>
  );
}

export default App;
