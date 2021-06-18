import Repo from './repo'
import styled from 'styled-components'

interface Props{
  userRepos: any
}

const RepoContainer = styled.div`
  background-color: #e6e6e6 !important;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: normal;
  @media(max-width: 1200px){
    grid-template-columns: auto auto auto;
  }
  @media(max-width: 850px){
    grid-template-columns: auto auto;
  }
`;

const RepoList: React.FC<Props> = ({userRepos}) => {

  console.log(userRepos)
  return(
    <RepoContainer>
      {userRepos.map((repo: any) => (
        <Repo
          key = {repo.id}
          name = {repo.name}
          description = {repo.description || "No Description"}
          language = {repo.language || "No Language Used"}
          url = {repo.svn_url}
          size = {repo.size}
          forks = {repo.forks_count}
          stars = {repo.stargazers_count}
          watches = {repo.watchers_count}
        />
      ))}
    </RepoContainer>
  )
}

export default RepoList;