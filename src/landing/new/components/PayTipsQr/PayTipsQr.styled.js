import styled from 'styled-components'

import { Text } from 'styled'

export { Text }

export const PayTipsQr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  padding: 26px;
  border-radius: 20px;
  background: radial-gradient(154.55% 100% at 0% 100%, #ffaa00 0%, #ff0000 100%);
  text-align: center;
  box-sizing: border-box;

  p {
    margin-top: 26px;
    font-size: 13px;
    color: #fff;
    line-height: 15.9px;
  }
`

export const Qr = styled.div`
  margin-top: 26px;
  padding: 8px;
  background: #ffffff;
  border-radius: 10px;
`
