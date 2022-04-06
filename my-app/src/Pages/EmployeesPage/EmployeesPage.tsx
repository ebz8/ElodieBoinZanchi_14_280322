import PageContainer from "../../containers/PageContainer/PageContainer"
import EmployeesTable from "../../components/EmployeesTable/EmployeesTable"

function EmployeesPage() {
  return (
    <PageContainer>
        <>
          <EmployeesTable />
          {/* pagination */}
        </>
    </PageContainer>
  )
}

export default EmployeesPage