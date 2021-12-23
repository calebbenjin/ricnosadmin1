import Container from '@/components/atoms/Container'
import Card from '@/components/atoms/Card'
import { Button, Heading, Text } from '@chakra-ui/react'
import Layout from '@/components/organisms/Layout'
import { Flex, Box, Grid } from '@chakra-ui/react'
import { FaShareAlt } from 'react-icons/fa'
import { AiOutlinePrinter } from 'react-icons/ai'
import Image from 'next/image'
import Logo from '@/components/atoms/Logo'

export default function OfflineOrderPage() {

  
  return (
    <Layout>
      <Container>
        <Flex>
          <Box width={['100%', '65%']} p='1rem'>
            <Card>
              <Flex justify='space-between' alignItems='center' mb='4'>
                <Logo />
                <Text fontWeight='400' fontSize='2xl'>
                  INVOICE
                </Text>
                <Text fontWeight='bold'>#1200940</Text>
              </Flex>
              <hr />
              <Flex justify='space-between' alignItems='center' my='4'>
                <Text>
                  <Text as='span' fontWeight='bold'>
                    Date: 
                  </Text>
                  12/11/2021
                </Text>
                <Text>
                  <Text as='span' fontWeight='bold'>
                    Due Date: 
                  </Text>
                  12/11/2021
                </Text>
              </Flex>
              <hr />
              <Flex justify='space-between' alignItems='center' my='4'>
                <Box>
                  <Text fontWeight='bold'>Payment mode</Text>
                  <Text>Cash</Text>
                </Box>
                <Box>
                  <Text fontWeight='bold'>Cash on delivery</Text>
                  <Text>NGN 0.00</Text>
                </Box>
                <Box>
                  <Text fontWeight='bold'>Demurrage Amount</Text>
                  <Text>+236 8878 998</Text>
                </Box>
              </Flex>

              <Flex justify='space-between' alignItems='center' my='8'>
                <Box>Scan code</Box>
                <Box>
                  <Text fontWeight='bold'>Customer Category</Text>
                  <Text>+236 8878 998</Text>
                </Box>
                <Box>Scan code</Box>
              </Flex>

              <Grid
                gap='35'
                gridTemplateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)']}
                my='4'
              >
                <Box>
                  <Text color='gray' fontWeight='bold' mb="6" borderRadius="md">Sender details</Text>
                  <Box bg='lightgray' p='5' width={['50%', '100%']} borderRadius="md">
                    <Box mb='3'>
                      <Text fontWeight='bold'>Name</Text>
                      <Text>John</Text>
                    </Box>
                    <Box mb='3'>
                      <Text fontWeight='bold'>Email</Text>
                      <Text>John@gmail.com</Text>
                    </Box>
                    <Box>
                      <Text fontWeight='bold'>Phone Number</Text>
                      <Text>+234 998 987 0980</Text>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Text color='gray' fontWeight='bold' mb="6">Reciever details</Text>
                  <Box bg='lightgray' p='5' width={['50%', '100%']} borderRadius="md">
                    <Box mb='3'>
                      <Text fontWeight='bold'>Name</Text>
                      <Text>John</Text>
                    </Box>
                    <Box mb='3'>
                      <Text fontWeight='bold'>Email</Text>
                      <Text>John@gmail.com</Text>
                    </Box>
                    <Box>
                      <Text fontWeight='bold'>Phone Number</Text>
                      <Text>+234 998 987 0980</Text>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <hr />
              <Box mt="4">
                <Flex justify='space-between' alignItems='center'>
                  <th>ITEM</th>
                  <th>QTY</th>
                  <th>ITEM VALUE AMOUNT</th>
                </Flex>
                <Flex justify='space-between' alignItems='center' my="2">
                  <td>Samsung TY67</td>
                  <td>23</td>
                  <td>NGN 23,000</td>
                </Flex>
                <Flex justify='space-between' alignItems='center' my="2">
                  <td>Samsung TY67</td>
                  <td>23</td>
                  <td>NGN 23,000</td>
                </Flex>
              </Box>
              {/* Sub total table result */}
              <Flex justify='end' alignItems='end' borderBottomWidth="1px" borderTopWidth="1px" my="4">
                <Box width="50%" my="4">
                  <Flex justify='space-between' alignItems='center' pb="2">
                    <Text fontWeight='bold'>Amount</Text>
                    <Text>NGN 23,000</Text>
                  </Flex>
                  <Flex justify='space-between' alignItems='center' pb="2">
                    <Text fontWeight='bold'>Vat</Text>
                    <Text>NGN 23,000</Text>
                  </Flex>
                  <Flex justify='space-between' alignItems='center' pb="2">
                    <Text fontWeight='bold'>Pickup price</Text>
                    <Text>NGN 23,000</Text>
                  </Flex>
                  <Flex justify='space-between' alignItems='center' pb="2">
                    <Text fontWeight='bold'>Handling & Security</Text>
                    <Text>NGN 0.000</Text>
                  </Flex>

                  <Flex justify='space-between' alignItems='center' borderTopWidth="1px" pt="2">
                    <Text fontWeight='800' fontSize="lg">Total</Text>
                    <Text fontWeight='800' fontSize="lg">NGN 0.000</Text>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box width={['100%', '35%']} p='1rem'>
            <Card style={{ textAlign: 'center' }}>
              <Button
                colorScheme='red'
                width='100%'
                py='6'
                leftIcon={<FaShareAlt />}
              >
                Share invoice
              </Button>

              <Grid gridTemplateColumns='repeat(2, 1fr)' gap='10' my='10'>
                <Button colorScheme='green' py='6'>
                  Preview
                </Button>
                <Button colorScheme='green' py='6'>
                  Download
                </Button>
              </Grid>

              <Button
                colorScheme='red'
                width='100%'
                leftIcon={<AiOutlinePrinter />}
                py='6'
              >
                Print
              </Button>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
