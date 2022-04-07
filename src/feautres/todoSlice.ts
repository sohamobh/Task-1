import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface TodoInitialState {
    Todo: {
        id: string
        email: string
        title: string
        desc: string
        status: string
    }[]
    editNewData?: {
        id: string
        email: string
        title: string
        desc: string
        status: string
    } | null
}
const initialState: TodoInitialState = {
    Todo: [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add: (state, action) => {
            state.Todo.push(action.payload)
        },
        deleteTodo(state, action: PayloadAction<string>) {
            const index = state.Todo.findIndex(
                (todo: any) => todo.id === action.payload
            )
            state.Todo.splice(index, 1)
        },

        editTodo: (state, action) => {
            const editData = state.Todo.find(
                (todo) => todo.id === action.payload
            )
            state.editNewData = editData
        },
        setTodo: (state, action) => {
            const setData: any = state.Todo.map((todo) => {
                if (todo.id === action.payload.id) {
                    return action.payload
                }
                return todo
            })

            state.Todo = setData
        },
        clearEdit: (state) => {
            state.editNewData = null
        },
    },
})
export const { add, deleteTodo, editTodo, setTodo, clearEdit } =
    todoSlice.actions
export default todoSlice.reducer
