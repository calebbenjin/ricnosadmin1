import { Flex, Box, Text, Grid, Heading, Avatar, Button } from "@chakra-ui/react"
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { VscCalendar } from 'react-icons/vsc'
import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"

const data = [
  {
    id: 1,
    name: "John Deo",
    status: "Available",
  },
  {
    id: 2,
    name: "John Deo",
    status: "UnAvailable",
  },
  {
    id: 3,
    name: "John Deo",
    status: "Available",
  },
  {
    id: 4,
    name: "Mark Rose",
    status: "UnAvailable",
  },
  {
    id: 5,
    name: "John Deo",
    status: "Available",
  },
  {
    id: 6,
    name: "Mark Rose",
    status: "UnAvailable",
  },
]

export default function UserCardInfo() {
  return (
    <Box mt="10">
      <CardSection>
        <Heading size="md" mb="6">Select Riders</Heading>
        <Grid gridTemplateColumns="repeat(2, 1fr)" gap="5">
          {data.map(rider => (
            <Card key={rider.id}>
              <Flex alignItems="center">
                <Box width="40%" mr="10">
                  <Image
                    src='/user.png'
                    width='180'
                    height='140'
                    alt='name'
                  />
                </Box>
                <Box width="50%">
                  <Flex alignItems="center" justifyContent="space-between">
                    <Text fontSize="2xl" mb="2">{rider.name}</Text>
                    <Heading size="xs" mb="2" color="grey">
                      <Flex alignItems="center">
                        Online 
                        <Box width="5px" height="5px" ml="1" borderRadius="50%" bg="green"></Box>
                      </Flex>
                    </Heading>
                  </Flex>
                  <Flex alignItems="center">
                    <Heading fontSize="sm" mb="2" color="grey" mr="2">Status:</Heading>
                    <Text fontSize="sm" mb="2" color="black">{rider.status}</Text>
                  </Flex>
                  <Flex justifyContent="end">
                    <Button colorScheme="red" size="lg" mt="4">Book Rider</Button>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          ))}
        </Grid>
      </CardSection>
    </Box>
  )
}


const Card = styled.div`
  box-shadow: ${props => props.theme.shadows.shadow2};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius};
  width: 100%;
  padding: 1rem;
  position: relative;
`;

const CardSection = styled.div`
  box-shadow: ${props => props.theme.shadows.shadow2};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius};
  width: 100%;
  padding: 1.5rem;
  position: relative;
  height: 500px;
  overflow-y: scroll;
`;
