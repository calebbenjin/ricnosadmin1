import React, { useState, useEffect } from "react";
import { API_URL } from "@/lib/index";
import { FaListUl } from "react-icons/fa";
import { BiPrinter, BiSearchAlt } from "react-icons/bi";
import Container from "@/components/atoms/Container";
import Heading from "@/components/atoms/Heading";
import FinanceTable from "@/components/atoms/FinanceTable";
import Layout from "@/components/organisms/Layout";
import { parseCookies } from "@/helpers/index";
import {
  Flex,
  Stack,
  Button,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import DataGrid from "@/components/atoms/DataGrid";
import BlankMessageLayout from "@/components/atoms/BlankMessageLayout";
import { FinanceTableFilter } from "@/components/atoms/TableFilter";
import { FinanceColumns } from "@/helpers/dataColumns";
import router from "next/router";

export default function FinancePage({ data, user }) {
  return (
    <Layout data={user}>
      <Container>
        <Heading title="My Finance" icon={<FaListUl />} />
      </Container>
      {data.length > 0 ? (
        <DataGrid
          FilterComponent={FinanceTableFilter}
          tableColumns={FinanceColumns}
          tableData={data}
          callback={(id) => router.push(`/admin/finance/${id}`)}
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
    "https://alpha.ricnoslogistics.com/api/admin/withdrawal_requests",
    requestOptions
  );

  const result = await response.json();

  const res = await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const userData = await res.json();

  return {
    props: {
      data: result.data.withdrawal_requests,
      user: userData.data.user,
    },
  };
}
