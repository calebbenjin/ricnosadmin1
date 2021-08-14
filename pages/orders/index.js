import React, { useMemo, useState, useEffect } from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiPrinter } from 'react-icons/bi'
import { VscListFilter } from 'react-icons/vsc'
import { RiArrowLeftRightFill } from 'react-icons/ri'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Table from '../../components/atoms/Table'
import Heading from '../../components/atoms/Heading'
import Layout from '../../components/organisms/Layout'
import styled from 'styled-components'
import { useRouter } from 'next/router'

export default function OrdersPage() {

  const data = [
    { id: 1, trackNo: "QH46", date: "july 2020", item: "Bags", from: "Lagos Leki", to: "Port harcourt", status: "Active", price: 2000 },
    { id: 2, trackNo: "QH45", date: "march 2020", item: "Bags", from: "Lagos Leki", to: "Port harcourt", status: "Completed", price: 2000 },
    { id: 3, trackNo: "QH44", date: "july 2020", item: "Bags", from: "Lagos Leki", to: "Port harcourt", status: "Completed", price: 2000 },
    { id: 4,trackNo: "QH43", date: "july 2020", item: "Bags", from: "Lagos Leki", to: "Port harcourt", status: "Cancelled", price: 2000 },
    { id: 5, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Warri", to: "Lagos", status: "Active", price: 2000 },
    { id: 6, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Warri", to: "Lagos", status: "Active", price: 2000 },
    { id: 7, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Warri", to: "Lagos", status: "Active", price: 2000 },
    { id: 8, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Kanu", to: "Calabar", status: "Active", price: 2000 },
    { id: 9, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Owerri", to: "Lagos", status: "Active", price: 2000 },
    { id: 10, trackNo: "QH42", date: "july 2020", item: "Bags", from: "Jos", to: "Kastina", status: "Active", price: 2000 },
  ];
  
  const columns = [
    {
      Header: ".",
      columns: [
        {
          Header: "Track No",
          accessor: "trackNo",
          sortType: "basic",
          filter: "text"
        },
        {
          Header: "Date",
          accessor: "date",
          sortType: "basic",
          filter: "text",
        },
        {
          Header: "Item",
          accessor: "item",
          sortType: "basic",
          filter: "text"
        },
        {
          Header: "From",
          accessor: "from",
          sortType: "basic",
          filter: "text"
        },
        {
          Header: "To",
          accessor: "to",
          sortType: "basic",
          filter: "text"
        },
        {
          Header: "Status",
          accessor: "status",
          sortType: "basic",
          filter: "text"
        },
        {
          Header: "Price",
          accessor: "price",
          sortType: "basic",
          filter: "text"
        },
        {
          Header: "View",
          // Cell: ({ cell }) => (
          //   <button value={cell.id} onClick={() => handleRoute()}>
          //     view {cell.id}
          //   </button>
          // )
        }
      ]
    },
    
  ];

  const router = useRouter()

  const handleRoute = () => {

    const { id } = router.query

    alert(`Post: ${id}`)
  }

  return (
    <Layout>
      <Container>
        <Heading>
          <h1>Orders Page</h1>
          <BtnContainer className='btnContainer'>
            <Button>
              <BiPrinter /> Print
            </Button>
            <Button className='btnGreen'>
              <BsPlus className='iconSize' /> Create Order
            </Button>
          </BtnContainer>
        </Heading>
      </Container>
        <FliterContainer>
          <button>
            <VscListFilter className='icon' /> All
          </button>
          <button>
            <RiArrowLeftRightFill className='icon' /> Pickups
          </button>
          <button>
            <RiArrowLeftRightFill className='icon' /> Delivery
          </button>
        </FliterContainer>
        {/* <Table columns={columns} data={data} /> */}
    </Layout>
  )
}

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`

const FliterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  background: #fff;
  text-transform: uppercase;
  width: 100%;
  box-shadow: ${(props) => props.theme.shadows.shadow1};
  border-radius: 6px;

  button {
    padding: 20px 30px;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    display: flex;
    align-items: center;
    color: #333;
    transition: ${(props) => props.theme.transition};

    .icon {
      font-size: 1.2rem;
      margin-right: 5px;
    }

    &:hover {
      color: red;
    }
  }
`

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`
