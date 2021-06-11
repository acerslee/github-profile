
type UserData = {
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
  userData: UserData
}

const Profile: React.FC<Props> = ({userData}) => {
  return(
    <div>
      <img src = {userData.avatar_url} />
        <p>{userData.name}</p>
        <p>{userData.login}</p>
        <p>{userData.bio}</p>
        <p>{userData.location}</p>
        <p>{userData.followers}</p>
        <p>{userData.following}</p>
        <p>{userData.public_repos} Repos</p>
    </div>
  )
}

export default Profile;