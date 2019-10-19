import styled from '@emotion/styled'
import { black1, black2, white1 } from '../common'

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