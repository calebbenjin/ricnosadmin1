import styled from 'styled-components'

export default function Heading({ title, icon, children }) {
  return (
    <HeadingStyle>
        <h4>
          <span>{icon}</span>
          {title}
        </h4>
        {children}
    </HeadingStyle>
  )
}

const HeadingStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding-bottom: 1rem;
  width: 100%;
  background: red;
  border-bottom: solid 1px #333;

  h4 {
    font-weight: 700;
    display: flex;
    align-items: center;

    span {
      font-size: 1.5rem;
      margin-right: 10px;
    }
  }
`
