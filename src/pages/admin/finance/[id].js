import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/atoms/Heading';
import Container from '@/components/atoms/Container';
import Layout from '@/components/organisms/Layout';
import { FaUser } from 'react-icons/fa';
import { API_URL } from '@/lib/index';
import styled from 'styled-components';
import { Button, Flex, Box, Heading, Text, Avatar } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { VscCalendar } from 'react-icons/vsc';
import Logo from '@/components/atoms/Logo';
import logo from '@/assets/logo1.svg';
import { parseCookies } from '@/helpers/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserPage({ data, token, user }) {
  const [loadingManualRequest, setLoadingManualRequest] = useState(false);
  const [loadingCancelRequest, setLoadingCancelRequest] = useState(false);
  const [loadingApprovalRequest, setLoadingApprovalRequest] = useState(false);

  const router = useRouter();

  const handleManualRequest = async () => {
    setLoadingManualRequest(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const request = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/approve_withdrawal_manual/${data.id}`,
      requestOptions
    );
    const result = await request.json();

    if (result.success) {
      toast.success(result.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(result.message);
      setLoadingManualRequest(false);
    }
  };

  const handleApprovalRequest = async () => {
    setLoadingApprovalRequest(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const request = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/approve_withdrawal/${data.id}`,
      requestOptions
    );
    const result = await request.json();

    if (result.success) {
      toast.success(result.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(result.message);
      setLoadingApprovalRequest(false);
    }
  };

  const handleCancelRequest = async () => {
    setLoadingCancelRequest(true);
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const request = await fetch(
      `https://alpha.ricnoslogistics.com/api/admin/decline_withdrawal/${data.id}`,
      requestOptions
    );
    const result = await request.json();

    if (result.success) {
      toast.success(result.message);
      router.reload(window.location.pathname);
    } else {
      toast.error(result.message);
      setLoadingCancelRequest(false);
    }
  };

  return (
    <Layout title="User Details" data={user}>
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
      <Container>
        <Header title="User Details" icon={<FaUser />} />
        <ProfileContainer>
          <Profile>
            <div className="cardHead">
              <Title>#RQ878989</Title>
              <Box>
                {/* <Button
                  mr="4"
                  colorScheme={data.status === 'paid' ? 'green' : 'gold'}
                >
                  Active
                </Button> */}
                <Button colorScheme={data.status === 'paid' ? 'green' : 'gold'}>
                  {data.status}
                </Button>
              </Box>
            </div>
            <div className="cardImage">
              <div className="imgCard">
                {data.rider.passport && (
                  <Image
                    src={data.rider.passport}
                    className="userImage"
                    width="200"
                    height="200"
                    alt="name"
                  />
                )}
              </div>
              <div className="userDetails">
                <ul>
                  <li>
                    <h5 className="title">Name</h5>
                    <h5>{data.rider.name}</h5>
                  </li>
                  <li>
                    <h5 className="title">Email</h5>
                    <h5>{data.rider.email}</h5>
                  </li>
                  <li>
                    <h5 className="title">Phone Number</h5>
                    <h5>{data.rider.phone}</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bankDetails">
              <ul>
                <li>
                  <h5 className="title">Account Name</h5>
                  <h5>{data.rider.bank_detail.account_name}</h5>
                </li>
                <li>
                  <h5 className="title">Account Number</h5>
                  <h5>{data.rider.bank_detail.account_number}</h5>
                </li>
                <li>
                  <h5 className="title">Bank Name</h5>
                  <h5>{data.rider.bank_detail.bank_name}</h5>
                </li>
              </ul>
            </div>

            <Flex alignItems="center" justifyContent="center" my="10">
              <Text frontWeight="bold" color="red" mr="10">
                Amount Requested
              </Text>
              <Heading size="md">{data.amount}</Heading>
            </Flex>

            {/* {data.integer_status === '0' && user.role === '1' && (
              <div className="actionsBtns">
                <div>
                  <Button
                    onClick={handleApprovalRequest}
                    colorScheme="green"
                    mr="4"
                    isLoading={loadingApprovalRequest}
                  >
                    Approve request
                  </Button>
                  <Button
                    isLoading={loadingCancelRequest}
                    onClick={handleCancelRequest}
                    colorScheme="red"
                  >
                    Cancel request
                  </Button>
                </div>
                <Button
                  isLoading={loadingManualRequest}
                  onClick={handleManualRequest}
                  colorScheme="yellow"
                >
                  Approve Manually
                </Button>
              </div>
            )} */}

            <div className="actionsBtns">
                <div>
                  <Button
                    onClick={handleApprovalRequest}
                    colorScheme="green"
                    mr="4"
                    isLoading={loadingApprovalRequest}
                  >
                    Approve request
                  </Button>
                  <Button
                    isLoading={loadingCancelRequest}
                    onClick={handleCancelRequest}
                    colorScheme="red"
                  >
                    Cancel request
                  </Button>
                </div>
                <Button
                  isLoading={loadingManualRequest}
                  onClick={handleManualRequest}
                  colorScheme="yellow"
                >
                  Approve Manually
                </Button>
              </div>

            {/* {data.integer_status === '2' && user.role === '1' && (
              <div className="actionsBtns">
                <div>
                  <Button
                    onClick={handleApprovalRequest}
                    colorScheme="green"
                    mr="4"
                    isLoading={loadingApprovalRequest}
                  >
                    Approve request
                  </Button>
                </div>
                <Button
                  isLoading={loadingManualRequest}
                  onClick={handleManualRequest}
                  colorScheme="yellow"
                >
                  Approve Manually
                </Button>
              </div>
            )} */}
          </Profile>

          <ProfileCard>
            <Flex justify="space-between" mb="2" alignItems="center">
              <Heading size="sm">Profile</Heading>
              <BsThreeDotsVertical />
            </Flex>
            <hr />
            <Flex justify="space-between" alignItems="center" mt="2">
              <Box my="4">
                <Flex alignItems="center">
                  <Avatar
                    size="md"
                    name={data.rider.name}
                    mr="4"
                    src={data.rider.passport}
                  />
                  <Text isTruncated>{data.rider.name}</Text>
                </Flex>
              </Box>
              <Link href="/" passHref>
                <a>
                  <FaLongArrowAltRight className="icon" />
                </a>
              </Link>
            </Flex>
            <hr />
            <Flex justify="space-between" alignItems="center">
              <Box my="4">
                <Flex alignItems="center">
                  <VscCalendar className="icon" />
                  <Text ml="2">
                    {data.rider.statistics.orders_completed} Orders
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <hr />

            <Box my="4">
              <Heading size="sm">Contact Info</Heading>
              <Text my="4">{data.rider.phone}</Text>
              <Text>{data.rider.profile.current_address}</Text>
            </Box>
            <hr />

            <div className="userCard">
              <Heading size="sm">Education</Heading>
              {data.rider.qualifications.map((qual) => (
                <Text key={qual.id}>
                  {qual.qualification} in {qual.institude}
                </Text>
              ))}
            </div>
            <div className="userCard">
              <Title>Residential Detail</Title>

              <ul>
                <li>{data.rider.profile.current_address}</li>
                <li>{data.rider.profile.permanent_address}</li>
              </ul>
            </div>
            <Box>
              <Flex alignItems="center" mt="4">
                <Box p="4" borderRadius="md" mr="10" boxShadow="md">
                  <Logo src={logo} />
                </Box>
                <Box>
                  <Text fontSize="lg">Ricno Logistics</Text>
                  <Text>Premium</Text>
                </Box>
              </Flex>
            </Box>
          </ProfileCard>
        </ProfileContainer>
      </Container>
    </Layout>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin: 2rem 0;
`;

const Profile = styled.div`
  width: 70%;
  box-shadow: ${(props) => props.theme.shadows.shadow1};
  padding: 20px;
  background: #fff;
  border-radius: 6px;

  .cardHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cardImage {
    display: flex;
    align-items: center;
    margin: 2rem 0;

    .userDetails {
      margin-left: 2rem;

      ul li {
        margin-top: 1rem;
        .title {
          font-weight: ${(props) => props.theme.fontWeight.bold};
          color: ${(props) => props.theme.colors.grey};
        }
      }
    }
    .imgCard {
      border: solid 3px red;
      object-fit: inherit;
      border-radius: ${(props) => props.theme.radius};
      height: 206px;
    }
  }

  .bankDetails {
    border-top: solid 1px #ccc;
  }

  .bankDetails ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    /* text-align: center; */

    .title {
      font-weight: ${(props) => props.theme.fontWeight.bold};
      color: ${(props) => props.theme.colors.grey};
    }
  }

  .requestedAmount {
    margin: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
      margin-right: 2rem;
      color: ${(props) => props.theme.colors.secondary};
    }
    h2 {
      font-size: ${(props) => props.theme.fontSize.medium};
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }
  }

  .actionsBtns {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
      margin-right: 1rem;
    }
  }
`;

const ProfileCard = styled.div`
  width: 27%;
  padding: 20px;
  box-shadow: ${(props) => props.theme.shadows.shadow1};
  background: #fff;
  border-radius: ${(props) => props.theme.radius};

  .cardHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .userHead {
    margin-top: 2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .head {
      display: flex;
      align-items: center;

      img {
        margin-right: 0.6rem;
      }
    }

    .icon {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  .loation {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    .icon {
      color: ${(props) => props.theme.colors.secondary};
      margin-right: 1rem;
    }
  }

  .contactInfo {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;

    .listBody {
      li {
        display: flex;
        align-items: center;
        margin-top: 1rem;

        p {
          margin-right: 1rem;
        }
      }
    }
  }

  .userCard {
    border-bottom: 1px solid #eee;
    padding: 1rem 0;

    ul {
      margin-top: 1rem;

      li {
        margin-top: 1rem;
      }
    }
  }

  .logoCard {
    padding: 1rem 0;
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
      height: 50px;
      width: 60px;
      padding: 10px;
      border-radius: 6px;
      box-shadow: ${(props) => props.theme.shadows.shadow1};
    }

    p {
      color: ${(props) => props.theme.colors.grey};
    }
  }
`;

const Title = styled.h3`
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export async function getServerSideProps({ req, query }) {
  const { token } = parseCookies(req);
  const { id } = query;

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
    `https://alpha.ricnoslogistics.com/api/admin/withdrawal_request/${id}`,
    requestOptions
  );

  const result = await response.json();

  const res = await fetch(`${API_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  const userData = await res.json()

  return {
    props: {
      data: result.data.withdrawal_request,
      token,
      user: userData.data.user
    },
  };
}
