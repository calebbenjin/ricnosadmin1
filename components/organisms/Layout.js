import styled from 'styled-components'
import Navbar from '../atoms/Navbar'
import Sidebar from '../atoms/Sidebar'

export default function Layout({ children }) {
  return (
    <Main>
      <Sidebar />
      <MainView>
        <Navbar />
        {children}
      </MainView>
    </Main>
  )
}


const Main = styled.main`
  height: 100vh;
  overflow: hidden;
  color: #333;
  display: flex;
`;


const MainView = styled.main`
  height: 100vh;
  overflow-y: scroll;
  background: #fafafa;
  width: 85%;
  color: #333;
`;

