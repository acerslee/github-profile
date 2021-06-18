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
  max-width: 20em;
  height: 14em;
  > p, div {
    margin-left: 0.2em;
  }
  &: hover{
    background-color: #f2c957;
  }
  // @media(max-width: 740px){
  //   width: 100%;
  // }
`

const RepoName = styled.p`
  font-size: 2em;
  font-family: 'Anonymous Pro', monospace;
  overflow-wrap: anywhere;
`

const RepoDescription = styled.p`
  font-size: 1em;
  display:inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 34ch;
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
  margin-left: 0.3em;
`

const GithubIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 0.2em;
`

const GithubIconSpan = styled.span`

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

    console.log(forks, stars, watches)
  return(
    <RepoLink
      href = {url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <RepoCard>
        <RepoName>{name}</RepoName>
        <RepoDescription>{description}</RepoDescription>
        <RepoLabelContainer>
          <RepoLanguageLabel style = {setLabelStyle(language)} />
          <RepoLanguage>{language}</RepoLanguage>
          {size} KB
        </RepoLabelContainer>
        <GithubIconContainer>
          <GithubIconSpan>
            <GoRepoForked />
            {forks}
          </GithubIconSpan>
          <GithubIconSpan>
            <GoStar />
            {stars}
          </GithubIconSpan>
          <GithubIconSpan>
            <GoEye />
            {watches}
          </GithubIconSpan>
        </GithubIconContainer>
      </RepoCard>
    </RepoLink>
  )
}

export default Repo;