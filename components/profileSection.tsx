import styled from 'styled-components'
import Image from 'next/image'

interface UserDataProps {
  avatar_url: string,
  name: string,
  login: string,
  bio: string,
  location: string,
  followers: number,
  following: number,
  public_repos: number
}

interface Props{
  userData: UserDataProps
}

const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  color: #f2f2f2;
  padding: 1em 0;
`

const ProfileImage = styled(Image)`
  border-radius: 100px;
`

const ProfileName = styled.p`
  font-size: 2em;
`

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const ProfileBox = styled.div`
  background-color: #383838;
  margin: 0.2em;
`

const ProfileDetail = styled.p`
  font-size: 1.2em;
  margin: 0.5em !important;
`

const Profile: React.FC<Props> = ({userData}) => {

  const boxesData = [userData.public_repos + ' Repos', userData.followers + ' Followers', userData.following + ' Following'];

  const profileBoxes = boxesData.map((box: string | number, index: number) => (
    <ProfileBox key = {index}>
      <ProfileDetail>{box}</ProfileDetail>
    </ProfileBox>
  ));

  return(
    <ProfileContainer>
      <ProfileImage
        src = {userData.avatar_url}
        alt = "Github profile"
        width = {200}
        height = {200}
      />
      <ProfileName>{userData.name} ({userData.login})</ProfileName>
      <ProfileDetail>{userData.bio}</ProfileDetail>
      <ProfileDetail>{userData.location}</ProfileDetail>
      <BoxContainer>
        {profileBoxes}
      </BoxContainer>
    </ProfileContainer>
  )
}

export default Profile;