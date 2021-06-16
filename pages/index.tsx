import React, { useState } from 'react';
import Header from '../components/head';
import Searchbar from '../components/search';
import Dashboard from '../components/dashboard';
import styled from 'styled-components';

const SearchComponent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IntroHeader = styled.h1`
  font-size: 3em;
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
      <Header />
      {Object.keys(userData).length === 0
        ?
          <SearchComponent>
            <IntroHeader>Github Profile</IntroHeader>
            <Searchbar updateUserData = {updateUserData} />
          </SearchComponent>
        : <Dashboard
            backToSearch = {backToSearch}
            userData = {userData}
            userRepos = {userRepos}
          />
      }
    </>
  )
}
