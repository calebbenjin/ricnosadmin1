import { API_URL } from "@/lib/index";
import Layout from "@/components/organisms/Layout";

import { parseCookies } from "@/helpers/index";
import BlankMessageLayout from "@/components/atoms/BlankMessageLayout";
import DataGrid from "@/components/atoms/DataGrid";
import { QuoteTableFilter } from "@/components/atoms/TableFilter";
import { QuoteColumns } from "@/helpers/dataColumns";
import router from "next/router";

export default function QuoteRequestPage({ data, user }) {
  return (
    <Layout data={user}>
      {data.length > 0 ? (
        <DataGrid
          FilterComponent={QuoteTableFilter}
          tableColumns={QuoteColumns}
          tableData={data}
          tableHeading="Quote Requests"
          callback={(id) => router.push(`/admin/quote/${id}`)}
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
    "https://alpha.ricnoslogistics.com/api/admin/quote_requests",
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
      data: result.data.quotes,
      user: userData.data.user,
    },
  };
}
