import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@chakra-ui/react';
import Layout from '@/components/organisms/Layout';
import styles from '@/styles/support/Support.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import TicketChat from '@/components/organisms/TicketChat';
import LiveChat from '@/components/organisms/LiveChat';
import { parseCookies } from '@/helpers/index';

export default function SupportPage({ openTickets, closedTickets, token }) {
  const [attachedFile, setAttachedFile] = useState();
  const [showTicket, setShowTicket] = useState(true);
  const [showLiveChat, setShowLiveChat] = useState(false);

  const handleTicket = () => {
    setShowLiveChat(false);
    setShowTicket(true);
  };

  const handleLiveChat = () => {
    setShowTicket(false);
    setShowLiveChat(true);
  };

  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header className={styles.header}>
        <div className={styles.leftSide}>
          <button onClick={handleTicket}>Tickets</button>
          <button onClick={handleLiveChat}>Live Chats</button>
        </div>
        {/* <Button colorScheme="red" leftIcon={<AiOutlinePlus />}>
          Create ticket
        </Button> */}
      </header>
      {showTicket && (
        <TicketChat
          openTickets={openTickets}
          closedTickets={closedTickets}
          token={token}
        />
      )}
      {showLiveChat && <LiveChat />}
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
    redirect: 'follow',
  };

  const openTicketsResponse = await fetch(
    'https://alpha.ricnoslogistics.com/api/support/all_open_tickets',
    requestOptions
  );

  const closedTicketsResponse = await fetch(
    'https://alpha.ricnoslogistics.com/api/support/all_closed_tickets',
    requestOptions
  );

  const resultOpenTickets = await openTicketsResponse.json();
  const resultClosedTickets = await closedTicketsResponse.json();

  return {
    props: {
      openTickets: resultOpenTickets.data.supports,
      closedTickets: resultClosedTickets.data.supports,
      token,
    },
  };
}
