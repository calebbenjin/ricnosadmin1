import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { AiOutlineFileZip } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import userImg from "@/assets/user4.jpg";
import { MdAttachFile } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import styles from "@/styles/support/Support.module.css";

export default function TicketChatPage({ openTickets, closedTickets, token }) {
  const [ticketsData, setTicketsData] = useState(openTickets);
  const [ticketStatus, setTicketStatus] = useState("open");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [messageBody, setMessageBody] = useState();

  const router = useRouter();

  useEffect(() => {
    if (ticketStatus === "open") {
      setTicketsData(openTickets);
    } else if (ticketStatus === "closed") {
      setTicketsData(closedTickets);
    }
  }, [ticketStatus]);

  const handleTicketResponse = async (e, ticketNo) => {
    e.preventDefault();
    setSendingMessage(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("body", messageBody);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    const request = await fetch(
      `https://alpha.ricnoslogistics.com/api/support/reply/${ticketNo}`,
      requestOptions
    );

    const response = await request.json();

    if (response.success) {
      setMessageBody("");
      toast.success(response.message);
      // router.reload(window.location.pathname);
    } else {
      toast.error(response.message);
    }

    setSendingMessage(false);
  };

  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <header>
          <h4>TICKET TITLE</h4>
          <div>
            <h4>CREATED</h4>
            <FaRegUser />
          </div>
        </header>
        <ul className={styles.userList}>
          {ticketsData.map((ticket) => (
            <li key={ticket.id} onClick={() => setSelectedTicket(ticket)}>
              <h4 className={styles.userName}>{ticket.subject}</h4>
              <p>{ticket.date}</p>
              <h2>
                <Image
                  src={
                    ticket.passport_thumbnail
                      ? ticket.passport_thumbnail
                      : userImg
                  }
                  alt="user-image"
                  width="100"
                  height="100"
                />
                <span className={styles.notification}></span>
              </h2>
            </li>
          ))}
        </ul>
      </aside>
      <article className={styles.article}>
        {selectedTicket ? (
          <>
            <h4 className="title">Category</h4>
            <p>{selectedTicket.subject}</p>

            {/* <h4 className="title">Item collected for this ticket</h4> */}

            <h4 className="title">Message</h4>
            <div className={styles.messageBox}>
              <p>{selectedTicket.message}</p>
            </div>
            <div className={styles.chatBox}>
              {selectedTicket.discussions.length > 0 ? (
                <ul>
                  {selectedTicket.discussions.map((discuss) => (
                    <div key={discuss.id}>
                      {discuss.from === "0" ? (
                        <li className={styles.chatContainer}>
                          <Image
                            src={discuss.photo ? discuss.photo : userImg}
                            alt="User"
                            width="100"
                            height="100"
                          />
                          <div className={styles.agent}>
                            <p>{discuss.message}</p>
                            <small>{discuss.time}</small>
                          </div>
                        </li>
                      ) : (
                        <li className={styles.replyChat}>
                          <div className={styles.reply}>
                            <p>{discuss.message}</p>
                            <small>{discuss.time}</small>
                          </div>
                          <Image
                            src={discuss.photo ? discuss.photo : userImg}
                            alt="User"
                            width="100"
                            height="100"
                          />
                        </li>
                      )}
                    </div>
                  ))}
                </ul>
              ) : (
                <p>No discussions in this ticket</p>
              )}
            </div>
            <div className={styles.messageChat}>
              <form
                onSubmit={(e) =>
                  handleTicketResponse(e, selectedTicket.ticket_no)
                }
              >
                <textarea
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  name=""
                  id=""
                  className={styles.textarea}
                  placeholder="Type a message here..."
                ></textarea>
                <div className={styles.footer}>
                  <h4></h4>
                  <div className={styles.container}>
                    <div className="fileInput">
                      <input type="file" className="custom-file-input" />
                      {/* <MdAttachFile className="file" /> */}
                    </div>
                    <button>
                      <RiSendPlaneFill className={styles.send} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* <h4 className="title">Attached file</h4> */}
            {/* <div className={styles.attachedFile}>
              <Link href="/">
                <a>
                  <AiOutlineFileZip className={styles.icon} />
                  <p>View</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <AiOutlineFileZip className={styles.icon} />
                  <p>View</p>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <AiOutlineFileZip className={styles.icon} />
                  <p>View</p>
                </a>
              </Link>
            </div> */}

            {/* <h4 className="title">Comment</h4>
            <div className={styles.comment}>
              <form>
                <textarea
                  value=""
                  name=""
                  id=""
                  className={styles.textarea}
                  placeholder="Add comment..."
                ></textarea>
              </form>
            </div> */}
          </>
        ) : (
          <p>Select a Ticket to View its content</p>
        )}
      </article>
      <aside className={styles.asideNav}>
        <h4>TICKETS STATUS</h4>
        <select
          value={ticketStatus}
          onChange={(e) => setTicketStatus(e.target.value)}
          id=""
          className={styles.select}
        >
          <option value="open">Open Tickets</option>
          <option value="closed">Closed Tickets</option>
          {/* <option value="">On Hold</option>
          <option value="">Closed</option>
          <option value="">Done</option> */}
        </select>

        <h4>DUE DATE</h4>
        <input type="date" name="" id="" />
      </aside>
    </main>
  );
}
