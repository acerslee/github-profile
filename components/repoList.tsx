import { useState, useEffect} from 'react'
import Repo from './repo'
import Sort from './sort'
import styled from 'styled-components'

interface Props{
  userRepos: any
}

const RepoContainer = styled.div`
  background-color: #8d8d8d;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: normal;
  @media(max-width: 1300px){
    grid-template-columns: auto auto auto;
  }
  @media(max-width: 1000px){
    grid-template-columns: auto auto;
  }
  @media(max-width: 650px){
    display: inline;
  }
`;

const RepoList: React.FC<Props> = ({userRepos}) => {

  const [repos, setRepos] = useState<(string | number)[]>([]);

  const handleSortRender = (choice: string) => {

    const types = {
      size: 'size',
      watches: 'watchers_count',
      forks: 'forks_count',
      stars: 'stargazers_count'
    };

    const sortProperty = types[choice];
    const sorted = [...userRepos].sort((a, b) => b[sortProperty] - a[sortProperty]);
    setRepos(sorted)
  };

  useEffect(() => setRepos(userRepos), [userRepos])

  return(
    <>
    {repos.length !== 0 &&
      <>
        <Sort handleSortRender = {handleSortRender} />
        <RepoContainer>
          {repos.map((repo: any) => (
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
      </>
    }
    </>
  )
}

export default RepoList;