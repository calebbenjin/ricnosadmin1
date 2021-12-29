import Card from "../atoms/Card";
import styled from 'styled-components'
import { Flex, Box, Text, Heading, Avatar, Button } from "@chakra-ui/react"
import { BsThreeDotsVertical } from 'react-icons/bs'
import { VscCalendar } from 'react-icons/vsc'
import Link from "next/link"

export default function ActiveLog() {
  return (
    <Box mt='4'>
      <Card>
        <Flex justify='space-between' mb='8' alignItems='center'>
          <Heading size='sm'>Active Log</Heading>
          <BsThreeDotsVertical />
        </Flex>

        <ActiveLogCard>
          <VscCalendar className='lineTab' />
          <Flex alignItems='center' justifyContent='space-between'>
            <Heading size='sm'>Planned Pickup</Heading>
            <Link href='/'>
              <a className='link'>Edit</a>
            </Link>
          </Flex>
          <Text mt='2'>
            No 9 lacfog plaza, Kilometer 16, East west road. Choba.
          </Text>
        </ActiveLogCard>
        <ActiveLogCard>
          <VscCalendar className='lineTab' />
          <Flex alignItems='center' justifyContent='space-between'>
            <Heading size='sm'>Office Pickup</Heading>
            <Link href='/'>
              <a className='link'>Edit</a>
            </Link>
          </Flex>
          <Text mt='2'>
            No 9 lacfog plaza, Kilometer 16, East west road. Choba.
          </Text>
        </ActiveLogCard>
        <ActiveLogCard>
          <VscCalendar className='lineTab' />
          <Flex alignItems='center' justifyContent='space-between'>
            <Heading size='sm'>Airport Pickup</Heading>
            <Link href='/'>
              <a className='link'>Edit</a>
            </Link>
          </Flex>
          <Text mt='2'>
            No 9 lacfog plaza, Kilometer 16, East west road. Choba.
          </Text>
        </ActiveLogCard>
        <EditButton>
          <Link href='/'>
            <a>Edit active log</a>
          </Link>
        </EditButton>
      </Card>
    </Box>
  )
}


const ActiveLogCard = styled.div`
  position: relative;
  border-left: solid 2px red;
  padding: 0 1rem 2rem 1rem;
  margin: 0;
  .lineTab {
    position: absolute;
    top: -0.6rem;
    left: -0.6rem;
    color: red;
  }
  .link {
    color: blue;
    font-weight: 600;
  }
`;

const EditButton = styled.div`
  text-align: center;
  margin-top: 1rem;
  a {
    border: solid 1px #cccc;
    color: #cccc;
    padding: 5px 30px;
    width: 100%;
    border-radius: 4px;
  }
`;
