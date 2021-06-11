import React, { useState } from 'react';
import styled from 'styled-components';
import Searchbar from '../components/search';
import Dashboard from '../components/dashboard';
import Link from 'next/link';

export default function Home() {
  const [userData, setUserData] = useState<object>({});

  const updateUserData = (data: {}) => {
    setUserData(data)
  }

  const backToSearch = () => {
    setUserData({})
  }

  return (
    <div>
      <h1>Test</h1>
      {Object.keys(userData).length === 0
        ? <Searchbar updateUserData = {updateUserData} /> : <Dashboard backToSearch = {backToSearch}/>
      }
    </div>
  )
}
