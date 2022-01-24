import React, { useState, useContext } from 'react';
import Container from './Container';
import styled from 'styled-components';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import UserAvatar from './UserAvatar';
import Dropdown from './Dropdown';
import AuthContext from '@/context/AuthContext';

export default function Navbar() {
  const [notification, setNotification] = useState(true);
  const { user } = useContext(AuthContext);

  return (
    <Nav>
      <Container>
        <div className="flex">
          <h3></h3>
          <nav className="nav">
            <Link href="/">
              <a className="bell link">
                <FaBell className="icon" />
                {notification ? <div className="notification">5</div> : null}
              </a>
            </Link>
            <Link href="/">
              <a className="bell link">
                <FaEnvelope className="icon" />
                {notification ? <div className="notification">4</div> : null}
              </a>
            </Link>
            <div className="avatar">
              <div className="userInfo">
                {/* <h4>{user.name}</h4>
                <p>{user.email}</p> */}
              </div>
              <UserAvatar
                userTitle={user.name}
                userName={user.name}
                image={user.passport}
                size="md"
              />
              <Dropdown />
            </div>
          </nav>
        </div>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  background: ${(props) => props.theme.colors.black};
  height: 10%;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.grey};
    margin-left: 1.5rem;
    transition: ${(props) => props.theme.transition};

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
        color: ${(props) => props.theme.colors.grey};
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
      background: ${(props) => props.theme.colors.secondary};
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
