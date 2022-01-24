import { useContext } from 'react';
import Container from '@/components/atoms/Container';
import Layout from '@/components/organisms/Layout';
import styled from 'styled-components';
import Heading from '@/components/atoms/Heading';
import { Grid2, Grid } from '@/components/atoms/Grid';
import NotificationCard from '@/components/molecules/NotificationCard';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { CgNotes } from 'react-icons/cg';
import { IoCalendarOutline } from 'react-icons/io5';
import Section from '@/components/atoms/Section';
import Payout from '@/components/molecules/Payout';
import Deliveries from '@/components/molecules/Deliveries';
import ActiveShipments from '@/components/molecules/ActiveShipments';
import ShipmentCard from '@/components/atoms/ShipmentCard';
import ActivityLog from '@/components/molecules/ActivityLog';
import SummaryLog from '@/components/molecules/SummaryLog';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/lib/index';
import AuthContext from '@/context/AuthContext';

export default function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <Container>
        <Heading title={`Hello ${user.name}`}></Heading>

        <Section>
          <Grid>
            <NotificationCard
              title="REQUEST FOR QUOTATION"
              number={user.quote_requests}
              greaterThen="1.2"
              icon={<HiOutlinePencilAlt className="icon" />}
            />
            <NotificationCard
              title="SHIPMENTS"
              number={user.active_orders.length}
              greaterThen="1.2"
              icon={<IoCalendarOutline className="icon" />}
            />
            <NotificationCard
              title="INVOICE TO PAY"
              number="32"
              greaterThen="1.2"
              icon={<CgNotes className="icon" />}
            />
          </Grid>
        </Section>

        <Section>
          <Grid2>
            <Payout
              notify="8"
              value="60"
              riderAmount={user.payouts.riders}
              agentAmount={user.payouts.agent}
            />
            <Deliveries />
          </Grid2>
        </Section>

        <Section>
          <ActiveShipments>
            {user.active_orders.length > 0 ? (
              user.active_orders.map((order) => (
                <ShipmentCard key={order.id} data={order} />
              ))
            ) : (
              <p>No active orders</p>
            )}
          </ActiveShipments>
        </Section>

        <Section>
          <Grid2>
            <ActivityLog />
            <SummaryLog />
          </Grid2>
        </Section>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: null,
    },
  };
}
