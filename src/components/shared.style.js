import styled from '@emotion/styled'
import { black1, black2, white1, grey } from '../common'

export const Wrapper = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
`

export const Content = styled.div`
  box-sizing: border-box;
  padding: 20px;
  background-color: ${black2};
  & img {
    border-radius: 20px;
    display: block;
    margin: 20px auto;
    max-width: 100%;
  }
  & pre {
    border-radius: 5px;
    padding: 10px;
    overflow-x: scroll;
    background-color: ${black1};
  }
  @media screen and (max-width: 375px) {
    padding: 10px;
    font-size: 12px;
    & pre {
      border-radius: 3px;
      padding: 5px;
      overflow-x: scroll;
      background-color: ${black1};
    }
  }
`

export const List = styled.div`
  padding: 20px;
  & a {
    text-decoration: none;
  }
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${black2};
  &:hover {
    cursor: pointer;
  }
`

export const ListItemTitle = styled.div`
  font-size: 18px;
  color: ${white1};
`

export const ListItemExtra = styled.div`
  font-size: 12px;
  color: ${grey};
`