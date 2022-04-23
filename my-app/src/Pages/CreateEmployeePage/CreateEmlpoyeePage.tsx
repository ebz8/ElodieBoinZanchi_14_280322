import EmployeeForm from "../../components/EmployeeForm/EmployeeForm"
import PageContainer from "../../containers/PageContainer/PageContainer"

function CreateEmployeePage() {
  return (
    <PageContainer title="Create Employee">
        <EmployeeForm />
    </PageContainer>
  )
}

export default CreateEmployeePage