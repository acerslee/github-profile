import React from "react"
import styled from "styled-components"
import Profile from "./profileSection"
import RepoList from "./repoList"
import { Button } from "@material-ui/core"

interface Props{
  backToSearch: Function,
  userData: any,
  userRepos: any
}

const ReturnButton = styled(Button)`
  position: absolute;
  top: 4em;
  left: 1em;
`

const DashboardContainer = styled.div`
  height: auto;
`;



const Dashboard: React.FC<Props> = ({backToSearch, userData, userRepos}) => {

    return(
      <>
      {Object.keys(userData).length !== 0 && Object.keys(userRepos).length !== 0 &&
        <>
          <ReturnButton
            variant = "contained"
            onClick = {() => backToSearch()}
          >
            Go back
          </ReturnButton>
          <DashboardContainer>
            <Profile userData = {userData} />
            <RepoList userRepos = {userRepos} />
          </DashboardContainer>
        </>
      }
      </>
    )
}

export default Dashboard;