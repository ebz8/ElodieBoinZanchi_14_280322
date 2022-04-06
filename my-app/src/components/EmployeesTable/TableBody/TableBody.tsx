import "./TableBody.scss"

import { useTable, useGlobalFilter, Column } from "react-table"
import TableFilter from "../TableFilter/TableFilter"

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

function TableBody<T extends { id: string }>({
  columns,
  data
}: TableProps<T>): React.ReactElement {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter
  } = useTable<T>(
    {
      columns,
      data
    },
    useGlobalFilter
  )


  return (
    <>
    {/* <TableFilter setFilter={setGlobalFilter}/> */}
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px black",
                  color: "black",
                  fontWeight: "bold",
                }}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                return (
                  <td {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                    }}>
                    {cell.render("Cell")}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default TableBody
