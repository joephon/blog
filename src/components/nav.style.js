import styled from '@emotion/styled'
import { black3, black2, black1, white1 } from '../common'

export const NavWrapCircle = styled.div`
  position: fixed;
  right: 20px;
  bottom: 60px;

  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px ${white1};
  line-height: 60px;
  text-align: center;
  background-color: ${black2};
  color: ${white1};
  &:hover {
    cursor: pointer;
  }
`

export const Navigator = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  box-shadow: 0px 1px 3px ${black1};
  background-color: ${black3};

  @media screen and (max-width: 375px) {
    padding: 0 10px;
  }
`

export const NavigatorBack = styled.div`
  font-size: 18px;
  line-height: 60px;
  color: ${white1};
  cursor: pointer;
`