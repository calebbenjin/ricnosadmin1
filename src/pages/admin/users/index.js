import React, { useState, useEffect, useContext } from 'react';
import { Grid, Select, Flex, Stack, Button, Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa';
import { BiPrinter, BiSearchAlt } from 'react-icons/bi';
import { ToastContainer } from 'react-toastify';
import NewCustomerModal from '@/components/organisms/NewCustomerModal';
import NewStaffModal from '@/components/organisms/NewStaffModal';
import NewAdminModal from '@/components/organisms/NewAdminModal';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Heading';
import Layout from '@/components/organisms/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import { parseCookies } from '@/helpers/index';
import AuthContext from '@/context/AuthContext';

export default function UsersPage({ data, branches, token }) {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState('All');
  const [usersData, setUsersData] = useState([
    ...data.riders,
    ...data.users,
    ...data.staffs,
  ]);

  const { user } = useContext(AuthContext);

  const columns = data[0] && Object.keys(data[0]);

  useEffect(() => {
    if (filterBtn === 'All') {
      setUsersData([...data.riders, ...data.users, ...data.staffs]);
    } else if (filterBtn === 'User') {
      setUsersData([...data.users]);
    } else if (filterBtn === 'Logistics') {
      setUsersData([...data.riders]);
    } else if (filterBtn === 'Deskstop officer') {
      setUsersData([...data.staffs]);
    }
  }, [filterBtn]);

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
        <Heading title="Users" icon={<FaUsers />}>
          <BtnContainer className="btnContainer">
            <NewCustomerModal token={token} />
            {user.role === '1' && (
              <NewStaffModal data={branches} token={token} />
            )}
            {user.role === '1' && <NewAdminModal token={token} />}
          </BtnContainer>
        </Heading>
        <Flex>
          <InputGroup mr="4" bg="white">
            <InputLeftElement pointerEvents='none'>
            <BiSearchAlt style={{ fontSize: "1.2rem", color: "gray"}} />
            </InputLeftElement>
            <Input type='text' _focus={{paddingLeft: "2.2rem"}} value={filterBtn} onChange={(e) => setFilterBtn(e.target.value)} placeholder='Search' />
          </InputGroup>
          <Stack spacing={0} direction='row' align='center'>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('all')}>All</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('User')}>Customers</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('Logistic')}>Riders</Button>
            <Button borderRadius='0' variant='outline' bg="white" leftIcon={<BiPrinter />} onClick={() => setFilterBtn('Deskstop officer')}>
              Staff
            </Button>
          </Stack>
        </Flex>
      </Container>

      <Grid p={5} gridTemplateColumns="repeat(3, 1fr)" gap="5">
        <Select
          value={filterBtn}
          onChange={(e) => setFilterBtn(e.target.value)}
          placeholder="ALL USERS"
        >
          <option value="User">CUSTOMERS</option>
          <option value="Logistics">RIDERS</option>
          <option value="Deskstop officer">STAFFS</option>
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

      <div className="resTable">
        <table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th data-label="Date" scope="col"></th>
              <th data-label="Date" scope="col">
                Fullname
              </th>
              <th data-label="Date" scope="col">
                Department
              </th>
              <th data-label="Track No" scope="col">
                Email
              </th>
              <th data-label="Name" scope="col">
                RegDate
              </th>
              <th data-label="From" scope="col">
                Last Activity
              </th>
              <th data-label="Price" scope="col">
                Status
              </th>
              <th data-label="Items" scope="col">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.id}>
                <td></td>
                <td>{user.full_name}</td>
                <td>{user.department}</td>
                <td>{user.email}</td>
                <td>{user.reg_date}</td>
                <td>{user.last_activity}</td>
                {user.status === 'active' ? (
                  <td style={{ color: 'green' }}>{user.status}</td>
                ) : (
                  <td style={{ color: 'red' }}>{user.status}</td>
                )}
                <td>
                  <Link
                    href={
                      user.department === 'Logistics'
                        ? `users/rider/${user.id}`
                        : user.department === 'User'
                        ? `users/customer/${user.id}`
                        : `users/staff/${user.id}`
                    }
                  >
                    <a>View</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
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
    'https://alpha.ricnoslogistics.com/api/admin/all_users',
    requestOptions
  );

  const responseBranch = await fetch(
    'https://alpha.ricnoslogistics.com/api/admin/branches',
    requestOptions
  );

  const result = await response.json();
  const resultBranch = await responseBranch.json();

  return {
    props: {
      data: result.data,
      branches: resultBranch.data.branches,
      token,
    },
  };
}
