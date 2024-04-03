import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Wallison Kauê</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          wallison_DEV
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Desenvolvedor Full Stack Python
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}
export default Sidebar
