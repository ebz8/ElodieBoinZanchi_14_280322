import TableHeader from "../../components/Table/TableHeader/TableHeader"

function TableContainer({children}: any) {
    // const { loading } = useSelector((state) => state.employees)

  return (
    <div className="employees-table">
        {/* header */}
        {children}
        {/* footer */}
    </div>
  )
}

export default TableContainer
