import { useState } from 'react'
import Layout from '@/components/organisms/Layout'
import Container from '@/components/atoms/Container'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaTh } from 'react-icons/fa'
import { BiSearchAlt2, BiTrash } from 'react-icons/bi'
import { BsArrowLeftRight } from 'react-icons/bs'
import Header from '@/components/atoms/Heading'
import {
  Heading,
  Box,
  Flex,
  Button,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import Link from "next/link"


const data = [
  { id: 1, user: "General User", number: "3904"},
  { id: 1, user: "Agents User", number: "3904"},
  { id: 1, user: "Admin User", number: "3904"},
  { id: 1, user: "Adminstrator User", number: "3904"},
];

export default function ManageSite() {

  const handleSubmit = () => {
    console.log("Message Send...")
  }

  return (
    <Layout>
      <Container>
        <Heading size="lg" color="gray" my="5">Manage Site</Heading>
        <hr />

        <Flex alignItems='center' justifyContent='space-between' py='4'>
          <Stack>
            <Flex alignItems='center' justifyContent='space-between'>
              <Button
                _focus={{ color: 'red' }}
                color='gray'
                fontWeight='bold'
                size='lg'
                variant='ghost'
              >
                <Link href="/admin/manage/">Assign User</Link>
              </Button>
              <Button
                _focus={{ color: 'red' }}
                color='gray'
                fontWeight='bold'
                size='lg'
                variant='ghost'
              >
                <Link href="/admin/manage/upload">Upload Data</Link>
              </Button>
              <Button
                _focus={{ color: 'red' }}
                color='red'
                fontWeight='bold'
                size='lg'
                variant='ghost'
              >
                <Link href="/admin/manage/sendEmail">Email Message</Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        <hr />

        <Flex my="10" h="60vh">
          <Box width="30%" px="5"  style={{overflowX: "scroll", borderRight: "solid 1px #cccc"}}>
            <Heading size="sm" color="gray">Send email</Heading>
            <Heading size="md" my="5">Recipients</Heading>

            {data.map(users => (
              <Box key={users.id} bg="white" mb="4" _focus={{paddingLeft: "solid 10px red"}} borderRadius="lg" shadow="lg" p="4" style={{borderLeft: "solid 10px #cccc", cursor: "pointer"}}>
                <Heading size="sm">{users.user}</Heading>
                <Text color="gray">{users.number} user</Text>
              </Box>
            ))}
          </Box>
          <Box width="70%" px="5">
            <Heading size="md" mb="5">Content</Heading>
            <Box bg="white" borderRadius="lg" p="8">
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Recipients</FormLabel>
                  <Input
                    type='text'
                    id='recipients'
                    name='recipients'
                    value=''
                    placeholder='Enter Recipients'
                  />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel>Subject</FormLabel>
                  <Input
                    type='text'
                    id='subject'
                    name='subject'
                    value=''
                    placeholder='Enter Subject'
                  />
                </FormControl>
                <FormControl mt="4">
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Type Message..." row="20" column="30"></Textarea>
                </FormControl>
                <Button colorScheme="red" mt="6" size="md" px="10">Send</Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
