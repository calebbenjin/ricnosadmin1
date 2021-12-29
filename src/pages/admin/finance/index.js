import React, { useState } from 'react'
import { FaListUl } from 'react-icons/fa'
import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import FinanceTable from '@/components/atoms/FinanceTable'
import Layout from '@/components/organisms/Layout'

export default function FinancePage() {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['A']);

  const data = [
    { id: 1, fullname: "Mark Golden", department: "Agent", requestAmount: 300, date: "May 2020", status: "active" },
    { id: 2, fullname: "Rose Jerry", department: "Rider", requestAmount: 300, date: "july 2020", status: "cancelled" },
    { id: 3, fullname: "Mark Welder", department: "Agent", requestAmount: 300, date: "May 2020", status: "panding" },
    { id: 4, fullname: "Kraken Loser", department: "Agent", requestAmount: 300, date: "May 2020", status: "paid" },
    { id: 5, fullname: "Mark Golden", department: "Agent", requestAmount: 300, date: "May 2020", status: "active" },
    { id: 6, fullname: "Kraken Loser", department: "Agent", requestAmount: 300, date: "May 2020", status: "paid" },
    { id: 7, fullname: "Mark Welder", department: "Agent", requestAmount: 300, date: "May 2020", status: "panding" },
    { id: 8, fullname: "Rose Jerry", department: "Rider", requestAmount: 300, date: "july 2020", status: "cancelled" },
  ];

  return (
    <Layout>
      <Container>
        <Heading title="My Finance" icon={<FaListUl />} />
        <input
            style={{ background: '#fff !important', width: '50%;' }}
            type="text"
            placeholder="Search for Items"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
      </Container>
        <FinanceTable data={data} />
    </Layout>
  )
}
