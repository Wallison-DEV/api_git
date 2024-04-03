import { useEffect, useState } from 'react'
import Titulo from '../titulo'
import { Card, LinkBotao, ReposList } from './styles'

interface Repository {
  id: number
  name: string
  language: string
  html_url: string
}

const Projeto = () => {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/Wallison-DEV/repos')
      .then((res) => res.json())
      .then((resJson: Repository[]) => {
        setRepos(resJson)
      })
  }, [])
  return (
    <ReposList>
      {repos.map((repositorio) => {
        return (
          <Card className="container" key={repositorio.id}>
            <li>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <b>Nome: </b>
                <Titulo>{repositorio.name}</Titulo>
              </div>
              <div>
                <b>Linguagem: </b>
                {repositorio.language}
              </div>
              <div>
                <LinkBotao
                  target="_blank"
                  href={repositorio.html_url}
                  rel="noreferrer"
                >
                  Visitar no Github
                </LinkBotao>
              </div>
            </li>
          </Card>
        )
      })}
    </ReposList>
  )
}
export default Projeto
