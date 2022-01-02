import { useState } from 'react'
import Layout from '@/components/organisms/Layout'
import Container from '@/components/atoms/Container'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaTh } from 'react-icons/fa'
import { BiSearchAlt2, BiPencil } from 'react-icons/bi'
import { BsArrowLeftRight } from 'react-icons/bs'
import Header from '@/components/atoms/Heading'
import {
  Heading,
  Box,
  Flex,
  Button,
  Text,
  Stack,
  Input,
  FormControl,
  Grid,
  FormLabel,
  Select
} from '@chakra-ui/react'
import Link from 'next/link'

const data = [
  {
    id: 1,
    branch: 'Portharcourt',
    address: 'No 3: Lagfog johndeo',
    from: "Portharcourt",
    to: "Lagos",
    method: "Bike",
    amount: "20.000",
    lga: 'Obolage',
    state: 'Rivers',
    country: 'Rivers',
    rank: 'Rivers',
    activate: true,
  },
  {
    id: 2,
    branch: 'Portharcourt',
    address: 'No 3: Lagfog johndeo',
    from: "Portharcourt",
    to: "Lagos",
    method: "Bike",
    amount: "20.000",
    lga: 'Obolage',
    state: 'Rivers',
    country: 'Rivers',
    rank: 'Rivers',
    activate: false,
  },
  {
    id: 3,
    branch: 'Portharcourt',
    address: 'No 3: Lagfog johndeo',
    from: "Portharcourt",
    to: "Lagos",
    method: "Bike",
    amount: "20.000",
    lga: 'Obolage',
    state: 'Rivers',
    country: 'Rivers',
    rank: 'Rivers',
    activate: true,
  },
  {
    id: 4,
    branch: 'Portharcourt',
    address: 'No 3: Lagfog johndeo',
    from: "Portharcourt",
    to: "Lagos",
    method: "Bike",
    amount: "20.000",
    lga: 'Obolage',
    state: 'Rivers',
    country: 'Rivers',
    rank: 'Rivers',
    activate: false,
  },
]

export default function ManageSite() {

  const handleDelete = (id) => {
    alert(`Are you sure you want to delete this ${id} user?`)
  }
  const handleEdit = (id) => {
    alert(`Are you sure you want to delete this ${id} user?`)
  }

  const handleActivate = (status) => {
    alert(`Are you sure u want to Deactivate ${status} this User?`)
  }
  const handleDeactivate = (status) => {
    alert(`Are you sure u want to Activate ${status} this User?`)
  }

  return (
    <Layout>
      <Container>
        <Heading size='lg' color='gray' my='5'>Manage Site</Heading>
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
                <Link href='/admin/manage/'>Assign User</Link>
              </Button>
              <Button
                _focus={{ color: 'red' }}
                color='red'
                fontWeight='bold'
                size='lg'
                variant='ghost'
              >
                <Link href='/admin/manage/upload'>Upload Data</Link>
              </Button>
              <Button
                _focus={{ color: 'red' }}
                color='gray'
                fontWeight='bold'
                size='lg'
                variant='ghost'
              >
                <Link href='/admin/manage/sendEmail'>Email Message</Link>
              </Button>
            </Flex>
          </Stack>
        </Flex>
        <hr />

        <Box>
          <Heading size='md' mt='4'>
            Set Location
          </Heading>
          <Text color='gray' mb='5'>
            Locations where our services are covered
          </Text>
          <form>
            <Flex bg='white' p='5'>
              <Grid gridTemplateColumns='repeat(3, 1fr)' gap='5' width='80%'>
                <FormControl>
                  <FormLabel>Name of branch</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    id='branch'
                    name='branch'
                    value=''
                    placeholder='Enter Branch'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    id='address'
                    name='address'
                    value=''
                    placeholder='Enter Address'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>LGA</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    id='lga'
                    name='lga'
                    value=''
                    placeholder='Enter LGA'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>State</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    id='state'
                    name='state'
                    value=''
                    placeholder='Enter State'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    id='city'
                    name='city'
                    value=''
                    placeholder='Enter City'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    id='country'
                    name='country'
                    value=''
                    placeholder='Enter Country'
                  />
                </FormControl>
              </Grid>
              <Button colorScheme='green' px='10' ml='8' mt='7'>
                Save
              </Button>
            </Flex>
          </form>
        </Box>

        <Box mb='4'>
          <div className='resTable'>
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th data-label='Date' scope='col'></th>
                  <th data-label='Date' scope='col'>
                    Branch
                  </th>
                  <th data-label='Date' scope='col'>
                    Address
                  </th>
                  <th data-label='Date' scope='col'>
                    LGA
                  </th>
                  <th data-label='Date' scope='col'>
                    State
                  </th>
                  <th data-label='Track No' scope='col'>
                    Country
                  </th>
                  <th data-label='Name' scope='col'>
                    Rank
                  </th>
                  <th data-label='Price' scope='col'>
                    Status
                  </th>
                  <th data-label='Items' scope='col'>
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td></td>
                    <td>{user.branch}</td>
                    <td>{user.address}</td>
                    <td>{user.lga}</td>
                    <td>{user.state}</td>
                    <td>{user.country}</td>
                    <td>{user.rank}</td>
                    <td>
                      <Button
                        colorScheme='green'
                        onClick={() => handleActivate(user.status)}
                        size='sm'
                        mr='2'
                      >
                        Enable
                      </Button>
                      <Button
                        colorScheme='red'
                        onClick={() => handleDeactivate(user.status)}
                        size='sm'
                        mr='-px'
                      >
                        Disabled
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => handleEdit(user.id)}
                        variant='outline'
                        color='gray'
                        fontSize='1.5rem'
                      >
                        <BiPencil />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <hr />

        <Box>
          <Heading size='md' mt='8'>
            Set Region
          </Heading>
          <Text color='gray' mb='5'>
            Regions where our services are covered
          </Text>
          <form>
            <Flex bg='white' p='5'>
              <Grid gridTemplateColumns='repeat(4, 1fr)' gap='5' width='80%'>
                <FormControl>
                  <FormLabel>From</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    id='location'
                    name='location'
                    value=''
                    placeholder='Enter Location'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>To</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    id='location'
                    name='location'
                    value=''
                    placeholder='Enter Location'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Delivery Method</FormLabel>
                  <Select>
                    <option value="flight">Flight</option>
                    <option value="Motor">Motor</option>
                    <option value="bike">Bike</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Amount</FormLabel>
                  <Input
                    type='text'
                    bg='white'
                    id='amount'
                    name='amount'
                    value=''
                    placeholder='Enter Amount'
                  />
                </FormControl>
              </Grid>
              <Button colorScheme='green' px='10' ml='8' mt='7'>
                Save
              </Button>
            </Flex>
          </form>
        </Box>

        <Box mb='4'>
          <div className='resTable'>
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th data-label='Date' scope='col'></th>
                  <th data-label='Date' scope='col'>
                    From
                  </th>
                  <th data-label='Date' scope='col'>
                    To
                  </th>
                  <th data-label='Date' scope='col'>
                    Delivery Method
                  </th>
                  <th data-label='Date' scope='col'>
                    Amount
                  </th>
                  <th data-label='Price' scope='col'>
                    Status
                  </th>
                  <th data-label='Items' scope='col'>
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td></td>
                    <td>{user.from}</td>
                    <td>{user.to}</td>
                    <td>{user.method}</td>
                    <td>NGN{user.amount}</td>
                    <td>
                      <Button
                        colorScheme='green'
                        onClick={() => handleActivate(user.status)}
                        size='sm'
                        mr='2'
                      >
                        Enable
                      </Button>
                      <Button
                        colorScheme='red'
                        onClick={() => handleDeactivate(user.status)}
                        size='sm'
                        mr='-px'
                      >
                        Disabled
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => handleEdit(user.id)}
                        variant='outline'
                        color='gray'
                        fontSize='1.5rem'
                      >
                        <BiPencil />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>
        <hr />
      </Container>
    </Layout>
  )
}
