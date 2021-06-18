import React, { useState } from 'react';
import Searchbar from '../components/search';
import Dashboard from '../components/dashboard';
import Footer from '../components/footer';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const SearchComponent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const GithubIcon = styled(FaGithub)`
  height: 9rem;
  width: 9rem;
  margin-bottom: 1rem;
`

export default function Home() {
  const [userData, setUserData] = useState<object>({});
  const [userRepos, setUserRepos] = useState<any>({});

  const updateUserData = (userProfileData: {}, repoData: (string | number)[]) => {
    setUserData(userProfileData)
    setUserRepos(repoData)
  }

  const backToSearch = () => {
    setUserData({})
  }

  return (
    <>
      {Object.keys(userData).length === 0
        ?
          <SearchComponent>
            <GithubIcon />
            <Searchbar updateUserData = {updateUserData} />
          </SearchComponent>
        : <Dashboard
            backToSearch = {backToSearch}
            userData = {userData}
            userRepos = {userRepos}
          />
      }
      <Footer />
    </>
  )
}
