import { API_URL } from "@/lib/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@chakra-ui/react";
import Layout from "@/components/organisms/Layout";
import styles from "@/styles/support/Support.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import TicketChat from "@/components/organisms/TicketChat";
import { parseCookies } from "@/helpers/index";

export default function SupportPage({
  openTickets,
  closedTickets,
  token,
  user,
}) {
  const handleTicket = () => {
    setShowLiveChat(false);
    setShowTicket(true);
  };

  const handleLiveChat = () => {
    setShowTicket(false);
    setShowLiveChat(true);
  };

  // console.log(user)

  return (
    <Layout data={user}>
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
        </div>
        {/* <Button colorScheme="red" leftIcon={<AiOutlinePlus />}>
          Create ticket
        </Button> */}
      </header>
      <TicketChat
        openTickets={openTickets}
        closedTickets={closedTickets}
        token={token}
      />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const openTicketsResponse = await fetch(
    "https://alpha.ricnoslogistics.com/api/support/all_open_tickets",
    requestOptions
  );

  const closedTicketsResponse = await fetch(
    "https://alpha.ricnoslogistics.com/api/support/all_closed_tickets",
    requestOptions
  );

  const resultOpenTickets = await openTicketsResponse.json();
  const resultClosedTickets = await closedTicketsResponse.json();

  const res = await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return {
    props: {
      openTickets: resultOpenTickets.data.supports,
      closedTickets: resultClosedTickets.data.supports,
      token,
      user: data.data.user,
    },
  };
}
