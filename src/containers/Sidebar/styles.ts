import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin: 24px 0 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background: ${(props) => props.theme.corDeFundoBotao};
`
export const SidebarContainer = styled.div`
  position.sticky;
  top: 80px;
  left: 0;

  @media(max-width: 768px){
    margin-bottom: 40px;
    text-align: center;
  }
`
