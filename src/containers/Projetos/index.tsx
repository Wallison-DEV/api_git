import Projeto from '../../components/Projetos'
import Titulo from '../../components/titulo'
import { Lista } from './styles'

const Projetos = () => {
  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        <li>
          <Projeto />
        </li>
      </Lista>
    </section>
  )
}

export default Projetos
