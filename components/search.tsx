import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';

interface Props{
  updateUserData: Function
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const SearchText = styled.input`
  font-size: 2em;
`

const SubmitButton = styled.input`
  background-color: #262626;
  color: #ffffff;
  border: none;
  margin-top: 1em;
  padding: 1em;
  font-size: 2em;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.3em;
`

const Searchbar: React.FC<Props> = ({updateUserData}) => {
  const [searchUser, setSearchUser] = useState<string>("");
  const [isValidUser, setIsValidUser] = useState<boolean>(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.all([
      axios.post('/api/profile', {searchUser}),
      axios.post('/api/repo', {searchUser})
    ])
    .then(responses => {
      setIsValidUser(true)
      let repoData: string[] = responses[1].data.sort(((a: {updated_at: string}, b: {updated_at: string}) => (a.updated_at < b.updated_at) ? 1 : -1))
      updateUserData(responses[0].data, repoData)
    })
    .catch(err => {
      console.error(err)
      setIsValidUser(false)
    })
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(event.target.value)
  };

  return(
    <>
      <Form
        onSubmit = {handleSubmit}
        aria-label = "Github username search"
      >
        <SearchText
          type = "text"
          placeholder = "Search Github user here"
          onChange = {handleChange}
        />
         <SubmitButton
            type = "submit"
            value = "Search User"
        />
      </Form>
      {!isValidUser &&
        <ErrorMessage>Cannot find that user!</ErrorMessage>
      }
    </>
  )
};

export default Searchbar