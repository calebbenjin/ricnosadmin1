import Container from '@/components/atoms/Container'
import Card from '@/components/atoms/Card'
import { Button, Heading, Text, Flex, Box, Grid, Avatar, Select } from '@chakra-ui/react'
import Layout from '@/components/organisms/Layout'
import { FaShareAlt, FaLongArrowAltRight, FaUser } from 'react-icons/fa'
import { AiOutlinePrinter } from 'react-icons/ai'
import { VscCalendar } from 'react-icons/vsc'
import Header from '@/components/atoms/Heading'
import Image from 'next/image'
import Logo from '@/components/atoms/Logo'
import Link from "next/link"


const data = [
  {id: 1, date: "23/june/2022", for: "Withdraw Complete successfully", amount: "23.000"},
  {id: 1, date: "23/june/2022", for: "Withdraw Complete successfully", amount: "23.000"},
  {id: 1, date: "23/june/2022", for: "Withdraw Complete successfully", amount: "23.000"},
  {id: 1, date: "23/june/2022", for: "Withdraw Complete successfully", amount: "23.000"},
]

export default function OfflineOrderPage() {

  
  return (
    <Layout>
      <Container>
        <Flex>
          <Box width={['100%', '65%']} p='1rem'>
            <Header title="Users" icon={<FaUser />} />
            <Card>

              <Box textAlign='center' my="5">
                <Avatar size='2xl' style={{border: "solid 2px red"}} src="/user.png"></Avatar>
              </Box>

              <Heading size='md' mt="10">Profile Data</Heading>
              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">Full Name</Heading>
                  <Text>John Doe</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Email</Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box>
                <Box>
                  <Heading size="sm" color="red">Phone Number</Heading>
                  <Text>+2374889387830</Text>
                </Box>
              </Flex>

              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">Alternative Phone Number</Heading>
                  <Text>John Doe</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Date of Birth</Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box>
                <Box>
                  <Heading size="sm" color="red">State of Origin</Heading>
                  <Text>+2374889387830</Text>
                </Box>
              </Flex>

              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">Local Gov Area</Heading>
                  <Text>John Doe</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Nationality</Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box>
              </Flex>

              <Heading size='md' mt="10">Education Data</Heading>
              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">Instution Attended</Heading>
                  <Text>John Doe</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Qualification</Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box>
              </Flex>
              <Heading size='md' mt="10">Residential Details</Heading>
              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">Present Address</Heading>
                  <Text>John Doe</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Permanet Address</Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Zip Code</Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box>
              </Flex>
              <Flex alignItems="center" justifyContent="space-between" mt="4" mb="10">
                <Box width="33%">
                  <Heading size="sm" color="red">State</Heading>
                  <Text>John Doe</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Local Gov Area </Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Region</Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box>
              </Flex>
            </Card>
            <Box mt="10">
              <Card>
                <Heading color="gray" size="md">Finance History</Heading>
                <Flex alignItems="center" my="5">
                  <Text color="grey" mr="4">Sort:</Text>
                  <Grid gridTemplateColumns="repeat(3, 1fr)" gap="5">
                    <Select placeholder="EVERYTHING">
                      <option value="1">WITHDRAWN</option>
                      <option value="2">CANCELLED REVENUE</option>
                      <option value="3">PENDING CLEARANCE</option>
                    </Select>
                    <Select placeholder="YEAR">
                      <option value="1">WITHDRAWN</option>
                      <option value="2">CANCELLED REVENUE</option>
                      <option value="3">PENDING CLEARANCE</option>
                    </Select>
                    <Select placeholder="MONTH">
                      <option value="1">WITHDRAWN</option>
                      <option value="2">CANCELLED REVENUE</option>
                      <option value="3">PENDING CLEARANCE</option>
                    </Select>
                  </Grid>
                </Flex>
                <Box>
                  <table cellPadding={0} cellSpacing={0}>
                    <thead>
                      <tr>
                        <th data-label="Date" scope="col"></th>
                        <th data-label="Date" scope="col">
                          Date
                        </th>
                        <th data-label="Date" scope="col">
                          For
                        </th>
                        <th data-label="Track No" scope="col">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={item.id}>
                          <td></td>
                          <td>{item.date}</td>
                          <td>{item.for}</td>
                          <td style={{color: "green"}}>NGN{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </Card>
            </Box>
          </Box>
          <Box width={['100%', '35%']} p='1rem'>
            <Card style={{ textAlign: 'center' }}>
              <Link href="/message">
                <Button
                  colorScheme='red'
                  width='100%'
                  py='6'
                  mb="4"
                  leftIcon={<FaShareAlt />}
                >
                  Send Message
                </Button>
              </Link>

              <hr />
              <Flex justify='space-between' alignItems='center'>
                <Box my='4'>
                  <Flex alignItems='center'>
                    <VscCalendar style={{fontSize: "1.5rem", color: 'red'}} />
                    <Text ml="2">4 Orders</Text>
                  </Flex>
                </Box>
                <Link href='/orders' passHref>
                  <a><FaLongArrowAltRight className="icon" /></a>
                </Link>
              </Flex>
              <hr />

              <Grid gridTemplateColumns='repeat(2, 1fr)' gap='10' my='5'>
                <Link href="/settings">
                  <Button colorScheme='green' py='6'>
                    Edit
                  </Button>
                </Link>
                <Link href="/support">
                  <Button colorScheme='green' py='6'>
                    Send Mail
                  </Button>
                </Link>
              </Grid>

              <Link href="/settings/">
                <Button
                  colorScheme='red'
                  width='100%'
                  leftIcon={<AiOutlinePrinter />}
                  py='6'
                >
                  Reset Password
                </Button>
              </Link>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
