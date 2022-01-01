import Container from '@/components/atoms/Container'
import Header from '@/components/atoms/Heading'
import Layout from '@/components/organisms/Layout'
import { Button, Grid, Heading, Text, FormControl, Select, Input } from '@chakra-ui/react'
import { FaListUl } from 'react-icons/fa'
import Logo from '@/components/atoms/Logo'

export default function OfflineOrderPage() {

  
  return (
    <Layout>
      <Container>
        <Header title="My Orders" icon={<FaListUl />} />

        <form>
          <Heading size="sm" mb="4">Personal Data</Heading>
          <Grid gridTemplateColumns='repeat(3, 1fr)' gap="5">
            <FormControl>
              <Input type="text" id="name" id="name" name="name" placeholder="Name" />
            </FormControl>
            <FormControl>
              <Input type="email" id="email" id="email" name="email" placeholder="Email" />
            </FormControl>
            <FormControl>
              <Input type="text" id="phone" id="phone" name="phone" placeholder="Phone Number" />
            </FormControl>
          </Grid>
          <FormControl mt="4">
            <Input type="text" id="address" id="address" name="address" placeholder="Address" />
          </FormControl>

          <Heading size="sm" my="4">Shippment Data</Heading>
          <Grid gridTemplateColumns='repeat(3, 1fr)' gap="5">
            <FormControl>
              <Input type="text" id="recieversName" id="recieversName" name="recieversName" placeholder="Recievers Name" />
            </FormControl>
            <FormControl>
              <Input type="text" id="phone" id="phone" name="phone" placeholder="Phone Number" />
            </FormControl>
            <FormControl>
              <Input type="email" id="email" id="email" name="email" placeholder="Email" />
            </FormControl>
          </Grid>
          <Grid gridTemplateColumns='repeat(3, 1fr)' gap="5" mt="4">
            <FormControl>
              <Input type="text" id="description" id="description" name="description" placeholder="Description" />
            </FormControl>
            <FormControl>
              <Input type="text" id="departure" id="departure" name="departure" placeholder="Departure" />
            </FormControl>
            <FormControl>
              <Input type="text" id="arrival" id="arrival" name="arrival" placeholder="Arrival" />
            </FormControl>
          </Grid>
          <FormControl mt="4">
            <Input type="text" id="address" id="address" name="address" placeholder="Address" />
          </FormControl>
          <Grid gridTemplateColumns='repeat(4, 1fr)' gap="5" mt="4">
            <FormControl>
              <Input type="text" id="city" id="city" name="city" placeholder="City" />
            </FormControl>
            <FormControl>
              <Input type="text" id="state" id="state" name="state" placeholder="State" />
            </FormControl>
            <FormControl>
              <Select placeholder='Select Region'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <Select placeholder='Select Rider'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
          </Grid>
          <Heading size="sm" mt="10" mb="4">Items <sup>(item 1)</sup></Heading>
          <Grid gridTemplateColumns='repeat(3, 1fr)' gap="5">
            <FormControl>
              <Input type="text" id="itemName" id="itemName" name="itemName" placeholder="Items Name" />
            </FormControl>
            <FormControl>
              <Input type="text" id="quantity" id="quantity" name="quantity" placeholder="Quantity" />
            </FormControl>
            <FormControl>
              <Input type="text" id="itemValue" id="itemValue" name="itemValue" placeholder="Item Value" />
            </FormControl>
          </Grid>
          <Grid gridTemplateColumns='repeat(4, 1fr)' gap="5" mt="4">
            <FormControl>
              <Input type="text" id="amount" id="amount" name="amount" placeholder="Amount" />
            </FormControl>
            <FormControl>
              <Select placeholder='Delivery Method'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <Input type="text" id="weight" id="weight" name="weight" placeholder="weight" />
            </FormControl>
            <FormControl>
              <Input type="file" />
            </FormControl>
          </Grid>

          <Text my="10">Add more items</Text>

          <Button colorScheme="red" mb="10" size="lg">Checkout</Button>
        </form>
      </Container>
    </Layout>
  )
}
