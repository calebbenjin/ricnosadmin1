import { useState, useContext } from 'react';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/components/organisms/Layout';
import { FaShareAlt, FaLongArrowAltRight, FaUser } from 'react-icons/fa';
import { AiOutlinePrinter } from 'react-icons/ai';
import { VscCalendar } from 'react-icons/vsc';
import Link from 'next/link';
import { parseCookies } from '@/helpers/index';
import AuthContext from '@/context/AuthContext';

export default function OfflineOrderPage({ data, token }) {
  const { user } = useContext(AuthContext);
  const [loadingActivationToggle, setLoadingActivationToggle] = useState(false);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loadingPasswordReset, setLoadingPasswordReset] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const handleAccountToggle = async () => {
    setLoadingActivationToggle(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const req = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/rider/toggle_activation/${data.id}`,
      requestOptions
    );

    const result = await req.json();

    if (result.success) {
      router.reload(window.location.pathname);
    } else {
      setLoadingActivationToggle(false);
      toast.error('Something went wrong');
    }
  };

  const handlePasswordChange = async () => {
    setLoadingPasswordReset(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('password', password);
    formdata.append('password_confirmation', confirmPassword);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    const req = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/rider/update_password/${data.id}`,
      requestOptions
    );

    const result = await req.json();

    if (result.success) {
      toast.success(result.message);
      router.reload(window.location.pathname);
    } else {
      setLoadingPasswordReset(false);
      toast.error(result.message);
    }
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
            <Heading color="gray" mb="4">Rider</Heading>
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

              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Alternative Phone Number
                  </Heading>
                  <Text>John Doe</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Date of Birth
                  </Heading>
                  <Text>{data.profile.dob}</Text>
                </Box>
                <Box>
                  <Heading size="sm" color="red">
                    State of Origin
                  </Heading>
                  <Text>{data.profile.state_of_origin}</Text>
                </Box>
              </Flex>

              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Local Gov Area
                  </Heading>
                  <Text>{data.profile.lga}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Nationality
                  </Heading>
                  <Text>{data.profile.nationality}</Text>
                </Box>
              </Flex>

              <Heading size="md" mt="10">
                Education Data
              </Heading>
              {data.qualifications.map((edu) => (
                <Flex alignItems="center" justifyContent="space-between" mt="4">
                  <Box width="33%">
                    <Heading size="sm" color="red">
                      Instution Attended
                    </Heading>
                    <Text>{edu.institude}</Text>
                  </Box>
                  <Box width="33%">
                    <Heading size="sm" color="red">
                      Qualification
                    </Heading>
                    <Text>{edu.qualification}</Text>
                  </Box>
                </Flex>
              ))}

              <Heading size="md" mt="10">
                Residential Details
              </Heading>
              <Flex alignItems="center" justifyContent="space-between" mt="4">
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Present Address
                  </Heading>
                  <Text>{data.profile.current_address}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Permanet Address
                  </Heading>
                  <Text>{data.profile.permanent_address}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Zip Code
                  </Heading>
                  <Text>{data.profile.post_code}</Text>
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
                  <Text>{data.profile.state}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Local Gov Area{' '}
                  </Heading>
                  <Text>{data.profile.lg}</Text>
                </Box>
                <Box width="33%">
                  <Heading size="sm" color="red">
                    Region
                  </Heading>
                  <Text>{data.profile.region}</Text>
                </Box>
              </Flex>
            </Card>
            <Box mt="10">
              <Card>
                <Heading color="gray" size="md">
                  Finance History
                </Heading>
                {data.earnings.length > 0 ? (
                  <>
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
                              Date
                            </th>
                            <th data-label="Date" scope="col">
                              For
                            </th>
                            <th data-label="Track No" scope="col">
                              Amount
                            </th>
                            <th>View</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.earnings.map((item) => (
                            <tr key={item.id}>
                              <td></td>
                              <td>{item.created_at}</td>
                              <td>{item.type}</td>
                              <td style={{ color: 'green' }}>
                                NGN{item.amount}
                              </td>
                              <td>
                                <Link href={`/admin/orders/${item.order_id}`}>
                                  <Button>View</Button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Box>
                  </>
                ) : (
                  <p>No Earnings history</p>
                )}
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
              </Link>

              <hr /> */}
              <Flex justify="space-between" alignItems="center">
                <Box my="4">
                  <Flex alignItems="center">
                    <VscCalendar style={{ fontSize: '1.5rem', color: 'red' }} />
                    <Text ml="2">
                      {data.statistics.orders_completed} Orders
                    </Text>
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
                <Link href="/support" passHref>
                  <Button colorScheme="green" py="6">
                    Send Mail
                  </Button>
                </Link>
              </Grid> */}

              {user.role === '1' && (
                <Button
                  onClick={onOpen}
                  colorScheme="red"
                  width="100%"
                  leftIcon={<AiOutlinePrinter />}
                  py="6"
                >
                  Reset Password
                </Button>
              )}

              {data.status === '1' && user.role === '1' && (
                <Button
                  colorScheme="red"
                  width="100%"
                  leftIcon={<AiOutlinePrinter />}
                  py="6"
                  my="3"
                  onClick={handleAccountToggle}
                  isLoading={loadingActivationToggle}
                >
                  Deactivate Account
                </Button>
              )}

              {data.status === '0' && user.role === '1' && (
                <Button
                  colorScheme="green"
                  width="100%"
                  leftIcon={<AiOutlinePrinter />}
                  py="6"
                  my="3"
                  onClick={handleAccountToggle}
                  isLoading={loadingActivationToggle}
                >
                  Activate Account
                </Button>
              )}
            </Card>
          </Box>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Reset Password for {data.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl my={3}>
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  size="sm"
                  type="password"
                />
              </FormControl>
              <FormControl my={3}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  size="sm"
                  type="password"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                isLoading={loadingPasswordReset}
                onClick={handlePasswordChange}
                colorScheme="green"
              >
                Save
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
  const { riderID } = query;

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
    `https://alpha.ricnoslogistics.com/api/admin/rider/${riderID}`,
    requestOptions
  );

  const result = await response.json();

  return {
    props: {
      data: result.data.rider,
      token,
    },
  };
}
