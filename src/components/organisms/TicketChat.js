import { AiOutlineFileZip } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import userImg from '@/assets/user4.jpg'
import { MdAttachFile } from 'react-icons/md'
import { RiSendPlaneFill } from 'react-icons/ri'
import styles from '@/styles/support/Support.module.css'

export default function TicketChatPage({ }) {
  const handleSubmit = () => {}
  
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
            <li>
              <h4 className={styles.userName}>How do I track my Items</h4>
              <p>3mins</p>
              <h2>
                <Image
                  src={userImg}
                  alt='user-image'
                  width='100'
                  height='100'
                />
                <span className={styles.notification}></span>
              </h2>
            </li>
            <li>
              <h4 className={styles.userName}>How do I track my Items</h4>
              <p>3mins</p>
              <h2>
                <Image
                  src={userImg}
                  alt='user-image'
                  width='100'
                  height='100'
                />
                <span className={styles.notification}></span>
              </h2>
            </li>
            <li>
              <h4 className={styles.userName}>How do I track my Items</h4>
              <p>3mins</p>
              <h2>
                <Image
                  src={userImg}
                  alt='user-image'
                  width='100'
                  height='100'
                />
                <span className={styles.notification}></span>
              </h2>
            </li>
          </ul>
        </aside>
        <article className={styles.article}>
          <h4 className='title'>Category</h4>
          <p>How do i track my sent product</p>

          <h4 className='title'>Item collected for this ticket</h4>

          <h4 className='title'>Message</h4>
          <div className={styles.messageBox}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus culpa, laborum voluptatum quisquam quidem aut maxime
              dolor eius nam maiores.
            </p>
          </div>
          <div className={styles.chatBox}>
            <ul>
              <li className={styles.chatContainer}>
                <Image src={userImg} alt='User' width='100' height='100' />
                <div className={styles.agent}>
                  <p>
                    lorem thome roll point point show show lorem thome roll
                    point point show show
                  </p>
                  <small>30 Mins ago</small>
                </div>
              </li>

              <li className={styles.replyChat}>
                <div className={styles.reply}>
                  <p>
                    lorem thome roll point point show show lorem thome roll
                    point point show show
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
                    lorem thome roll point point show show lorem thome roll
                    point point show show
                  </p>
                  <small>3 Mins ago</small>
                </div>
              </li>

              <li className={styles.replyChat}>
                <div className={styles.reply}>
                  <p>
                    lorem thome roll point point show show lorem thome roll
                    point point show show
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
          </div>
          <div className={styles.messageChat}>
            <form onSubmit={handleSubmit}>
              <textarea
                value=''
                name=''
                id=''
                className={styles.textarea}
                placeholder='Type a message here...'
              ></textarea>
              <div className={styles.footer}>
                <h4></h4>
                <div className={styles.container}>
                  <div className='fileInput'>
                    <input type='file' className='custom-file-input' />
                    <MdAttachFile className='file' />
                  </div>
                  <button>
                    <RiSendPlaneFill className={styles.send} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <h4 className='title'>Attached file</h4>
          <div className={styles.attachedFile}>
            <Link href='/'>
              <a>
                <AiOutlineFileZip className={styles.icon} />
                <p>View</p>
              </a>
            </Link>
            <Link href='/'>
              <a>
                <AiOutlineFileZip className={styles.icon} />
                <p>View</p>
              </a>
            </Link>
            <Link href='/'>
              <a>
                <AiOutlineFileZip className={styles.icon} />
                <p>View</p>
              </a>
            </Link>
          </div>

          <h4 className='title'>Comment</h4>
          <div className={styles.comment}>
            <form>
            <textarea
                value=''
                name=''
                id=''
                className={styles.textarea}
                placeholder='Add comment...'
              ></textarea>
            </form>
          </div>
        </article>
        <aside className={styles.asideNav}>
          <h4>TICKETS STATUS</h4>
          <select name="" id="" className={styles.select}>
            <option value="">To Do</option>
            <option value="">In Progress</option>
            <option value="">On Hold</option>
            <option value="">Closed</option>
            <option value="">Done</option>
          </select>

          <h4>DUE DATE</h4>
          <input type="date" name="" id="" />
        </aside>
      </main>
  )
}