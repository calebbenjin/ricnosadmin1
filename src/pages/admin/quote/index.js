import React, { useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Heading';
import QuoteTable from '@/components/atoms/QuoteTable';
import Layout from '@/components/organisms/Layout';
import { parseCookies } from '@/helpers/index';

export default function QuoteRequestPage({ data }) {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['A']);

  // const data = [
  //   { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  //   { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  //   { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  //   { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  //   { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  //   { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  //   { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  // ];

  return (
    <Layout>
      <Container>
        <Heading title="Quote Requests" icon={<FaListUl />} />

        <input
          style={{ background: '#fff !important', width: '50%;' }}
          type="text"
          placeholder="Search for Items"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </Container>

      <QuoteTable data={data} />
    </Layout>
  );
}

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
    'https://alpha.ricnoslogistics.com/api/admin/quote_requests',
    requestOptions
  );

  const result = await response.json();

  return {
    props: {
      data: result.data.quotes,
    },
  };
}
