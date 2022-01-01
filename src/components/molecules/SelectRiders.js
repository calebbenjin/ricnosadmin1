import Card from "../atoms/Card";
import { Flex, Box, Text, Grid, Heading, Avatar, Button } from "@chakra-ui/react"
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { VscCalendar } from 'react-icons/vsc'
import Link from "next/link"
import Image from "next/image"

export default function UserCardInfo({img, title, username, orders, url, phone, address, handleClick }) {
  return (
    <Box mt="10">
      <Card>
        <Heading size="sm">Select Riders</Heading>
        <Grid gridTemplateColumns="repeat(2, 1fr)" gap="20">
          <Card>
            <Grid gridTemplateColumns="repeat(2, 1fr)" gap="5">
              <Image
                src='/user.png'
                width='50'
                height='100'
                alt='name'
              />
              <Box>
                <Heading size="sm" mb="2">John Doe</Heading>
                <Button colorScheme="red">Choose rider</Button>
              </Box>
            </Grid>
          </Card>
        </Grid>
      </Card>
    </Box>
  )
}
