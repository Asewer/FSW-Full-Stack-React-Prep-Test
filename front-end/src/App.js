import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

class AllQuotes extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }
  }
  componentDidMount = () => {
    fetch('http://15.codyhess.com:3100/all')
    .then(response => response.json())
    .then(obj => {
      this.setState({
        quotes: obj
      });
    });
  }
  render() {
    return (
    <h1>{this.state.quotes}</h1>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Link to="/allquotes">ASDF</Link>
        <Link to="/submit">ASDF</Link>
        <h1>Fun Movie Quotes Page</h1>
        <Switch>
          <Route exact path="/allquotes" component={AllQuotes} />
        </Switch>
      </div>
    );
  }
}

export default App;
