import React, { useState } from 'react'
import { FaListUl } from 'react-icons/fa'
import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import QuoteTable from '@/components/atoms/QuoteTable'
import Layout from '@/components/organisms/Layout'

export default function QuoteRequestPage() {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['A']);

  const data = [
    { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
    { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
    { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
    { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
    { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
    { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
    { id: 1, fullname: "Mark Golden", quoteNumber: "QR12397", email: "example@gmail.com", phone: '+776769799987', date: "May 2020" },
  ];

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
  )
}
