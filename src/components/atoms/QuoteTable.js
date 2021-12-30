import React from 'react'
import Link from 'next/link'

export default function QuoteTable({ data }) {
  const columns = data[0] && Object.keys(data[0])

  return (
    <div className='resTable'>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th data-label='Date' scope='col'></th>
            <th data-label='Date' scope='col'>
              Quote Number
            </th>
            <th data-label='Date' scope='col'>
              Fullname
            </th>
            <th data-label='Date' scope='col'>
              Email
            </th>
            <th data-label='From' scope='col'>
              Phone Number
            </th>
            <th data-label='From' scope='col'>
              Date
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
              <td>{users.quoteNumber}</td>
              <td>{users.fullname}</td>
              <td>{users.email}</td>
              <td>{users.phone}</td>
              <td>{users.date}</td>
              <td>
                <Link href={`quote/${users.id}`}>
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
