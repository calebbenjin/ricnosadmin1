import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiPrinter } from 'react-icons/bi'
import { FaListUl } from 'react-icons/fa'
import Button from '@/components/atoms/Button'
import ButtonGreen from '@/components/atoms/ButtonGreen'
import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import DataTable from '@/components/atoms/DataTable'
import Layout from '@/components/organisms/Layout'
import styled from 'styled-components'
import { useRouter } from 'next/router'

export default function OrdersPage() {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['A']);

  const data = [
    { id: 1, trackNo: "QH46", date: "july 2020", item: "Bags", from: "Lagos Leki", to: "Port harcourt", status: "cancelled", price: 2000 },
    { id: 2, trackNo: "QH45", date: "march 2020", item: "Bags", from: "Lagos Leki", to: "Port harcourt", status: "Completed", price: 2000 },
    { id: 3, trackNo: "QH44", date: "july 2020", item: "Bags", from: "Lagos Leki", to: "Port harcourt", status: "Completed", price: 2000 },
    { id: 4,trackNo: "QH43", date: "july 2020", item: "Bags", from: "Lagos Leki", to: "Port harcourt", status: "cancelled", price: 2000 },
    { id: 5, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Warri", to: "Lagos", status: "pending", price: 2000 },
    { id: 6, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Warri", to: "Lagos", status: "Active", price: 2000 },
    { id: 7, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Warri", to: "Lagos", status: "pending", price: 2000 },
    { id: 8, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Kanu", to: "Calabar", status: "Active", price: 2000 },
    { id: 9, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Owerri", to: "Lagos", status: "pending", price: 2000 },
    { id: 10, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Jos", to: "Kastina", status: "Active", price: 2000 },
  ];

  const router = useRouter()

  return (
    <Layout>
      <Container>
        <Heading title="Offline Orders" icon={<FaListUl />} />
        
      </Container>
    </Layout>
  )
}