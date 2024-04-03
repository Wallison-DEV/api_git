import styled from 'styled-components'

import { Props } from './'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '16px')};
  font-weight: bold;
  margin-left: 8px;
`
