import Link from './Link'
import styled from 'styled-components'
import Container from './Container'
import Logo from './Logo'
import { FaChartPie, FaListUl, FaUsers, FaUserTie } from 'react-icons/fa'
import { SiGooglemessages } from 'react-icons/si'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { BsBarChartFill } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { RiWifiOffLine } from 'react-icons/ri'

export default function Sidebar() {
  return (
    <SideView>
      <Container>
        <div className='logo-container'>
          <Logo />
        </div>
      </Container>
      <SideNav>
        <Link href='/staff/'>
          <a className='navLink'>
            <FaChartPie className='icon' /> Dashboard
          </a>
        </Link>
        <Link href='/staff/orders'>
          <a className='navLink'>
            <FaListUl className='icon' /> Orders
          </a>
        </Link>
        <Link href='/staff/message'>
          <a className='navLink'>
            <SiGooglemessages className='icon' /> Messages
          </a>
        </Link>
        <Link href='/staff/support'>
          <a className='navLink'>
            <BiSupport className='icon' /> Support
          </a>
        </Link>
        <Link href='/staff/finance'>
          <a className='navLink'>
            <BsBarChartFill className='icon' /> Finance
          </a>
        </Link>
        <Link href='/staff/quote'>
          <a className='navLink'>
            <FaUserTie className='icon' /> Quote Request
          </a>
        </Link>
        <hr />
        <Link href='/staff/offline/'>
          <a className='navLink'>
            <RiWifiOffLine className='icon' /> Offline Order
          </a>
        </Link>
        <Link href='/staff/users'>
          <a className='navLink'>
            <FaUsers className='icon' /> Users
          </a>
        </Link>
        <Link href='/settings'>
          <a className='navLink'>
            <FiSettings className='icon' /> Settings
          </a>
        </Link>
      </SideNav>
    </SideView>
  )
}

const SideView = styled.main`
  height: 100vh;
  overflow: hidden;
  background: ${(props) => props.theme.colors.primary};
  width: 15%;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
  }
`

const SideNav = styled.nav`
  .navLink {
    color: ${(props) => props.theme.colors.grey};
    display: flex;
    align-items: center;
    line-height: 3.1;
    transition: ${props => props.theme.transition};
    padding: 0 1rem;

    &:hover {
      background: ${(props) => props.theme.colors.grey};
      color: ${props => props.theme.colors.primary};
      padding-left: 1.5rem;
      .icon {
        color: ${(props) => props.theme.colors.primary};
      }
    }

    .icon {
      color: ${(props) => props.theme.colors.grey};
      margin-right: 1rem;
      font-size: ${(props) => props.theme.fontSize.medium};
    }
  }
`
