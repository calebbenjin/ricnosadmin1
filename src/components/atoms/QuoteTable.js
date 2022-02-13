import React from 'react';
import Link from 'next/link';
import * as dayjs from 'dayjs';

export default function QuoteTable({ data }) {
  const columns = data[0] && Object.keys(data[0]);

  return (
    <div className="resTable">
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th data-label="Date" scope="col"></th>
            {/* <th data-label='Date' scope='col'>
              Quote Number
            </th> */}
            <th data-label="Date" scope="col">
              Fullname
            </th>
            <th data-label="Date" scope="col">
              Email
            </th>
            <th data-label="From" scope="col">
              Phone Number
            </th>
            <th data-label="From" scope="col">
              Date
            </th>
            <th data-label="Items" scope="col">
              View
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((quote) => (
            <tr key={quote.id}>
              <td></td>
              <td>{quote.quoteNumber}</td>
              <td>{quote?.name}</td>
              <td>{quote?.email}</td>
              <td>{quote?.phone}</td>
              <td>{dayjs(quote.created_at).format('DD/MM/YYYY')}</td>
              <td>
                <Link href={`quote/${quote.id}`}>
                  <a>View</a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
