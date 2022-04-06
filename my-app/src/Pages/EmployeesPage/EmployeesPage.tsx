import PageContainer from "../../containers/PageContainer/PageContainer"
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable"
import TableFilter from "../../components/EmployeesTable/TableFilter/TableFilter"

function EmployeesPage() {
  return (
    <PageContainer>
        <div>
          {/* <TableFilter /> */}
          <EmployeesTable />
        </div>
    </PageContainer>
  )
}

export default EmployeesPage