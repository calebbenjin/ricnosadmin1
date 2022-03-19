import React, { useState, useContext } from "react";
import Container from "./Container";
import styled from "styled-components";
import { FaBell, FaEnvelope } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import Link from "next/link";
import UserAvatar from "./UserAvatar";
import Dropdown from "./Dropdown";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import NotificationModal from "./NotificationModal";

export default function Navbar({ data }) {
  return (
    <Nav>
      <div className="search">
        <InputGroup mr="4" w="100%">
          <InputLeftElement pointerEvents="none">
            <BiSearchAlt style={{ fontSize: "1.2rem", color: "gray" }} />
          </InputLeftElement>
          <Input
            type="text"
            _focus={{ paddingLeft: "2.2rem" }}
            placeholder="Search"
          />
        </InputGroup>
      </div>
      <div className="flex">
        <NotificationModal />
        <div className="avatar">
          <div className="userInfo">
            <h4>{data?.name}</h4>
            <p>{data?.email}</p>
          </div>
          <UserAvatar image={data?.passport} size="md" />
          <Dropdown />
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  background: ${(props) => props.theme.colors.black};
  height: 13%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;

  .search {
    width: 50%;
  }

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
