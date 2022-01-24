import Container from '@/components/atoms/Container'
import Layout from '@/components/organisms/Layout'
import styled from 'styled-components'
import Card from '@/components/atoms/Card'
import UserCardInfo from '@/components/molecules/UserCardInfo'
import SelectRider from '@/components/molecules/SelectRiders'
import { Button, Flex, Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Logo from '@/components/atoms/Logo'
import logo from '@/assets/logo1.svg'
import Image from 'next/image'

export default function OrdersPage() {


  const handleClick = () => {
    alert("Hello Coder")
  }

  return (
    <Layout>
      <Container>
        <Header title="Offline Checkout" />

        <OrderStatus>
          <div className='header'>
            <div className='status'>
              <h2>Status</h2>
              <p>Pending</p>
            </div>
            <Button colorScheme='red'>Print Invoice</Button>
          </div>
          <div className='pickupContainer'>
            <div className='box'>
              <div className='card'>
                <h6 className='card-title'>
                  Planned Pickup
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
              </div>
              <div className='card'>
                <h6 className='card-title'>
                  Office Pickup
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='card'>
                <h6 className='card-title'>
                  Airport Delivery
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
              </div>
              <div className='card'>
                <h6 className='card-title'>
                  Airport Up
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='card'>
                <h6 className='card-title'>
                  Planned Delivery
                  <Link href='/'>
                    <a className='edit'> Edit</a>
                  </Link>
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestiae, aperiam?
                </p>
                <Button colorScheme='green'>Deliver</Button>
              </div>
            </div>
          </div>
        </OrderStatus>
        <SectionLayout>
          <Flex>
            <Box width='70%' pr='4'>
              <Card>
                <Heading size='md'>Sender Details</Heading>
                <Flex alignItems="center" justifyContent="space-between" mt="4">
                  <Box width="33%">
                    <Heading size="sm" color="red">Name</Heading>
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
              </Card>
              <Box my="8">
                <Card>
                  <Heading size='md'>Shipment Data</Heading>
                  <Flex alignItems="center" justifyContent="space-between" mt="4">
                    <Box width="33%">
                      <Heading size="sm" color="red">Recievers Name</Heading>
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
                      <Heading size="sm" color="red">Description</Heading>
                      <Text>John Doe</Text>
                    </Box>
                    <Box width="33%">
                      <Heading size="sm" color="red">Departure</Heading>
                      <Text>Johndoe@gmail.com</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">Arrival</Heading>
                      <Text>+2374889387830</Text>
                    </Box>
                  </Flex>

                  <Flex alignItems="center" justifyContent="space-between" mt="4">
                    <Box width="33%">
                      <Heading size="sm" color="red">Address</Heading>
                      <Text>John Doe</Text>
                    </Box>
                    <Box width="33%">
                      <Heading size="sm" color="red">City</Heading>
                      <Text>Johndoe@gmail.com</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">State</Heading>
                      <Text>+2374889387830</Text>
                    </Box>
                  </Flex>

                  <Flex alignItems="center" justifyContent="space-between" mt="4">
                    <Box width="33%">
                      <Heading size="sm" color="red">Delivery Method</Heading>
                      <Text>John Doe</Text>
                    </Box>
                    <Box width="33%">
                      <Heading size="sm" color="red">Region</Heading>
                      <Text>Johndoe@gmail.com</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">Selected Ride</Heading>
                      <Text>+2374889387830</Text>
                    </Box>
                  </Flex>

                  <Text mt="8" color="gray" >Item(item 1)</Text>
                  <Flex alignItems="center" justifyContent="space-between" mt="2">
                    <Box width="33%">
                      <Heading size="sm" color="red">Item Name</Heading>
                      <Text>John Doe</Text>
                    </Box>
                    <Box width="33%">
                      <Heading size="sm" color="red">Quantity</Heading>
                      <Text>Johndoe@gmail.com</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">Weight</Heading>
                      <Text>+2374889387830</Text>
                    </Box>
                  </Flex>

                  <Flex alignItems="center" justifyContent="space-between" mt="4">
                    <Box>
                      <Heading size="sm" color="red">Item value</Heading>
                      <Text>NGN 34, 000</Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Box my="8">
                <Card>
                  <Heading size="md">Order Summary</Heading>
                  <Flex alignItems="center" justifyContent="space-between" my="6">
                    <Text fontWeight="500">Subtotal<sup>(all items)</sup></Text>
                    <Text>NGN 30000</Text>
                  </Flex>
                  <hr />
                  <Flex alignItems="center" justifyContent="space-between" my="4">
                    <Text fontWeight="500">Tax<sup>PDV20%(included)</sup></Text>
                    <Text>NGN 300.00</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="space-between" my="6">
                    <Text fontWeight="500">Shipping Discount</Text>
                    <Text>NGN 00.00</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="space-between" my="8">
                    <Heading size="sm">Total</Heading>
                    <Heading size="sm">NGN 20.000</Heading>
                  </Flex>
                </Card>
              </Box>
            </Box>
            <Box width='30%' pl='4'>
              <UserCardInfo
                title='Pickup Angent'
                img='https://bit.ly/sage-adebayo'
                username='Segun Adebayo'
                orders='5'
                url="/"
                phone="+234(803) 00 0000"
                address="No 9 lacfog plaza, Kilometer 16, East west road. Choba."
                handleClick={handleClick}
              />
              <Card>
                <Flex alignItems='center' mt='4'>
                  <Box p='4' borderRadius='md' mr='10' boxShadow='md'>
                    <Logo src={logo} />
                  </Box>
                  <Box>
                    <Text fontSize='lg'>Ricno Logistics</Text>
                    <Text>Premium</Text>
                  </Box>
                </Flex>
              </Card>
              <Box my="4">
                <UserCardInfo
                  title='Delivery Agent'
                  img='https://bit.ly/sage-adebayo'
                  username='Segun Adebayo'
                  orders='5'
                />
              </Box>
            </Box>
          </Flex>
          <SelectRider />
          <Box mt="20" width="70%">
            <Card>
              <Heading size="md" mb="4">Document</Heading>
              <hr />

              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="48%">
                  <Card>
                    <Image src={logo} alt="item" width="200" height="200" />
                  </Card>
                </Box>
                <Box width="48%">
                  <Card>
                    <Image src={logo} alt="item" width="200" height="200" />
                  </Card>
                </Box>
              </Flex>
            </Card>
          </Box>
        </SectionLayout>
      </Container>
    </Layout>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  .orderId {
    font-weight: 800;
    font-size: 2rem !important;
  }
  .date {
    font-size: 1.2rem !important;
    color: #333333;
  }
`

const SectionLayout = styled.div`
  margin: 3rem 0;
  .card-title {
    font-weight: 700;
    font-size: 2rem;
  }
`
const OrderStatus = styled.div`
  box-shadow: ${(props) => props.theme.shadows.shadow2};
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radius};
  padding: 30px;
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #cccc;
    padding-bottom: 20px;

    .status {
      display: flex;
      align-items: center;

      h2 {
        font-size: 1.5rem !important;
        margin-right: 5px;
      }

      p {
        padding: 2px 8px;
        border-radius: 55px;
        background: #ffa928;
        margin-right: 20px;
      }
    }
  }

  .pickupContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    width: 90%;
    margin: 1rem auto;

    .box {
      width: 85%;
    }

    .card {
      margin-top: 1rem;
      p {
        margin: 0.5rem 0;
        color: #424242;
      }
    }
    .card-title {
      font-weight: 700;
    }
    .edit {
      color: #2068d5;
      font-weight: 600;
    }
  }
`
