import React from 'react'
import Link from 'next/link'

export default function FinanceTable({ data }) {
  const columns = data[0] && Object.keys(data[0])

  return (
    <div className='resTable'>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th data-label='Date' scope='col'></th>
            <th data-label='Date' scope='col'>
              Fullname
            </th>
            <th data-label='Track No' scope='col'>
              Department
            </th>
            <th data-label='Name' scope='col'>
              Request Amount
            </th>
            <th data-label='From' scope='col'>
              Date
            </th>
            <th data-label='To' scope='col'>
              Status
            </th>
            <th data-label='Items' scope='col'>
              View
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((users) => (
            <tr key={users.id}>
              <td></td>
              <td>{users.fullname}</td>
              <td>{users.department}</td>
              <td>{users.requestAmount}</td>
              <td>{users.date}</td>
              {users.status === 'pending' ? (
                <td style={{ color: 'darkyellow' }}>{users.status}</td>
              ) : users.status === 'cancelled' ? (
                <td style={{ color: 'red' }}>{users.status}</td>
              ) : (
                <td style={{ color: 'green' }}>{users.status}</td>
              )}
              <td>
                <Link href={`orders/${users.id}`}>
                  <a>View</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
