import React, { useState } from 'react'
import Container from "./Container";
import styled from 'styled-components'
import { FaBell, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import UserAvatar from './UserAvatar';
import Dropdown from './Dropdown';


export default function Navbar() {
  const [ notification, setNotification ] = useState(true)
  return (
    <Nav>
      <Container className="flex">
        <h1>Seacr Form</h1>
        <nav className="nav">
          <Link href="/">
            <a className="bell link"><FaBell className="icon" />
              {notification ? <div className="notification">5</div> : null}
            </a>
          </Link>
          <Link href="/">
            <a className="bell link"><FaEnvelope className="icon" />
              {notification ? <div className="notification">4</div> : null}
            </a>
          </Link>
          <div className="avatar">
            <div className="userInfo">
              <h4>John doe mark</h4>
              <p>UserEmail@gmail.com</p>
            </div>
            <UserAvatar userTitle="John deo" userName="John Deo" image="https://bit.ly/ryan-florence" size="md" />
            <Dropdown />
          </div>
        </nav>
      </Container>
    </Nav>
  )
}


const Nav = styled.nav`
  background: ${props => props.theme.colors.black};
  height: 10%;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.grey};
    margin-left: 1.5rem;
    transition: ${props => props.theme.transition};

    &:hover {
      color: #fff;
    }
  }

  .avatar {
    display: flex;
    align-items: center;

    .userInfo {
      color: #fff;
      margin: 0 15px;
      cursor: pointer;
      h4 {
        font-weight: 600;
      }
      p {
        font-size: 0.8rem;
        color: ${props => props.theme.colors.grey};
      }
    }
  }

  .nav {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 0.5rem;
  }

  .bell {
    position: relative;

    .notification {
      width: 13px;
      height: 13px;
      background: ${props => props.theme.colors.secondary};
      position: absolute;
      bottom: -2px;
      right: -2px;
      border-radius: 50%;
      font-size: 0.5rem;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;

    }
  }
`;