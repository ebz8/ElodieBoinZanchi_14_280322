import React from "react"

import "./assets/style/base.scss"
import "./assets/style/reset.scss"
import CreateEmployeePage from "./pages/CreateEmployeePage/CreateEmlpoyeePage"
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage"
import ErrorsPage from "./pages/ErrorsPage/ErrorsPage"

import { Routes, Route } from "react-router-dom"


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/create-employee" element={<CreateEmployeePage />} />
          <Route path="/*" element={<ErrorsPage />} />
        </Routes>
      </div>
  )
}

export default App
