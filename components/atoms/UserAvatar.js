import { Box, Heading, Container, Flex, Avatar, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import styled from 'styled-components'


export default function UserAvatar({image, userName, userTitle, userEmail, size}) {
  return (
    <AvatarContainer>
      <Avatar name={userTitle} className="avatar" src={image} size={size} />
    </AvatarContainer>
  )
}


const AvatarContainer = styled.div`
  .avatar {
    border-radius: 50% !important;
    border: solid 2px red !important;
  }
`;