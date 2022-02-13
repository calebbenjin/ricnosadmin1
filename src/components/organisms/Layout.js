import styled from 'styled-components'
// import Footer from '../atoms/Footer'
import Navbar from '../atoms/Navbar'
import Sidebar from '../atoms/Sidebar'
import Head from 'next/head'

export default function Layout({ data, keywords, description, title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Main>
        <Sidebar />
        <MainView>
          <Navbar data={data} />
          {children}
          {/* <Footer /> */}
        </MainView>
      </Main>
    </>
  )
}


// export async function getServerSideProps({ req }) {
//   const { token } = parseCookies(req);
//   if (!token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   const res = await fetch(`${API_URL}`, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
  
//   const data = await res.json()

//   return {
//     props: {
//       user: data.data.user
//     },
//   };
// }

Layout.defaultProps = {
  title: 'Ricnos Logistic',
  description: 'Ricnos Logistic',
  keywords: 'Music, Events, Parties, Shows, dj,',
}

const Main = styled.main`
  height: 100vh;
  overflow: hidden;
  color: #333;
  display: flex;
`

const MainView = styled.main`
  height: 100vh;
  overflow-y: scroll;
  background: #fafafa;
  width: 85%;
  color: #333;
`
