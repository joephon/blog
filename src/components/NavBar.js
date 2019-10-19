import React from 'react'
import { NavWrapCircle } from './nav.style'

export class NavBar extends React.Component {

  renderNavText() {
    if (Math.max(0.5, Math.random()) === 0.5) {
      return `GoTo`
    } else {
      return `走起`
    }
  }

  render() {
    const { trigger } = this.props
    return(
      <NavWrapCircle>
        {this.renderNavText()}
      </NavWrapCircle>
    )
  }
}