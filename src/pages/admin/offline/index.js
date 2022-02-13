import { useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Container from '@/components/atoms/Container'
import { API_URL } from '@/lib/index'
import Header from '@/components/atoms/Heading'
import Layout from '@/components/organisms/Layout'
import {
  Box,
  Button,
  Grid,
  Heading,
  Flex,
  Text,
  FormControl,
  Select,
  Input,
} from '@chakra-ui/react'
import { FaListUl } from 'react-icons/fa'
import Logo from '@/components/atoms/Logo'
import { parseCookies } from '@/helpers/index'

export default function OfflinePage({ data, token, user }) {
  const initialItemsArray = [
    {
      item: '',
      quantity: '',
      image: '',
      weight: '',
    },
  ]

  const [itemsList, setItemsList] = useState(initialItemsArray)
  const [loadingProcessing, setLoadingProcessing] = useState(false)

  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [deliveryMethod, setDeliveryMethod] = useState('')
  const [pickupAddress, setPickupAddress] = useState('')
  const [region, setRegion] = useState('')
  const [collectorName, setCollectorName] = useState('')
  const [collectorPhone, setCollectorPhone] = useState('')
  const [collectorEmail, setCollectorEmail] = useState('')

  const [deliveryFee, setDeliveryFee] = useState('')
  const [amount, setAmount] = useState('')

  const handleAddItem = () => {
    setItemsList((prev) => [...prev, initialItemsArray])
  }

  const getItemNames = () => {
    return itemsList?.map((item) => item.item)
  }

  const getItemQuantities = () => {
    return itemsList?.map((item) => item.quantity)
  }

  const getItemImages = () => {
    return itemsList?.map((item) => item.image)
  }

  const getItemWeights = () => {
    return itemsList?.map((item) => item.weight)
  }

  const handleItemInputChange = (e, index) => {
    const { name, value, files } = e.target
    const list = [...itemsList]

    if (files) {
      list[index][name] = files[0]
    } else {
      list[index][name] = value
    }

    setItemsList(list)
  }

  const handleCreateOrder = async () => {
    setLoadingProcessing(true)
    var myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')
    myHeaders.append('Authorization', `Bearer ${token}`)

    var formdata = new FormData()

    formdata.append('name', name)
    formdata.append('email', email)
    formdata.append('phone', phone)
    formdata.append('state', state)
    formdata.append('city', city)
    formdata.append('address', address)
    formdata.append('delivery_method', deliveryMethod)
    formdata.append('collector_phone', collectorPhone)
    formdata.append('collector_email', collectorEmail)
    formdata.append('collector_name', collectorName)
    formdata.append('delivery_fee', deliveryFee)
    formdata.append('total_amount', amount)
    formdata.append('region', region)
    formdata.append('pickup_address', pickupAddress)

    getItemNames().map((item) => formdata.append('item[]', item))
    getItemQuantities().map((item) => formdata.append('quantity[]', item))
    getItemImages().map((item) => formdata.append('image[]', item, '[PROXY]'))
    getItemWeights().map((item) => formdata.append('weight[]', item))

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    const res = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/order/create_order`,
      requestOptions
    )
    const data = await res.json()

    if (data.success) {
      toast.success(data.message)
      router.push(`/admin/offline/${data.data.order.id}`)
    } else {
      toast.error(data.message)
    }

    setLoadingProcessing(false)
  }

  const handleSubmit = () => {
    console.log('Hello world')
  }

  return (
    <Layout data={user}>
      <Container>
        <ToastContainer
          position='top-center'
          autoClose={8000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header title='My Orders' icon={<FaListUl />} />

        <Flex alignItems="center" justifyContent="center">
          <Box bg='white' width={['90%']} p='10'>
            <form onSubmit={handleCreateOrder}>
              <Heading size='sm' mb='4'>
                Personal Data
              </Heading>
              <Grid gridTemplateColumns='repeat(3, 1fr)' gap='5'>
                <FormControl>
                  <Input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type='text'
                    id='phone'
                    name='phone'
                    placeholder='Phone Number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <FormControl mt='4'>
                <Input
                  type='text'
                  id='address'
                  name='address'
                  placeholder='Pickup Address'
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                />
              </FormControl>

              <Heading size='sm' my='4'>
                Shippment Data
              </Heading>
              <Grid gridTemplateColumns='repeat(3, 1fr)' gap='5'>
                <FormControl>
                  <Input
                    type='text'
                    id='collectorName'
                    name='collectorName'
                    placeholder="Collector's Name"
                    value={collectorName}
                    onChange={(e) => setCollectorName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type='text'
                    id='collectorphone'
                    name='collectorphone'
                    placeholder="Collector's Phone Number"
                    value={collectorPhone}
                    onChange={(e) => setCollectorPhone(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type='email'
                    id='collectorEmail'
                    name='collectorEmail'
                    placeholder="Collector's Email"
                    value={collectorEmail}
                    onChange={(e) => setCollectorEmail(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid gridTemplateColumns='repeat(3, 1fr)' gap='5' mt='4'>
                <FormControl>
                  <Select
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    placeholder='Select Delivery method'
                  >
                    <option value='Home'>Home</option>

                    <option value='Office delivery'>Office delivery</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Input
                    type='text'
                    id='deliveryFee'
                    name='deliveryFee'
                    placeholder='Delivery Fee'
                    value={deliveryFee}
                    onChange={(e) => setDeliveryFee(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type='text'
                    id='amount'
                    name='amount'
                    placeholder='Total Amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <FormControl mt='4'>
                <Input
                  type='text'
                  id='address'
                  name='address'
                  placeholder='Address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
              <Grid gridTemplateColumns='repeat(3, 1fr)' gap='5' mt='4'>
                <FormControl>
                  <Input
                    type='text'
                    id='city'
                    name='city'
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type='text'
                    id='state'
                    name='state'
                    placeholder='State'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <Select
                    placeholder='Select Region'
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    {data.regions.map((region) => (
                      <option key={region.region_id} value={region.region_id}>
                        {region.routes}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {itemsList.map((item, i) => (
                <>
                  <Heading size='sm' mt='10' mb='4'>
                    Items <sup>(item {i + 1})</sup>
                  </Heading>
                  <Grid gridTemplateColumns='repeat(2, 1fr)' gap='5'>
                    <FormControl>
                      <Input
                        type='text'
                        id='item'
                        name='item'
                        value={item.item}
                        onChange={(e) => handleItemInputChange(e, i)}
                        placeholder='Item Name'
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        type='text'
                        id='quantity'
                        name='quantity'
                        value={item.quantity}
                        onChange={(e) => handleItemInputChange(e, i)}
                        placeholder='Quantity'
                      />
                    </FormControl>
                  </Grid>
                  <Grid gridTemplateColumns='repeat(2, 1fr)' gap='5' mt='4'>
                    <FormControl>
                      <Input
                        type='text'
                        id='weight'
                        name='weight'
                        value={item.weight}
                        onChange={(e) => handleItemInputChange(e, i)}
                        placeholder='weight'
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        type='file'
                        id='image'
                        placeholder='Image'
                        name='image'
                        onChange={(e) => handleItemInputChange(e, i)}
                      />
                    </FormControl>
                  </Grid>
                </>
              ))}

              <Text
                my='10'
                style={{ cursor: 'pointer', width: 'fit-content' }}
                onClick={handleAddItem}
              >
                Add more items
              </Text>

              <Button
                isLoading={loadingProcessing}
                colorScheme='red'
                mb='10'
                size='lg'
                onClick={handleCreateOrder}
              >
                Checkout
              </Button>
            </form>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  var myHeaders = new Headers()
  myHeaders.append('Accept', 'application/json')
  myHeaders.append('Authorization', `Bearer ${token}`)

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  const response = await fetch(
    'https://alpha.ricnoslogistics.com/api/quote_data',
    requestOptions
  )

  const result = await response.json()

  const res = await fetch(`${API_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const userData = await res.json()

  return {
    props: {
      data: result.data,
      token,
      user: userData.data.user,
    },
  }
}
