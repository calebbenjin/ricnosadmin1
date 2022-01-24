import { useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@/components/atoms/Container';
import Card from '@/components/atoms/Card';
import {
  Button,
  Heading,
  Text,
  Flex,
  Box,
  Grid,
  Avatar,
  Select,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import Layout from '@/components/organisms/Layout';
import { FaShareAlt, FaLongArrowAltRight, FaUser } from 'react-icons/fa';
import { AiOutlinePrinter } from 'react-icons/ai';
import { VscCalendar } from 'react-icons/vsc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/atoms/Heading';
import Link from 'next/link';
import { parseCookies } from '@/helpers/index';

export default function OfflineOrderPage({ data, token }) {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [loadingCreateCustomer, setLoadingCreateCustomer] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleCreateCustomer = async () => {
    setLoadingCreateCustomer(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('phone', phone);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const req = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/create_customer`,
      requestOptions
    );

    const result = await req.json();

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
    setLoadingCreateCustomer(false);
  };

  return (
    <Layout>
      <Container>
        <ToastContainer
          position="top-center"
          autoClose={8000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Flex>
          <Box width={['100%', '65%']} p="1rem">
            <Header title="Users" icon={<FaUser />} />
            <Card>
              <Box textAlign="center" my="5">
                <Avatar
                  name={data.name}
                  size="2xl"
                  style={{ border: 'solid 2px red' }}
                  src={data.passport}
                ></Avatar>
              </Box>

              <Heading size="md" mt="10">
                Profile Data
              </Heading>
              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Full Name
                  </Heading>
                  <Text>{data.name}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Email
                  </Heading>
                  <Text>{data.email}</Text>
                </Box>
                <Box>
                  <Heading size="sm" color="red">
                    Phone Number
                  </Heading>
                  <Text>{data.phone}</Text>
                </Box>
              </Flex>

              {/* <Flex alignItems="center" justifyContent="space-between" mt="4"> */}
              {/* <Box width="33%">
                  <Heading size="sm" color="red">Alternative Phone Number</Heading>
                  <Text>John Doe</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Date of Birth</Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box> */}
              {/* <Box>
                  <Heading size="sm" color="red">State</Heading>
                  <Text>{data.addresses?.state}</Text>
                </Box>
              </Flex>

              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">City</Heading>
                  <Text>{data.addresses.city}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Address</Heading>
                  <Text>{data.addresses.address}</Text>
                </Box>
              </Flex> */}

              {/* <Heading size='md' mt="10">Education Data</Heading>
              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">Instution Attended</Heading>
                  <Text>John Doe</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">Qualification</Heading>
                  <Text>Johndoe@gmail.com</Text>
                </Box>
              </Flex> */}
              <Heading size="md" mt="10">
                Residential Details
              </Heading>
              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Present Address
                  </Heading>
                  <Text>{data.addresses?.address}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Second Address
                  </Heading>
                  <Text>{data.addresses?.second_address}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Zip Code
                  </Heading>
                  <Text>{data.zip_code}</Text>
                </Box>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                mt="4"
                mb="10"
              >
                <Box width="33%">
                  <Heading size="sm" color="red">
                    State
                  </Heading>
                  <Text>{data.addresses?.state}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    City{' '}
                  </Heading>
                  <Text>{data.addresses?.city}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Country
                  </Heading>
                  <Text>{data.addresses?.country}</Text>
                </Box>
              </Flex>
            </Card>
            <Box mt="10">
              <Card>
                <Heading color="gray" size="md">
                  Order History
                </Heading>
                <Flex alignItems="center" my="5">
                  <Text color="grey" mr="4">
                    Sort:
                  </Text>
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
                          Tracking ID
                        </th>
                        <th data-label="Date" scope="col">
                          To
                        </th>
                        <th data-label="Track No" scope="col">
                          Amount
                        </th>
                        <th data-label="Track No" scope="col">
                          View
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.orders.map((item) => (
                        <tr key={item.id}>
                          <td></td>
                          <td>{item.tracking_id}</td>
                          <td>{item.address}</td>
                          <td style={{ color: 'green' }}>NGN{item.amount}</td>
                          <td>
                            <Link href={`/admin/orders/${data.id}`}>
                              <Button>View</Button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </Card>
            </Box>
          </Box>
          <Box width={['100%', '35%']} p="1rem">
            <Card style={{ textAlign: 'center' }}>
              {/* <Link href="/message" passHref>
                <Button
                  colorScheme="red"
                  width="100%"
                  py="6"
                  mb="4"
                  leftIcon={<FaShareAlt />}
                >
                  Send Message
                </Button>
              </Link> */}

              <hr />
              <Flex justify="space-between" alignItems="center">
                <Box my="4">
                  <Flex alignItems="center">
                    <VscCalendar style={{ fontSize: '1.5rem', color: 'red' }} />
                    <Text ml="2">{data.order_count} Orders</Text>
                  </Flex>
                </Box>
                <Link href="/orders" passHref>
                  <a>
                    <FaLongArrowAltRight className="icon" />
                  </a>
                </Link>
              </Flex>
              <hr />

              {/* <Grid gridTemplateColumns="repeat(2, 1fr)" gap="10" my="5">
                <Link href="/settings" passHref>
                  <Button colorScheme="green" py="6">
                    Edit
                  </Button>
                </Link>
                <Button onClick={onOpen} colorScheme="green" py="6">
                  New Account
                </Button>
              </Grid> */}

              <Button
                onClick={onOpen}
                colorScheme="green"
                width="100%"
                leftIcon={<AiOutlinePrinter />}
                py="6"
              >
                New Account
              </Button>
            </Card>
          </Box>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create New Customer</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl my={3}>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  size="sm"
                  type="email"
                />
              </FormControl>
              <FormControl my={3}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Phone number"
                  size="sm"
                  type="text"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                isLoading={loadingCreateCustomer}
                onClick={handleCreateCustomer}
                colorScheme="green"
              >
                Create
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ req, query }) {
  const { token } = parseCookies(req);
  const { customerID } = query;

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response = await fetch(
    `https://alpha.ricnoslogistics.com/api/admin/customer/${customerID}`,
    requestOptions
  );

  const result = await response.json();

  return {
    props: {
      data: result.data.user,
      token,
    },
  };
}
