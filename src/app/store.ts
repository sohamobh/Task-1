import { configureStore } from "@reduxjs/toolkit"
import displaySlice from "features/display/displaySlice"

export const store = configureStore({
    reducer: {
        display: displaySlice,
        delete: displaySlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
