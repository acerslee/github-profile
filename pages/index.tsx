import React, { useState } from 'react';
import Searchbar from '../components/search';
import Dashboard from '../components/dashboard';

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
      {Object.keys(userData).length === 0
        ? <Searchbar updateUserData = {updateUserData} />
        : <Dashboard
            backToSearch = {backToSearch}
            userData = {userData}
          />
      }
    </>
  )
}
