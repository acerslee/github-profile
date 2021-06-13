import React, { useState } from 'react';
import Searchbar from '../components/search';
import Dashboard from '../components/dashboard';
import styled from 'styled-components';
import Head from 'next/head';

const SearchComponent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IntroHeader = styled.h1`

`

export default function Home() {
  const [userData, setUserData] = useState<object>({});

  const updateUserData = (data: {}) => {
    setUserData(data)
  }

  const backToSearch = () => {
    setUserData({})
  }

  return (
    <>
      <Head>
        <title>Github Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Visualization of a user's Github profile"></meta>
        <meta charSet="UTF-8"></meta>
      </Head>
      {Object.keys(userData).length === 0
        ?
          <SearchComponent>
            <h1>Github Profile</h1>
            <Searchbar updateUserData = {updateUserData} />
          </SearchComponent>
        : <Dashboard
            backToSearch = {backToSearch}
            userData = {userData}
          />
      }
    </>
  )
}
