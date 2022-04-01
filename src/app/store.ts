import { configureStore } from "@reduxjs/toolkit"
import displaySlice from "/home/webelight-047/Desktop/Soha/Task-1/task-1/src/features/display/displaySlice"

export const store = configureStore({
    reducer: {
        display: displaySlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
