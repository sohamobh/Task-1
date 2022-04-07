import { configureStore } from "@reduxjs/toolkit"

import todoSlice from "feautres/todoSlice"

export const store = configureStore({
    reducer: {
        todos: todoSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
