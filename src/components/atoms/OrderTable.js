import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import { Heading } from '@chakra-ui/react';

export default function OrdersTable({ data }) {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['A']);

  return (
    <>
      <div className="container flexContainer">
        <Heading size="lg" mt="" mb="10">
          My Orders
        </Heading>
        <input
          style={{ background: '#fff !important', width: '50%;' }}
          type="text"
          placeholder="Search for Items"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <DataTable data={data} />
    </>
  );
}
