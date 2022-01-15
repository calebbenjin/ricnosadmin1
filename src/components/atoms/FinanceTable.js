import React from 'react';
import Link from 'next/link';

export default function FinanceTable({ data }) {
  const columns = data[0] && Object.keys(data[0]);

  return (
    <div className="resTable">
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th data-label="Date" scope="col"></th>
            <th data-label="Date" scope="col">
              Fullname
            </th>
            <th data-label="Track No" scope="col">
              Department
            </th>
            <th data-label="Name" scope="col">
              Request Amount
            </th>
            <th data-label="From" scope="col">
              Date
            </th>
            <th data-label="To" scope="col">
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
              <td>{user.full_name}</td>
              <td>{user.department}</td>
              <td>{user.amount}</td>
              <td>{user.date}</td>

              <td
                style={{
                  color:
                    user.status === 'pending'
                      ? 'yellow'
                      : user.status === 'declined'
                      ? 'red'
                      : 'green',
                }}
              >
                {user.status}
              </td>
              <td>
                <Link href={`finance/${user.id}`}>
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
