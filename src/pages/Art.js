import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { issues } from '../common'
import { Wrapper, List, ListItem, ListItemTitle, ListItemExtra, Loading, NoData } from '../components'

export class Art extends React.Component {
  state = {
    list: [],
    ok: false,
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
      this.setState({ list: json, ok: true })
    } else {
      this.setState({ ok: true })
    }
  }
  
  render() {
    const { list, ok } = this.state
    return(
      <Wrapper>
        {
          ok 
            ? <List>
              {
                list.length
                  ? list.map((item, index) => {
                    return <Link key={index} to={'/articles/' + item.number}>
                      <ListItem>
                        <ListItemTitle>{item.title}</ListItemTitle>
                        <ListItemExtra>{moment(item.updated_at).format('MM/DD/YYYY')}</ListItemExtra>
                      </ListItem>
                    </Link>
                  })
                  : <NoData>暂无数据</NoData>
              }
            </List>
            : <Loading>加载中...</Loading>
        }
      </Wrapper>
    )
  }
}