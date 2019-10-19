import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Art, ArtDetail } from './pages'
import { NavBar } from './components'

class App extends React.Component {
  state = {
    trigger: true
  }

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <Art {...this.state} />
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
        <NavBar {...this.state}/>
      </Router>
    )
  }
}


export default App
