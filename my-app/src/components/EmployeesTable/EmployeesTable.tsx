import "./EmployeesTable.scss"

import { useMemo } from "react"
import {
  useGlobalFilter,
  useTable,
  useSortBy,
  usePagination,
} from "react-table"

import TableContainer from "../../containers/TableContainer/TableContainer"
import TableBody from "../Table/TableBody/TableBody"
import TableHeader from "../Table/TableHeader/TableHeader"
import TableFooter from "../Table/TableFooter/TableFooter"

import { EmployeesAtom } from "../../store/store"
import { useAtom } from "jotai"

function EmployeesTable() {
  // get employees list from Jotai store
  const [data] = useAtom(EmployeesAtom)
  // config react-table
  const columns = useMemo(
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
  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    rows,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    gotoPage,
    pageOptions,
    setPageSize,
    pageCount,
    state: { pageIndex, pageSize },
  } = tableInstance


  return (
    <TableContainer className="employees-table"> 
          <TableHeader
            pageSize={pageSize}
            setPageSize={setPageSize}
            setGlobalFilter={setGlobalFilter}
          />
          <TableBody
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            prepareRow={prepareRow}
            page={page}
          />
          <TableFooter
            pageIndex={pageIndex}
            pageOptions={pageOptions}
            rows={rows}
            page={page}
            previousPage={previousPage}
            canPreviousPage={canPreviousPage}
            nextPage={nextPage}
            canNextPage={canNextPage}
            gotoPage={gotoPage}
            pageCount={pageCount}
          />
    </TableContainer>
  )
}

export default EmployeesTable
