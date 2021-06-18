import styled from 'styled-components'
import { GoRepoForked, GoStar, GoEye} from 'react-icons/go'

interface Props {
  name: string,
  description: string,
  language: string,
  url: string,
  size: number,
  forks: number,
  stars: number,
  watches: number
}

const RepoLink = styled.a`
  &&&{
    text-decoration: none;
    color: black;
  }
`

const RepoCard = styled.div`
  border: 1px solid;
  margin: 0.3em;
  height: 12em;
  min-width: 20em;
  > p, div {
    margin-left: 0.3em;
  }
  &: hover{
    background-color: #f2c957;
  }
`

const RepoName = styled.p`
  font-size: 1.7em;
  font-family: 'Anonymous Pro', monospace;
  overflow-wrap: anywhere;
  height: 1.2em;
`

const RepoDescription = styled.p`
  font-size: 1em;
  display:inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 34ch;
`

const RepoLabelAndSize = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 0.3em;
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
  margin-left: 0.2em;
`

const GithubIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  top: 5%;
`

const setLabelStyle = (language: string) => {
  if (language === "JavaScript") return {backgroundColor: "#f1e05a"}
  if (language === "TypeScript") return {backgroundColor: "#2b7489"}
  if (language === "Python") return {backgroundColor: "#3572a5"}
  if (language === "HTML") return {backgroundColor: "#e34c26"}
  if (language === "CSS") return {backgroundColor: "#563d7c"}

  return {color: "#cccccc"}
}

const Repo: React.FC<Props> = ({
  name,
  description,
  language,
  url,
  size,
  forks,
  stars,
  watches
  }) => {

  return(
    <RepoLink
      href = {url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <RepoCard>
        <RepoName>{name}</RepoName>
        <RepoDescription>{description}</RepoDescription>

        <RepoLabelAndSize>
          <RepoLabelContainer>
            <RepoLanguageLabel style = {setLabelStyle(language)} />
            <RepoLanguage>{language}</RepoLanguage>
          </RepoLabelContainer>
          {size} KB
        </RepoLabelAndSize>

        <GithubIconContainer>
          <span>
            <GoRepoForked />
            <span>{forks}</span>
          </span>
          <span>
            <GoStar />
            {stars}
          </span>
          <span>
            <GoEye />
            {watches}
          </span>
        </GithubIconContainer>

      </RepoCard>
    </RepoLink>
  )
}

export default Repo;