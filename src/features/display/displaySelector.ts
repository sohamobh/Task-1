import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "/home/webelight-047/Desktop/Soha/Task-1/task-1/src/app/store"
import { DisplayInitialState } from "/home/webelight-047/Desktop/Soha/Task-1/task-1/src/features/display/displaySlice"

const selectDisplay = (state: RootState) => state.display

export const formDataSelector = createSelector(
    selectDisplay,
    (state: DisplayInitialState) => state.tableData
)
