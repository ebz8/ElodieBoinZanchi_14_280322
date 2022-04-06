import { ReactComponent as SortIcon } from "../../../assets/img/icons/sort-solid.svg"
import { ReactComponent as SortIconDown } from "../../../assets/img/icons/sort-down-solid.svg"
import { ReactComponent as SortIconUp } from "../../../assets/img/icons/sort-up-solid.svg"

function TableBody({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  prepareRow,
  page,
}) {
  return (
    <table {...getTableProps()} className="table-body">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="table-columns-headers">
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{
                  borderBottom: "solid 3px black",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <SortIconDown />
                    ) : (
                      <SortIconUp />
                    )
                  ) : (
                    <SortIcon />
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row)

          return (
            <tr {...row.getRowProps()} className="table-row">
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()} className="table-cell">{cell.render("Cell")}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableBody
