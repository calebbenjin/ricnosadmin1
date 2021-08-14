import React, { useState, useMemo, useEffect } from 'react'
import DefaultColumnFilter from './DefaultColumFilter'
import GlobalFilter from './GlobalFilters'
import { useTable, useFilters, useSortBy, useGlobalFilter } from 'react-table'
import styled from 'styled-components'
import Link from 'next/link'

export default function Table({ data, columns }) {
  const [tableData, setTableData] = useState([])

  const filterTypes = useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filterTypes((row) => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  )

  return (
    <Container>
      <div
        colSpan={visibleColumns.length}
        style={{
          textAlign: 'left',
        }}
      >
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <TableContainer {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* <div>{column.canFilter ? column.render("Filter") : null}</div> */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            console.log(row.cells[0].row)
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </TableContainer>
    </Container>
  )
}

const TableContainer = styled.table`
  width: 100%;
  background: #fff;
  margin: 2rem 0;
  text-align: center;
  height: 100vh;
  overflow: scroll;

  thead {
    box-shadow: ${(props) => props.theme.shadows.shadow1};
    tr th {
      padding-bottom: 20px;
    }
  }

  tbody {
    tr {
      border-bottom: solid 1px #ccc;
      td {
        padding: 1rem 0;
      }
    }

    td {
      align-items: justify;
      &:nth-child(1) {
        font-weight: ${(props) => props.theme.fontWeight.bold};
      }
    }
  }
`

const Container = styled.div`
  border-radius: 6px;
`
