import Container from '../components/atoms/Container'
import Layout from '../components/organisms/Layout'
import styled from 'styled-components'
import Heading from '../components/atoms/Heading'
import Card from '../components/atoms/Card'
import Grid from '../components/atoms/Grid'

export default function HomePage() {
  return (
    <Layout>
      <Container>
        <Heading>
          <h2>Hello John</h2>
        </Heading>
        <Grid>
          <Card>
            <h2>Hello Card</h2>
          </Card>
          <Card>
            <h2>Hello Card</h2>
          </Card>
          <Card>
            <h2>Hello Card</h2>
          </Card>
        </Grid>
      </Container>
    </Layout>
  )
}




