import { atomWithStorage } from "jotai/utils"

// authentication
export const userAtom = atomWithStorage<object>("user", {
  type: "",
  email: "",
  password: "",
  status: "",
})

// employees array
export const EmployeesAtom = atomWithStorage<object[]>("employees", [])
