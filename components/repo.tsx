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


const RepoURL = styled.p`

`

const RepoLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RepoLanguageLabel = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: relative;
  display: inline-block;
  border: 1px solid;
  border-color: rgb(139, 148, 158);
`

const RepoLanguage = styled.span`
  margin-left: 0.5em;
`

const setLabelStyle = (language: string) => {
  if (language === "JavaScript") return {backgroundColor: "#f1e05a"}
  if (language === "TypeScript") return {backgroundColor: "#2b7489"}
  if (language === "Python") return {backgroundColor: "#3572a5"}
  if (language === "HTML") return {backgroundColor: "#e34c26"}
  if (language === "CSS") return {backgroundColor: "#563d7c"}

  return {color: "#cccccc"}
}

const Repo: React.FC<Props> = ({ name, description, language, url }) => {
  return(
    <RepoCard>
      <RepoName>{name}</RepoName>
      <RepoDescription>{description}</RepoDescription>
      <RepoLabelContainer>
        <RepoLanguageLabel style = {setLabelStyle(language)} />
        <RepoLanguage>{language}</RepoLanguage>
      </RepoLabelContainer>
      <a
        href = {url}>
      <FaGithub />
      </a>
    </RepoCard>
  )
}

export default Repo;