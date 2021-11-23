import Container from 'src/components/atoms/Container'
import Heading from 'src/components/atoms/Heading'
import Layout from 'src/components/organisms/Layout'
import {useRouter} from 'next/router'

export default function LogsPage({ }) {
  const router = useRouter()


  return (
    <Layout>
      <Container >
        <Heading title="Active Logs" />

        <h3>Active Logs {router.query.id}</h3>
      </Container>
    </Layout>
  )
}