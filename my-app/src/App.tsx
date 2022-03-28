import React from "react"

import "./assets/style/base.scss"
import "./assets/style/reset.scss"
import CreateEmployeePage from "./Pages/CreateEmployeePage/CreateEmlpoyeePage"
import EmployeesPage from "./Pages/EmployeesPage/EmployeesPage"
import ErrorsPage from "./Pages/ErrorsPage/ErrorsPage"

import { Routes, Route } from "react-router-dom"

// import { Counter } from "./features/counter/Counter"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create-employee" element={<CreateEmployeePage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/*" element={<ErrorsPage />} />
      </Routes>
    </div>
  )
}

export default App
