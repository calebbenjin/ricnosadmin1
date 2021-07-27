import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import styled from 'styled-components'

export default function Dropdown() {
  return (
    <MenuContainer>
      <Menu>
        <MenuButton>
          <BsThreeDotsVertical className='dot' />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href='/'>
              <a className='menuLink'>
                <FiSettings className='icon' /> Settings
              </a>
            </Link>
          </MenuItem>
          <hr />
          <MenuItem>
            <Link href='/'>
              <a className='menuLink'>
                <FaUsers className='icon' /> Support
              </a>
            </Link>
          </MenuItem>
          <hr />
          <MenuItem>
            <Link href='/'>
              <a className='menuLink'>
                <FiLogOut className='icon' /> Logout
              </a>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  .dot {
    color: #fff;
    font-size: 2rem;
    font-weight: 900;
    margin-left: 5px;
  }

  .menuLink {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 1rem;
      color: #333;
    }
  }
`
