import { useState } from 'react'
// import Heading from "@/components/atoms/Heading";
import Layout from "@/components/organisms/Layout2";
import styles from '@/styles/Chats.module.css'
import { BsThreeDots } from 'react-icons/bs'
import { MdAttachFile } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'
import Image from 'next/image'
import { Flex, Box } from '@chakra-ui/react'
import userImg from '@/assets/user4.jpg'

const usersData = [
  {
    id: 1,
    img: userImg,
    name: 'John Snow',
    time: '3mins',
  },
  {
    id: 2,
    img: userImg,
    name: 'John Snow',
    time: '3mins',
  },
  {
    id: 3,
    img: userImg,
    name: 'John Snow',
    time: '3mins',
  },
  {
    id: 4,
    img: userImg,
    name: 'Mike Grey',
    time: '3mins',
  },
  {
    id: 5,
    img: userImg,
    name: 'Honnesy Roese',
    time: '3mins',
  },
]

export default function MessagePage() {
  const [users, setUsers] = useState(usersData)

  return (
    <Layout>
      <div className={styles.flexContainer}>
          <div className={styles.chatBoard}>
            <Box p='5' borderRadius='md'>
              <div className={styles.chatFlexContainer}>
                <div className={styles.activeUsers}>
                  <input
                    type='text'
                    className={styles.search}
                    placeholder='Search'
                  />
                  <div className={styles.header}>
                    <p>My Chat</p>
                    <BsThreeDots />
                  </div>

                  <ul className={styles.userList}>
                    {users.map((user) => (
                      <li key={user.id}>
                        <Flex alignItems='center'>
                          <h2>
                            <Image
                              src={user.img}
                              alt={user.name}
                              width='100'
                              height='100'
                            />
                            <span className={styles.notification}></span>
                          </h2>
                          <h4 className={styles.userName}>{user.name}</h4>
                        </Flex>
                        <p>{user.time}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.chatBody}>
                  <div className={styles.heading}>
                    <h4>Mr Jude Odege</h4>
                    <Flex justify='center' alignItems='center'>
                      <p className={styles.not}></p>
                      <h4>Active Now</h4>
                    </Flex>
                  </div>

                  <div className={styles.chats}>
                    <ul>
                      <li className={styles.chatContainer}>
                        <Image
                          src={userImg}
                          alt='User'
                          width='100'
                          height='100'
                        />
                        <div className={styles.agent}>
                          <p>
                            lorem thome roll point point show show lorem thome
                            roll point point show show
                          </p>
                          <small>30 Mins ago</small>
                        </div>
                      </li>

                      <li className={styles.replyChat}>
                        <div className={styles.reply}>
                          <p>
                            lorem thome roll point point show show lorem thome
                            roll point point show show
                          </p>
                          <small>8 Mins ago</small>
                        </div>
                        <Image
                          src={userImg}
                          alt='User'
                          width='100'
                          height='100'
                          placeholder='blur'
                        />
                      </li>

                      <li className={styles.chatContainer}>
                        <Image
                          src={userImg}
                          alt='User'
                          width='100'
                          height='100'
                          placeholder='blur'
                        />
                        <div className={styles.agent}>
                          <p>
                            lorem thome roll point point show show lorem thome
                            roll point point show show
                          </p>
                          <small>3 Mins ago</small>
                        </div>
                      </li>

                      <li className={styles.replyChat}>
                        <div className={styles.reply}>
                          <p>
                            lorem thome roll point point show show lorem thome
                            roll point point show show
                          </p>
                          <small>8 Mins ago</small>
                        </div>
                        <Image
                          src={userImg}
                          alt='User'
                          width='100'
                          height='100'
                          placeholder='blur'
                        />
                      </li>
                    </ul>

                    <form>
                      <div className={styles.messageInput}>
                        <div className={styles.input}>
                          <Image
                            src={userImg}
                            alt='User'
                            width='100'
                            height='100'
                            placeholder='blur'
                          />
                          {/* <input type="text" /> */}
                          <textarea placeholder='Type a message here...'></textarea>
                        </div>
                        <MdAttachFile className={styles.file} />
                        <button>
                          <RiSendPlaneFill className={styles.button} />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
    </Layout>
  )
}
