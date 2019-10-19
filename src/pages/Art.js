import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { issues } from '../common'
import { Wrapper, List, ListItem, ListItemTitle, ListItemExtra } from '../components'

export class Art extends React.Component {
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
      <Wrapper>
        <List>
          {
            this.state.list.map((item, index) => {
              return <Link to={'/articles/' + item.number}>
                <ListItem key={index}>
                  <ListItemTitle>{item.title}</ListItemTitle>
                  <ListItemExtra>{moment(item.updated_at).format('MM/DD/YYYY')}</ListItemExtra>
                </ListItem>
              </Link>
            })
          }
        </List>
      </Wrapper>
    )
  }
}