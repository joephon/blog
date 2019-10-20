import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavWrapCircle, Navigator, NavigatorBack } from './nav.style'
import { Wrapper } from './shared.style'

@withRouter
class NavBar extends React.Component {

  renderNavText() {
    if (Math.max(0.5, Math.random()) === 0.5) {
      return `GoTo`
    } else {
      return `走起`
    }
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    const { trigger, history } = this.props
    const { pathname } = history.location
    return[
      // <NavWrapCircle key={0}>
      //   {this.renderNavText()}
      // </NavWrapCircle>,
      pathname !== '/' && pathname !== '/articles' && pathname !== ''
       ? <Navigator key={1}>
        <Wrapper>
          <NavigatorBack onClick={this.goBack.bind(this)}>{`<- Back`}</NavigatorBack>
        </Wrapper>
      </Navigator>
       : null
    ]
  }
}

export { NavBar }