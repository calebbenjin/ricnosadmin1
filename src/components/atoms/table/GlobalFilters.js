import styled from 'styled-components'
import Container from '../Container'

export default function GlobalFilters({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows && preGlobalFilteredRows.length

  return (
    <Container>
      <SearchHeader>
        <input
          value={globalFilter || ''}
          onChange={(e) => {
            setGlobalFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
          }}
          placeholder='Search Orders'
          style={{
            border: '0',
          }}
        />
      </SearchHeader>
    </Container>
  )
}

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  input {
    padding: 15px;
    background: #fff;
    border-radius: 6px;
    width: 50%;
    border: solid 1px #333;
    box-shadow: ${(props) => props.theme.shadows.shadow1};
  }
`
