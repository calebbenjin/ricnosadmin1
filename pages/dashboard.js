import Container from '../components/atoms/Container'
import Layout from '../components/organisms/Layout'
import styled from 'styled-components'
import Heading from '../components/atoms/Heading'
import {Grid2, Grid } from '../components/atoms/Grid'
import NotificationCard from '../components/molecules/NotificationCard'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { CgNotes } from 'react-icons/cg'
import { IoCalendarOutline } from 'react-icons/io5'
import Section from '../components/atoms/Section'
import Payout from '../components/molecules/Payout'
import Deliveries from '../components/molecules/Deliveries'
import ActiveShipments from '../components/molecules/ActiveShipments'
import ShipmentCard from '../components/atoms/ShipmentCard'
import ActivityLog from '../components/molecules/ActivityLog'
import SummaryLog from '../components/molecules/SummaryLog'



const data = [
  {
    id: 1,
    itemName: 'Bag',
    quantity: 34,
    amount: 300,
    location: 'Choba'
  },
  {
    id: 2,
    itemName: 'Shoe',
    quantity: 3,
    amount: 6500,
    location: 'Aluu'
  },
  {
    id: 3,
    itemName: 'Cloth',
    quantity: 30,
    amount: 69500,
    location: 'Port Harcourt'
  }
]


export default function HomePage() {
  return (
    <Layout>
      <Container>
        <Heading>
          <h2>Hello John</h2>
        </Heading>

        <Section>
          <Grid>
            <NotificationCard title="REQUEST FOR QUOTATION" number="32" greaterThen="1.2" icon={<HiOutlinePencilAlt className='icon' />} />
            <NotificationCard title="SHIPMENTS" number="32" greaterThen="1.2" icon={<IoCalendarOutline className='icon' />} />
            <NotificationCard title="INVOICE TO PAY" number="32" greaterThen="1.2" icon={<CgNotes className='icon' />} />
          </Grid>
        </Section>

        <Section>
          <Grid2>
            <Payout notify="8" value="60" amount="340000" types="Rider" />
            <Deliveries />
          </Grid2>
        </Section>

        <Section>
          <ActiveShipments>
            {data.map((items) => (
              <ShipmentCard key={items.id} data={items} />
            ))}
          </ActiveShipments>
        </Section>

        <Section>
          <Grid2>
            <ActivityLog  />
            <SummaryLog />
          </Grid2>
        </Section>
      </Container>
    </Layout>
  )
}




