import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages'

class App extends React.Component {

  render() {
    return(
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}


export default App
