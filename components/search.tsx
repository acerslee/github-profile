import React, { useState } from "react";
import axios from "axios";

const Searchbar = () => {

  const [searchUser, setSearchUser] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post('/api/github', {
      searchUser
    })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value)
  };

  return(
    <div>
      <form onSubmit = {handleSubmit}>
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