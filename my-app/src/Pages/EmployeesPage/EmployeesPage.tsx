import PageContainer from "../../containers/PageContainer/PageContainer"
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable"


function EmployeesPage() {
  return (
    <PageContainer title="Employees">
        <>
          <EmployeesTable />
        </>
    </PageContainer>
  )
}

export default EmployeesPage