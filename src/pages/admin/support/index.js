import { useState } from 'react'
import Button from 'src/components/atoms/Button'
import Layout from 'src/components/organisms/Layout'
import styles from '@/styles/support/Support.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import TicketChat from 'src/components/organisms/TicketChat'
import LiveChat from 'src/components/organisms/LiveChat'

export default function SupportPage() {
  const [attachedFile, setAttachedFile] = useState()
  const [showTicket, setShowTicket] = useState(true)
  const [showLiveChat, setShowLiveChat] = useState(false)

  const handleTicket = () => {
    setShowLiveChat(false)
    setShowTicket(true)
  }

  const handleLiveChat = () => {
      setShowTicket(false)
      setShowLiveChat(true)
  
  }

  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.leftSide}>
          <button classNAn onClick={handleTicket}>Tickets</button>
          <button onClick={handleLiveChat}>Live Chats</button>
        </div>
        <Button icon={<AiOutlinePlus />} text='Create Ticket' />
      </header>
      {showTicket && <TicketChat />}
      {showLiveChat && <LiveChat />}
    </Layout>
  )
}
