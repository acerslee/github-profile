import React from "react"
import styled from "styled-components"
import Profile from './profileSection'
import RepoList from './repoList'
import { Button } from "@material-ui/core"
interface Props{
  backToSearch: Function,
  userData: {}
}

const DashboardContainer = styled.div`

`;

const GithubImage = styled.img`
  border-radius: 50px;
`;

const Dashboard: React.FC<Props> = ({backToSearch, userData}) => {

  console.log(userData)
    return(
      <DashboardContainer>
        <Button
          variant = "contained"
          onClick = {() => backToSearch()}>
          Go back
        </Button>
        <Profile userData = {userData} />
        <RepoList username = {userData.login} />
      </DashboardContainer>
    )
}

export default Dashboard;