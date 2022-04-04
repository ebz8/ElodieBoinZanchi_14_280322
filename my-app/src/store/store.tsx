import { atom } from 'jotai'
// import { atomWithImmer } from 'jotai/immer'
// import {atomWithStorage} from "jotai/utils"

// authentication
export const userAtom = atom<object>({
    type: "",
    email: "",
    password: "",
    status: "",
})

// employees array
export const EmployeesAtom = atom<object[]>([])
// export const EmployeesImmerAtom = atomWithImmer<object[]>([])