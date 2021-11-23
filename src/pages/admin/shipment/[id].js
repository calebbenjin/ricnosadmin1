import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import Layout from '@/components/organisms/Layout'
import {useRouter} from 'next/router'

export default function ShipmentPage({ }) {
  const router = useRouter()


  return (
    <Layout>
      <Container >
        <Heading title="Active Shipment" />

        <h3>Active Shipment {router.query.id}</h3>
      </Container>
    </Layout>
  )
}