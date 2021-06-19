import styled from 'styled-components';

interface Props{
  handleSortRender: Function
}

const SortContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const Sort: React.FC<Props> = ({ handleSortRender }) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSortRender(e.target.value)
  };

  return(
    <SortContainer>
      <h2>
        Sort By:
      </h2>
      <select onChange = {handleChange} defaultValue = {"none"}>
        <option value = "none" disabled hidden>
          Select an Option
        </option>
        <option value = "size">Size</option>
        <option value = "watches">Watches</option>
        <option value = "forks">Forks</option>
        <option value = "stars">Stars</option>
      </select>
    </SortContainer>
  )
}

export default Sort;