import Titulo from '../../components/titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Full Stack Python em formação pela EBAC – Escola Britânica de Artes
        Criativas e Tecnologia. Profissional com perfil movido a desafios e
        constantemente buscando aprimoramento na área de tecnologia. Possuo
        experiências em JavaScript, HTML5 e CSS3 e habilidades em React. Hard
        Skills React, Django, RESTFull, TypeScript, Ajax ,VueJS, JavaScript,
        HTML, CSS, Gulp, Grunt, Bootstrap, Less, Sass, jQuerry. Campos em
        Desenvolvimento : C++, Next.JS.
      </Paragrafo>
      <GitHubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=Wallison-DEV&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Wallison-DEV&layout=compact&langs_count=7&theme=dracula" />
      </GitHubSecao>
    </section>
  )
}

export default Sobre
