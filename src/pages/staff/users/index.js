import React, { useState } from 'react'
import { FaListUl, FaUsers } from 'react-icons/fa'
import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'
import Layout from '@/components/organisms/Layout2'
import styled from 'styled-components'
import Link from "next/link"


const data = [
  { id: 1, fullname: "John Deo", regDate: "july 2020", email: "johndeo@gmail.com", department: "rider", lastActivity: "5hrs 10mins", status: "active"},
  { id: 2, fullname: "Lilian Koose", regDate: "july 2020", email: "liliankoose@gmail.com", department: "agent", lastActivity: "5hrs 10mins", status: "deactivated"},
  { id: 2, fullname: "Mark Leo", regDate: "july 2020", email: "markleo@gmail.com", department: "admin", lastActivity: "5hrs 10mins", status: "active"},
  { id: 2, fullname: "Rose Kalin", regDate: "july 2020", email: "rosekalin@gmail.com", department: "user", lastActivity: "5hrs 10mins", status: "deactivated"},
];

export default function UsersPage() {
  const [q, setQ] = useState('');
  const [filterBtn, setFilterBtn] = useState(['A']);
  const columns = data[0] && Object.keys(data[0]);

  return (
    <Layout>
      <Container>
        <Heading title="Users" icon={<FaUsers />} />

        <input
            style={{ background: '#fff !important', width: '50%;' }}
            type="text"
            placeholder="Search for Items"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
      </Container>

      <div className="resTable">
        <table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th data-label="Date" scope="col"></th>
              <th data-label="Date" scope="col">
                Fullname
              </th>
              <th data-label="Date" scope="col">
                Department
              </th>
              <th data-label="Track No" scope="col">
                Email
              </th>
              <th data-label="Name" scope="col">
                RegDate
              </th>
              <th data-label="From" scope="col">
                Last Activity
              </th>
              <th data-label="Price" scope="col">
                Status
              </th>
              <th data-label="Items" scope="col">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td></td>
                <td>{user.fullname}</td>
                <td>{user.department}</td>
                <td>{user.email}</td>
                <td>{user.regDate}</td>
                <td>{user.lastActivity}</td>
                {user.status === "active" ? <td style={{color: "green"}}>{user.status}</td> : <td style={{color: "red"}}>{user.status}</td> }
                <td>
                  <Link href={`users/${user.id}`}>
                    <a>View</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`