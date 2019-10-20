import React from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import MD from 'react-markdown'
import htmlParser from 'react-markdown/plugins/html-parser'
import { Wrapper, Content, CodeBlock, Box, Header, HeaderTitle, HeaderSubTitle, Avatar, NoData, Loading } from '../components'
import { issues } from '../common'

@withRouter
class ArtDetail extends React.Component {
  state = {
    detail: '',
    comments: [],
    detailOk: false,
    commentsOk: false,
  }
  componentDidMount() {
    const { number } = this.props.match.params
    this.getArtDetail(number)
    this.getArtComments(number)
  }

  async getArtDetail(number) {
    const res = await fetch(`${issues}/${number}`)
    if (res.ok) {
      const detail = await res.json()
      this.setState({ detail, detailOk: true })
    } else {
      this.setState({ detailOk: true, commentsOk: true })
    }
  }

  async getArtComments(number) {
    const res = await fetch(`${issues}/${number}/comments`)
    if (res.ok) {
      const comments = await res.json()
      this.setState({ comments, commentsOk: true })
    } else {
      this.setState({ detailOk: true, commentsOk: true })
    }
  }

  render() {
    const parseHtml = htmlParser({
      isValidNode: node => node.type !== 'script',
      processingInstructions: [/* ... */]
    })

    const { body, title, created_at, user } = this.state.detail
    const { comments, detailOk, commentsOk } = this.state
    return(
      <Wrapper style={{marginTop: '63px'}}>
        { 
          detailOk
           ? [<Header>
            <Box style={{flexDirection: 'column'}}>
              <HeaderTitle>{title}</HeaderTitle>
              <HeaderSubTitle>Posted By <span style={{color: '#fff', fontWeight: 'bold'}}>{user && user.login}</span> At {moment(created_at).format('YYYY-MM-DD HH:mm:ss')}</HeaderSubTitle>
            </Box>
            <a href={user && user.html_url} target="blank">
              <Avatar src={user && user.avatar_url} alt='User'/>
            </a>
          </Header>,
          <Content>
            <MD
              source={body}
              escapeHtml={false}
              astPlugins={[parseHtml]}
              renderers={{
                code: CodeBlock,
              }}
            />
          </Content>]
           : <Loading>正文加载中...</Loading>
        }
        {
          commentsOk
            ? comments.length 
              ? comments.map((item, index) => {
                return <Header key={index} style={{borderRadius: '50px 0 0 50px', marginTop: '4px', justifyContent: 'flex-start'}}>
                  <a href={item.user.html_url} target="blank">
                    <Avatar src={item.user.avatar_url} alt='User' style={{margin: '0 10px 0 0'}}/>
                  </a>
                  <Box style={{flexDirection: 'column'}}>
                    <HeaderTitle>{item.body}</HeaderTitle>
                    <HeaderSubTitle>Commented By <span style={{color: '#fff', fontWeight: 'bold'}}>{item.user.login}</span> At {moment(item.created_at.created_at).format('YYYY-MM-DD HH:mm:ss')}</HeaderSubTitle>
                  </Box>
                </Header>
              })
              : <NoData>暂无评论</NoData>
            : <Loading>正文加载中...</Loading>
        }
      </Wrapper>
    )
  }
}

export { ArtDetail }