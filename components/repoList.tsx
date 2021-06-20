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

const ShowMoreText = styled.p`
  text-align:center;
`;

const RepoList: React.FC<Props> = ({userRepos}) => {

  const [repos, setRepos] = useState<any>([]);

  //for mobile only
  const [itemsToShow, setItemsToShow] = useState<number>(10);

  const handleSortRender = (choice: string) => {

    type filterTypes = {
      [key: string]: string
    }

    const types: filterTypes = {
      size: 'size',
      watches: 'watchers_count',
      forks: 'forks_count',
      stars: 'stargazers_count'
    };

    const sortProperty = types[choice];
    const sorted = [...repos].sort((a, b) => b[sortProperty] - a[sortProperty]);
    setRepos(sorted)
  };

  //for mobile only
  const showMoreLoader = () => {
    setRepos(userRepos.slice(0, itemsToShow + 5))
    setItemsToShow(itemsToShow + 5)
  };

  //this useEffect triggers whenever a new user is searched without refreshing the page
  useEffect(() => {
    if (window.screen.width < 750) {
      let slicedUserRepos = userRepos.slice(0, 10)
      setRepos(slicedUserRepos)
      setItemsToShow(10)
    }
      else setRepos(userRepos)
  },[userRepos])

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
          {window.screen.width < 750 &&
            <>
              {itemsToShow >= userRepos.length
                ? <ShowMoreText>No more repos to load</ShowMoreText>
                : <ShowMoreText onClick = {showMoreLoader}>Click here to load more repos</ShowMoreText>
              }
            </>
          }
        </RepoContainer>
      </>
    }
    </>
  )
}

export default RepoList;