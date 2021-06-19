import styled from 'styled-components';

interface Props{
  handleSortRender: Function
}

const SortContainer = styled.div`
  font-size: 2rem;
  margin: 0.2em;
  @media(max-width: 750px){
    font-size: 1.5rem;
  }
`

const Selector = styled.select`
  font-size: 2rem;
  border: 1px solid;
  width: 20%;
  @media(max-width: 750px){
    width: 50%;
    font-size: 1.5rem;
  }
`

const Sort: React.FC<Props> = ({ handleSortRender }) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSortRender(e.target.value)
  };

  return(
    <SortContainer>
      <label htmlFor = "filter-select">Sort By: </label>
      <Selector id = "filter-select" onChange = {handleChange} defaultValue = {"none"}>
        <option value = "none" disabled hidden>
          Select
        </option>
        <option value = "size">Size</option>
        <option value = "watches">Watches</option>
        <option value = "forks">Forks</option>
        <option value = "stars">Stars</option>
      </Selector>
    </SortContainer>
  )
}

export default Sort;