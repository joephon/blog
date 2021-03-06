import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Art, ArtDetail, Home } from './pages'
import { NavBar } from './components'
import 'animate.css'

class App extends React.Component {
  state = {
    trigger: true
  }

  render() {
    return(
      <Router>
        <NavBar {...this.state}/>
        <Switch>
          <Route exact path="/">
            <Home {...this.state} />
          </Route>
          <Route exact path="/articles">
            <Art {...this.state} />
          </Route>
          <Route path="/articles/:number">
            <ArtDetail {...this.state}/>
          </Route>
          <Route path="*">
            <div>No Match For <code>{window.location.pathname}</code></div>
          </Route>
        </Switch>
      </Router>
    )
  }
}


export default App
