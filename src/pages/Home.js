import React from 'react'
import { issues } from '../common'

export class Home extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    this.getIssues()
  }

  async getIssues() {
    const res = await fetch(issues, {
      method: 'get'
    })
    if (res.ok) {
      const json = await res.json()
      this.setState({ list: json })
      console.log(1111, json)
    }
  }
  
  render() {
    return(
      <div>
        {
          this.state.list.map((item, index) => {
            return <div key={index}>{item.title}</div>
          })
        }
      </div>
    )
  }
}