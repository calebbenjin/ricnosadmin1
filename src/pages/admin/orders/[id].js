import { useContext, useState, useRef } from "react";
import Container from "@/components/atoms/Container";
import { API_URL } from "@/lib/index";
import Layout from "@/components/organisms/Layout";
import styled from "styled-components";
import Card from "@/components/atoms/Card";
import UserCardInfo from "@/components/molecules/UserCardInfo";
import Logs from "@/components/molecules/Logs";
import { Button, Flex, Box, Heading, Text, Select } from "@chakra-ui/react";
import Logo from "@/components/atoms/Logo";
import logo from "@/assets/logo1.svg";
import Image from "next/image";
import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import SelectRiderModal from "@/components/atoms/SelectRiderModal";
import ReactToPrint from "react-to-print";

export default function OrdersPage({ data, token }) {
  const { user } = useContext(AuthContext);
  const [selectedRider, setSelectedRider] = useState(null);
  const [loadingDrop, setLoadingDrop] = useState(false);
  const [loadingDelivery, setLoadingDelivery] = useState(false);
  const [loadingConfirmDelivery, setLoadingConfirmDelivery] = useState(false);

  const router = useRouter();

  let printInvoiceRef = useRef();

  const handleOfficeDrop = async () => {
    setLoadingDrop(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/order/confirm_drop/${data.order.id}`,
      requestOptions
    );

    const result = await response.json();

    if (result.success) {
      router.reload(window.location.pathname);
    } else {
      setLoadingDrop(false);
      console.log(result);
    }
  };

  const handleConfirmDelivery = async () => {
    setLoadingConfirmDelivery(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/order/confirm_delivery/${data.order.id}`,
      requestOptions
    );

    const result = await response.json();

    if (result.success) {
      router.reload(window.location.pathname);
    } else {
      setLoadingConfirmDelivery(false);
      console.log(result);
    }
  };

  const handleAssignDeliveryAgent = async () => {
    setLoadingDelivery(true);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/order/assign_agent/${data.order.id}/${selectedRider}`,
      requestOptions
    );

    const result = await response.json();

    if (result.success) {
      router.reload(window.location.pathname);
    } else {
      setLoadingDelivery(false);
      // console.log(result);
    }
  };

  return (
    <Layout data={user}>
      <Container>
        <Header>
          <h2 className="orderId">Orders #{data?.order?.tracking_id}</h2>
          {/* <h5 className="date">06.12.2021 at 10:14am</h5> */}
        </Header>

        <OrderStatus>
          <div className="header">
            <div className="status">
              <h2>Status</h2>
              <p>{data?.order?.status}</p>
            </div>
            <ReactToPrint
              trigger={() => <Button colorScheme="red">Print Invoice</Button>}
              content={() => printInvoiceRef.current}
            />
          </div>
        </OrderStatus>

        <SectionLayout ref={printInvoiceRef}>
          <Flex>
            <Box width="70%" pr="4">
              <Card>
                <Heading size="md">Sender Details</Heading>
                <Flex alignItems="center" justifyContent="space-between" mt="4">
                  <Box width="33%">
                    <Heading size="sm" color="red">
                      Name
                    </Heading>
                    <Text>{data.order.sender_detail.name}</Text>
                  </Box>
                  <Box width="33%">
                    <Heading size="sm" color="red">
                      Email
                    </Heading>
                    <Text>{data.order.sender_detail.email}</Text>
                  </Box>
                  <Box>
                    <Heading size="sm" color="red">
                      Phone Number
                    </Heading>
                    <Text>{data.order.sender_detail.phone}</Text>
                  </Box>
                </Flex>
              </Card>
              <Box my="8">
                <Card>
                  <Heading size="md">Shipment Data</Heading>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt="4"
                  >
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        Recievers Name
                      </Heading>
                      <Text>{data.order.reciever_name}</Text>
                    </Box>
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        Email
                      </Heading>
                      <Text>{data.order.reciever_email}</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">
                        Phone Number
                      </Heading>
                      <Text>{data.order.reciever_phone}</Text>
                    </Box>
                  </Flex>

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt="4"
                  >
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        Description
                      </Heading>
                      <Text>{data.order.description}</Text>
                    </Box>
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        Departure
                      </Heading>
                      <Text>{data.order.departure}</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">
                        Arrival
                      </Heading>
                      <Text>{data.order.arrival}</Text>
                    </Box>
                  </Flex>

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt="4"
                  >
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        Address
                      </Heading>
                      <Text>{data.order.address}</Text>
                    </Box>
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        City
                      </Heading>
                      <Text>{data.order.city}</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">
                        State
                      </Heading>
                      <Text>{data.order.state}</Text>
                    </Box>
                  </Flex>

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt="4"
                  >
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        Delivery Method
                      </Heading>
                      <Text>{data.order.delivery_method}</Text>
                    </Box>
                    <Box width="33%">
                      <Heading size="sm" color="red">
                        Region
                      </Heading>
                      <Text>Johndoe@gmail.com</Text>
                    </Box>
                    <Box>
                      <Heading size="sm" color="red">
                        Selected Ride
                      </Heading>
                      <Text>{data.order.vehicle_type}</Text>
                    </Box>
                  </Flex>

                  {data.order.items.map((item, ind) => (
                    <>
                      <Text mt="8" color="gray">
                        Item({ind + 1})
                      </Text>
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        mt="2"
                      >
                        <Box width="33%">
                          <Heading size="sm" color="red">
                            Item Name
                          </Heading>
                          <Text>{item.item}</Text>
                        </Box>
                        <Box width="33%">
                          <Heading size="sm" color="red">
                            Quantity
                          </Heading>
                          <Text>{item.quantity}</Text>
                        </Box>
                        <Box>
                          <Heading size="sm" color="red">
                            Weight
                          </Heading>
                          <Text>{item.weight}</Text>
                        </Box>
                      </Flex>

                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        mt="4"
                      >
                        <Box>
                          <Heading size="sm" color="red">
                            Item value
                          </Heading>
                          <Text>NGN {item.value}</Text>
                        </Box>
                      </Flex>
                    </>
                  ))}
                </Card>
              </Box>
              <Box my="8">
                <Card>
                  <Heading size="md">Order Summary</Heading>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    my="6"
                  >
                    <Text fontWeight="500">
                      Subtotal<sup>(all items)</sup>
                    </Text>
                    <Text>NGN {data.order.amount}</Text>
                  </Flex>
                  <hr />
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    my="4"
                  >
                    <Text fontWeight="500">
                      Tax<sup>PDV20%(included)</sup>
                    </Text>
                    <Text>NGN {data.order.tax}</Text>
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    my="6"
                  >
                    <Text fontWeight="500">Shipping Discount</Text>
                    <Text>NGN 00.00</Text>
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    my="8"
                  >
                    <Heading size="sm">Total</Heading>
                    <Heading size="sm">NGN {data.order.amount}</Heading>
                  </Flex>
                </Card>
              </Box>
              <Box>
                <Card>
                  <Heading size="md" mb="4">
                    Document
                  </Heading>
                  <hr />

                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt="4"
                  >
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
            </Box>

            <Box width="30%" pl="4">
              {data?.order?.is_online === "1" && (
                <Box my="4">
                  {data?.order?.admins?.pickup_agent === null && (
                    <p>No pickup agent assigned</p>
                  )}

                  {(data.order.integer_status === "2" ||
                    data.order.integer_status === "3" ||
                    data.order.integer_status === "6" ||
                    data.order.integer_status === "5" ||
                    data.order.integer_status === "7" ||
                    data.order.integer_status === "4" ||
                    data.order.integer_status === "1") && (
                    <UserCardInfo
                      title="Pickup Agent"
                      img={data?.order?.admins?.pickup_agent?.passport}
                      username={data?.order?.admins?.pickup_agent?.name}
                      orders={data?.order?.admins?.pickup_agent?.orders}
                      url="/"
                      phone={
                        data?.order?.admins?.pickup_agent?.contact_info?.phone
                      }
                      address={
                        data?.order?.admins?.pickup_agent?.contact_info?.address
                      }
                      status={data?.order?.integer_status}
                      handleClick={handleOfficeDrop}
                      loading={loadingDrop}
                      type="pickup"
                    />
                  )}
                </Box>
              )}

              <Box my="4">
                {data?.order?.integer_status === "4" && (
                  <>
                    <SelectRiderModal
                      orderID={data?.order.id}
                      riders={data?.delivery_riders}
                      token={token}
                    />
                  </>
                )}

                {(data?.order?.integer_status === "5" ||
                  data?.order?.integer_status === "7" ||
                  data?.order?.integer_status === "1") && (
                  <UserCardInfo
                    title="Delivery Agent"
                    img={data?.order?.admins?.delivery_agent?.passport}
                    username={data?.order.admins.delivery_agent.name}
                    orders={data?.order.admins.delivery_agent.orders}
                    url="/"
                    phone={data?.order.admins.delivery_agent.contact_info.phone}
                    address={
                      data?.order.admins.delivery_agent.contact_info.address
                    }
                    status={data?.order.integer_status}
                    handleClick={handleConfirmDelivery}
                    loading={loadingConfirmDelivery}
                    type="delivery"
                  />
                )}
              </Box>

              <Logs trackerData={data?.order?.trackers} />

              <Box mt="10">
                <Card>
                  <Flex alignItems="center" mt="4">
                    <Box p="4" borderRadius="md" mr="10" boxShadow="md">
                      <Logo src={logo} />
                    </Box>
                    <Box>
                      <Text fontSize="lg">Ricno Logistics</Text>
                      <Text>Premium</Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
            </Box>
          </Flex>
        </SectionLayout>
      </Container>
    </Layout>
  );
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
`;

const SectionLayout = styled.div`
  margin: 3rem 0;
  .card-title {
    font-weight: 700;
    font-size: 2rem;
  }
`;
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
`;

export async function getServerSideProps({ req, query }) {
  const { token } = parseCookies(req);
  const { id } = query;

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    `https://alpha.ricnoslogistics.com/api/admin/order/${id}`,
    requestOptions
  );

  const result = await response.json();

  console.log(result.data);

  return {
    props: {
      data: result.data,
      token,
    },
  };
}
