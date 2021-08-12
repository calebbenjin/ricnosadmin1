import React, { useMemo, useState, useEffect } from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiPrinter } from 'react-icons/bi'
import { VscListFilter } from 'react-icons/vsc'
import { RiArrowLeftRightFill } from 'react-icons/ri'
import Button from '../components/atoms/Button'
import Container from '../components/atoms/Container'
import Table from '../components/atoms/Table'
import Heading from '../components/atoms/Heading'
import Layout from '../components/organisms/Layout'
import styled from 'styled-components'

export default function OrdersPage() {
  const data = [
    { firstName: "jane", lastName: "doe", age: 20 },
    { firstName: "john", lastName: "smith", age: 21 }
  ];
  
  const columns = [
    {
      Header: "Name",
      columns: [
        {
          Header: "First Name",
          accessor: "firstName",
          sortType: "basic",
          filter: "text"
        },
        {
          Header: "Last Name",
          accessor: "lastName",
          sortType: "basic",
          filter: "text"
        }
      ]
    },
    {
      Header: "Other Info",
      columns: [
        {
          Header: "Age",
          accessor: "age",
          sortType: "basic",
          filter: "text"
        }
      ]
    }
  ];

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
              {' '}
              <BsPlus className='iconSize' /> Create Order
            </Button>
          </BtnContainer>
        </Heading>

        <SearchHeader>
          <input type='text' placeholder='Search for orders' />
        </SearchHeader>
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
        <SubHeader>
          <h3>Showing 10 - 20 of 100 results</h3>
          <h3>Results per page: 10</h3>
        </SubHeader>

        <h1>Results per page: 10</h1>
        <Table columns={columns} data={data} />
      </Container>
    </Layout>
  )
}

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  input {
    padding: 10px;
    background: #fff;
    border-radius: 6px;
    width: 50%;
    border: solid 1px #333;
  }
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
