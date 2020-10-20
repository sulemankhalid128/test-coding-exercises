import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import store from "./redux/Store";
import Tasks from "./tasks/Tasks";
import CreateTask from "./tasks/CreateTask";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/list-tasks" component={Tasks} />
          <Route exact path="/create-task" component={CreateTask} />
          <Route exact path="/bulk-delete" component={Tasks} />
          <Redirect to="/list-tasks" />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
