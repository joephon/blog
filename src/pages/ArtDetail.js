import React from 'react'
import { withRouter } from 'react-router-dom'
import MD from 'react-markdown'
import htmlParser from 'react-markdown/plugins/html-parser'
import { Wrapper, Content, CodeBlock } from '../components'
import { issues } from '../common'

@withRouter
class ArtDetail extends React.Component {
  state = {
    detail: '',
  }
  componentDidMount() {
    const { number } = this.props.match.params
    this.getArtDetail(number)
  }

  async getArtDetail(number) {
    const res = await fetch(`${issues}/${number}`)
    if (res.ok) {
      const { body } = await res.json()
      this.setState({ detail: body })
    }
  }

  render() {
    const parseHtml = htmlParser({
      isValidNode: node => node.type !== 'script',
      processingInstructions: [/* ... */]
    })
    return(
      <Wrapper>
        <Content>
          <MD
            source={this.state.detail}
            escapeHtml={false}
            astPlugins={[parseHtml]}
            renderers={{
              code: CodeBlock,
            }}
          />
        </Content>
      </Wrapper>
    )
  }
}

export { ArtDetail }