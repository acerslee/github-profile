import React from "react"
import styled from "styled-components"
import Profile from "./profileSection"
import RepoList from "./repoList"
import { FaArrowLeft } from "react-icons/fa";

interface Props{
  backToSearch: Function,
  userData: any,
  userRepos: any
}

const ReturnButton = styled(FaArrowLeft)`
  position: absolute;
  top: 1em;
  left: 0.5em;
  color: #f2f2f2;
  font-size: 2em;
`

const Dashboard: React.FC<Props> = ({backToSearch, userData, userRepos}) => {
    return(
      <>
      {Object.keys(userData).length !== 0 && Object.keys(userRepos).length !== 0 &&
        <>
          <ReturnButton onClick = {() => backToSearch()} />
          <Profile userData = {userData} />
          <RepoList userRepos = {userRepos} />
        </>
      }
      </>
    )
}

export default Dashboard;