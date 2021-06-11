import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

interface Props {
  name: string,
  description: string,
  language: string,
  url: string
}

const RepoCard = styled.div`
  border: 1px solid;
`

const RepoName = styled.p`
  font-size: 2em;
`

const RepoDescription = styled.p`
  font-size: 1em;
`

const RepoLanguage = styled.p`

`

const RepoURL = styled.p`

`

const Repo: React.FC<Props> = ({ name, description, language, url }) => {
  return(
    <RepoCard>
      <RepoName>{name}</RepoName>
      <RepoDescription>{description}</RepoDescription>
      <RepoLanguage>{language}</RepoLanguage>
      <a
        href = {url}>
      <FaGithub />
      </a>
    </RepoCard>
  )
}

export default Repo;