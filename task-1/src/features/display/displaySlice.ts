import { createSlice } from "@reduxjs/toolkit"

export interface DisplayInitialState {
    todoFormSubmissionValue: SubmitData
    id: number
}

interface SubmitData {
    email: string
    title: string
    desc: string
    status: string
}

const initialState: DisplayInitialState = {
    todoFormSubmissionValue: {
        email: "",
        title: "",
        desc: "",
        status: "",
    },
    id: 0,
}
export const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        display: (state, action) => {
            console.log({ state, Ac: action.payload })
            state.todoFormSubmissionValue = action.payload
        },
    },
})
export const { display } = displaySlice.actions
export default displaySlice.reducer
