import Repo from './repo'
import styled from 'styled-components'

interface Props{
  userRepos: any
}

const RepoContainer = styled.div`
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

  return(
    <RepoContainer>
      {userRepos.map((repo: any) => (
        <Repo
          key = {repo.id}
          name = {repo.name}
          description = {repo.description || "No Description"}
          language = {repo.language || "No Language Used"}
          url = {repo.svn_url}
        />
      ))}
    </RepoContainer>
  )
}

export default RepoList;