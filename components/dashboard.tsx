import React from "react"
import styled from "styled-components"
import Profile from "./profileSection"
import LanguageChart from "./chart"
import RepoList from "./repoList"
import { Button } from "@material-ui/core"
interface Props{
  backToSearch: Function,
  userData: any,
  userRepos: any
}

const DashboardContainer = styled.div`
`;

const GithubImage = styled.img`
  border-radius: 50px;
`;

const Dashboard: React.FC<Props> = ({backToSearch, userData, userRepos}) => {

    return(
      <>
      {Object.keys(userData).length !== 0 && Object.keys(userRepos).length !== 0 &&
        <>
          <Button
            variant = "contained"
            onClick = {() => backToSearch()}>
            Go back
          </Button>
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