import React, { Component } from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

const Home = () => {
  return <h1>Home!</h1>;
};

const About = () => {
  return <h1>About!</h1>;
};

class Data extends Component {
  state = { title: "" };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => this.setState({ title: json.title }));
  }
  render() {
    return <h1>{this.state.title}</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact render={Home} />
          <Route path="/about" render={About} />
          <Route path="/data" render={() => <Data />} />
        </Switch>
      </div>
    );
  }
}

export default App;
