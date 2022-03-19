import React, { useState, useEffect } from "react";
import { API_URL } from "@/lib/index";
import { BsPlus } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import Container from "@/components/atoms/Container";
import Heading from "@/components/atoms/Heading";
import Layout from "@/components/organisms/Layout";
import { Stack, Button, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { parseCookies } from "@/helpers/index";
import { adminOrders, staffOrders } from "@/helpers/orders";
import DataGrid from "@/components/atoms/DataGrid";
import BlankMessageLayout from "@/components/atoms/BlankMessageLayout";
import { OrderTableFilter } from "@/components/atoms/TableFilter";
import { OrderColumns } from "@/helpers/dataColumns";
import router from "next/router";

export default function OrdersPage({ token, user }) {
  const [orderData, setOrderData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (user.role === "1") {
      adminOrders(token).then((data) => {
        setOrderData(data);
        setLoading(false);
      });
    } else if (user.role === "2") {
      staffOrders(token).then((data) => {
        setOrderData(data);
        setLoading(false);
      });
    }
  }, []);

  return (
    <Layout data={user}>
      <Container>
        <Heading title="My Orders" icon={<FaListUl />}>
          <Stack spacing={4} direction="row" align="center">
            <Link href="/admin/offline/">
              <Button type="submit" colorScheme="green" leftIcon={<BsPlus />}>
                Create Order
              </Button>
            </Link>
          </Stack>
        </Heading>
      </Container>
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner size="xl" color="red.500" />
        </div>
      ) : orderData.length > 0 ? (
        <DataGrid
          FilterComponent={OrderTableFilter}
          tableColumns={OrderColumns}
          tableData={orderData}
          callback={(id) => router.push(`orders/${id}`)}
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

  const res = await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return {
    props: {
      user: data.data.user,
      token,
    },
  };
}
