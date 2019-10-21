import React from 'react'
import moment from 'moment'
import { withRouter, Link } from 'react-router-dom'

import { labels, issues } from '../common'
import { Loading, Wrapper, NoData, Label, Center, Root, SiderBar, Content, List, ListItem, ListItemExtra, ListItemTitle } from '../components'

@withRouter
class Home extends React.Component {
  state = {
    list: [],
    labels: [],
    forkLabels: [],
    ok: false,
    active: null,
    step: 1,
    selected: 0,
    labelsClass: 'zoomInDown',
    navLabelsClass: 'lightSpeedIn',
    clickClass: 'rubberBand'
  }

  componentDidMount() {
    this.getLabels()
    this.getIssues()
  }

  async getIssues(label) {
    let url
    if (!label || label === 'All') {
      url = issues
    } else {
      url = `${issues}?labels=${label}`
    }
    const res = await fetch(url, {
      method: 'get'
    })
    if (res.ok) {
      const json = await res.json()
      this.setState({ list: json, ok: true })
    } else {
      this.setState({ ok: true })
    }
  }

  async getLabels() {
    const res = await fetch(labels)
    if (res.ok) {
      const labels = await res.json()
      labels.unshift({name: 'All'})
      this.setState({ labels, ok: true })
    } else {
      this.setState({ ok: true })
    }
    this.renderLabelsIn()
  }

  renderLabelsIn(which = 0) {
    const { labels, forkLabels } = this.state
    setTimeout(() => {
      if (labels.length === forkLabels.length) {
        return this.renderLabelsOut()
      }
      forkLabels.push(labels[which])
      this.setState({ forkLabels })
      this.renderLabelsIn(which + 1)
    }, 1000/(labels.length));
  }

  renderLabelsOut() {
    setTimeout(() => {
      this.setState({ labelsClass: 'fadeOutDown', step: 2 })
    }, 1000);
  }

  onSelect(key) {
    const { labels } = this.state
    const label = labels[key].name
    this.setState({ selected: key })
    this.getIssues(label)
  }

  render() {
    const { labels, ok, forkLabels, labelsClass, navLabelsClass, clickClass, step, list, selected } = this.state
    return(
      <Wrapper>
        {
          step === 1
            ? <Center style={{height: '100vh', padding: '35vh 20px'}}>
              {
                ok 
                  ? labels.length
                    ? forkLabels.map((item, index) => {
                      return <Label key={index} style={{color: `#${item.color}`}} className={`animated ${labelsClass}`}>{item.name}</Label>
                    })
                    : <NoData>暂无数据</NoData>
                  : <Loading>首页加载中...</Loading>
              }
            </Center>
            : step === 2
                ? <Root>
                  <SiderBar>
                  {
                    ok 
                      ? labels.length
                        ? labels.map((item, index) => {
                          return <Label key={index} style={{color: `#${item.color}`, padding: '5px', margin: '2px', fontSize: '14px', width: selected === index ? '70px' : '60px'}} className={`animated ${navLabelsClass} ${selected === index ? clickClass : ''}`} onClick={this.onSelect.bind(this, index)}>{item.name}</Label>
                        })
                        : <NoData>暂无数据</NoData>
                      : <Loading>首页加载中...</Loading>
                  }
                  </SiderBar>
                  {
                    ok 
                      ? <List style={{width: '100%', padding: '0px'}}>
                        {
                          list.length
                            ? list.map((item, index) => {
                              return <Link key={index} to={'/articles/' + item.number} className={`animated ${navLabelsClass}`}>
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
                </Root>
              : null
        }
      </Wrapper>
    )
  }
}

export { Home }