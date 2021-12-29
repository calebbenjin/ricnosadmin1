import React from 'react';
import Link from "next/link"

export default function DataTable({ data }) {
  const columns = data[0] && Object.keys(data[0]);

  return (
    <div className="resTable">
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th data-label="Date" scope="col"></th>
            <th data-label="Date" scope="col">
              Date
            </th>
            <th data-label="Track No" scope="col">
              Track No
            </th>
            <th data-label="Name" scope="col">
              Name
            </th>
            <th data-label="From" scope="col">
              From
            </th>
            <th data-label="To" scope="col">
              To
            </th>
            <th data-label="Price" scope="col">
              Status
            </th>
            <th data-label="Price" scope="col">
              Price
            </th>
            <th data-label="Items" scope="col">
              View
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.id}>
              <td></td>
              <td>{order.date}</td>
              <td>{order.trackNo}</td>
              <td>{order.item}</td>
              <td>{order.from}</td>
              <td>{order.to}</td>
              {order.status === "pending" ? <td style={{color: "darkyellow"}}>{order.status}</td> : order.status === "cancelled" ? <td style={{color: "red"}}>{order.status}</td> : <td style={{color: "green"}}>{order.status}</td> }
              <td>NGN{order.price}</td>
              <td>
                <Link href={`orders/${order.id}`}>
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
