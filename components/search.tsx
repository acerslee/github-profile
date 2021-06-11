import React, { useState } from "react";
import axios from "axios";

interface Props{
  updateUserData: Function
}

const Searchbar: React.FC<Props> = ({updateUserData}) => {
  const [searchUser, setSearchUser] = useState<string>("");


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post('/api/github', {
      searchUser
    })
      .then(res => {
        updateUserData(res.data)
      })
      .catch(err => console.error(err))
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value)
  };

  return(
    <div>
      <form
        onSubmit = {handleSubmit}
        aria-label = "Github username search"
      >
        <input
          type = "text"
          placeholder = "Search Github user here"
          onChange = {handleChange}
        />
         <input
            type = "submit"
        />
      </form>
    </div>
  )
};

export default Searchbar