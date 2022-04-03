import "./EmployeesTable.scss"
import { useMemo, useState, useEffect } from "react"
import { useTable, TableOptions, Column } from "react-table"

// type CustomColumns = {
//   firstName: string
//   lastName: string
//   birthDate: string
//   startDate: string
//   department: string
//   street: string
//   city: string
//   state: string
//   zipCode: string
// }

function EmployeesTable() {
  const data = [
    {
      firstName: "Michael",
      lastName: "Scott",
      birthDate: "28/10/1960",
      startDate: "02/01/2022",
      department: "Sales",
      street: "Example",
      city: "Scranton",
      state: "IL",
      zipCode: "17",
    },
    {
      firstName: "Oscar",
      lastName: "Martinez",
      birthDate: "28/08/1980",
      startDate: "02/01/2002",
      department: "Sales",
      street: "Example",
      city: "Scranton",
      state: "IL",
      zipCode: "17",
    },
  ]

  const columns: Column<{
    firstName: string
    lastName: string
    birthDate: string
    startDate: string
    department: string
    street: string
    city: string
    state: string
    zipCode: string
  }>[] = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Birth Date",
        accessor: "birthDate",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ],
    []
  )

  const tableInstance = useTable({ columns, data })
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  //   const [data, setData] = useState([])

  //   useEffect(() => {
  //     setData(currentEmployees)
  //   }, [currentEmployees])

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px black",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
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
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip"
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default EmployeesTable
