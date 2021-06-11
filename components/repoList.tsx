import React, { useState, useEffect } from 'react'
import Repo from './repo'
import styled from 'styled-components'
import axios from 'axios'

interface Props{
  username: string
}

const RepoContainer = styled.div`

`;

const RepoList: React.FC<Props> = ({username}) => {
  const [repoList, setRepoList] = useState<string[] | number[]>([])

  useEffect(() => {
    axios.post('/api/repo', {
      username
    })
      .then(res => {
        setRepoList(res.data)
      })
      .catch(err => console.error(err))
  },[username])

  return(
    <>
      {Object.keys(repoList).length !== 0 &&
        <RepoContainer>
          {repoList.map((repo: any) => (
            <Repo
              key = {repo.id}
              name = {repo.name}
              description = {repo.description}
              language = {repo.language}
              url = {repo.svn_url}

            />
          ))}
        </RepoContainer>
      }
    </>
  )
}

export default RepoList;