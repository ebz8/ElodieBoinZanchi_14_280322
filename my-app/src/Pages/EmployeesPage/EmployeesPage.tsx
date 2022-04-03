import PageContainer from "../../containers/PageContainer/PageContainer"
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable"

function EmployeesPage() {
  return (
    <PageContainer>
        <div>
          <EmployeesTable />
        </div>
    </PageContainer>
  )
}

export default EmployeesPage