import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  Select,
  Flex,
  Stack,
  Button,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";
import { API_URL } from "@/lib/index";
import { BiPrinter, BiSearchAlt } from "react-icons/bi";
// import * as dayjs from 'dayjs';
import { ToastContainer } from "react-toastify";
import NewCustomerModal from "@/components/organisms/NewCustomerModal";
import NewStaffModal from "@/components/organisms/NewStaffModal";
import NewAdminModal from "@/components/organisms/NewAdminModal";
import Container from "@/components/atoms/Container";
import Heading from "@/components/atoms/Heading";
import Layout from "@/components/organisms/Layout";
import styled from "styled-components";
import Link from "next/link";
import { parseCookies } from "@/helpers/index";
import DataGrid from "@/components/atoms/DataGrid";
import { UsersTableFilter } from "@/components/atoms/TableFilter";
import { UsersColumns } from "@/helpers/dataColumns";
import BlankMessageLayout from "@/components/atoms/BlankMessageLayout";
import router from "next/router";

export default function UsersPage({ data, branches, token, user }) {
  const [usersData, setUsersData] = useState([
    ...data.riders,
    ...data.users,
    ...data.staffs,
  ]);

  return (
    <Layout data={user}>
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
            {user.role === "1" && (
              <NewStaffModal data={branches} token={token} />
            )}
            {user.role === "1" && <NewAdminModal token={token} />}
          </BtnContainer>
        </Heading>
      </Container>

      {usersData.length > 0 ? (
        <DataGrid
          FilterComponent={UsersTableFilter}
          tableColumns={UsersColumns}
          tableData={usersData}
          callback={(id, department) => {
            department === "Logistics"
              ? router.push(`/admin/users/rider/${id}`)
              : department === "User"
              ? router.push(`/admin/users/customer/${id}`)
              : router.push(`/admin/users/staff/${id}`);
          }}
        />
      ) : (
        <BlankMessageLayout
          error={true}
          message="No quote requests available"
        />
      )}
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
    "https://alpha.ricnoslogistics.com/api/admin/all_users",
    requestOptions
  );

  const responseBranch = await fetch(
    "https://alpha.ricnoslogistics.com/api/admin/branches",
    requestOptions
  );

  const result = await response.json();
  const resultBranch = await responseBranch.json();

  const res = await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const userData = await res.json();

  return {
    props: {
      data: result.data,
      branches: resultBranch.data.branches,
      token,
      user: userData.data.user,
    },
  };
}
