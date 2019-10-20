import styled from '@emotion/styled'
import { black1, black2, white1, grey } from '../common'

export const Wrapper = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
`

export const Box = styled.div`
  display: flex;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 4px;
  border-radius: 0 50px 50px 0;
  background-color: ${black2};
`

export const HeaderTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`

export const HeaderSubTitle = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: ${grey};
  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`

export const Avatar = styled.img`
  display: block;
  width: 60px!important;
  height: 60px!important;
  border-radius: 50%;
  margin-left: 20px;
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
  & a:visited {
    color: ${white1};
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

  height: 38px;
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
  margin-left: 10px;
  font-size: 12px;
  color: ${grey};
`

export const NoData = styled.div`
  margin: 4px 0;
  padding: 40px;
  text-align: center;
  color: ${grey};
  background-color: ${black2};
`

export const Loading = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  color: ${grey};
`