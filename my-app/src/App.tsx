import { Suspense, lazy } from "react"

import "./assets/style/base.scss"
import "./assets/style/reset.scss"

import { Routes, Route } from "react-router-dom"
import Loader from "./components/Loader/Loader";

const CreateEmployeePage = lazy(() => import("./pages/CreateEmployeePage/CreateEmlpoyeePage"));
const EmployeesPage = lazy(() => import("./pages/EmployeesPage/EmployeesPage"));
const ErrorsPage = lazy(() => import("./pages/ErrorsPage/ErrorsPage"));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<CreateEmployeePage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/*" element={<ErrorsPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
