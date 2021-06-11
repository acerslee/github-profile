import React from 'react';
import styled from 'styled-components'
import { Button } from '@material-ui/core';

interface Props{
  backToSearch: Function
}

const DashboardContainer = styled.div`

`;

const Dashboard: React.FC<Props> = ({backToSearch}) => {
    return(
      <DashboardContainer>
        <h1>hi</h1>
        <Button onClick = {() => backToSearch()}>
          Go back
        </Button>
      </DashboardContainer>
    )
}

export default Dashboard;