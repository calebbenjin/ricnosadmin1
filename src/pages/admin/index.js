import { useContext } from 'react';
import { API_URL } from '@/lib/index';
import Container from '@/components/atoms/Container';
import Layout from '@/components/organisms/Layout';
import Heading from '@/components/atoms/Heading';
import { Grid2, Grid } from '@/components/atoms/Grid';
import NotificationCard from '@/components/molecules/NotificationCard';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { IoCalendarOutline } from 'react-icons/io5';
import Section from '@/components/atoms/Section';
import Payout from '@/components/molecules/Payout';
import Deliveries from '@/components/molecules/Deliveries';
import ActiveShipments from '@/components/molecules/ActiveShipments';
import ShipmentCard from '@/components/atoms/ShipmentCard';
import ActivityLog from '@/components/molecules/ActivityLog';
import SummaryLog from '@/components/molecules/SummaryLog';
import { parseCookies } from '@/helpers/index';
import PageLoader from '@/components/organisms/PageLoader'


export default function HomePage({user}) {

  if(!user) {
    return <PageLoader />
  }

  return (
    <Layout data={user}>
      <Container>
        <Heading title={`Hello ${user?.name}`}></Heading>

        <Section>
          <Grid2>
            <NotificationCard
              title="REQUEST FOR QUOTATION"
              number={user?.quote_requests}
              icon={<HiOutlinePencilAlt className="icon" />}
            />
            <NotificationCard
              title="SHIPMENTS"
              number={user?.active_orders?.length}
              icon={<IoCalendarOutline className="icon" />}
            />
          </Grid2>
        </Section>

        <Section>
          <Grid2>
            <Payout
              notify="0"
              value="10"
              amount={user?.payouts?.riders}
            />
            {/* <Deliveries /> */}
          </Grid2>
        </Section>

        <Section>
          <ActiveShipments>
            {user?.active_orders?.length > 0 ? (
              user?.active_orders.map((order) => (
                <ShipmentCard key={order?.id} data={order} />
              ))
            ) : (
              <p>No active orders</p>
            )}
          </ActiveShipments>
        </Section>

        <Section>
          <Grid2>
            <ActivityLog data={user} />
            <SummaryLog data={user} />
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

  var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

  const res = await fetch(`${API_URL}`, requestOptions)
  
  const data = await res.json()

  return {
    props: {
      user: data.data.user
    },
  };
}
