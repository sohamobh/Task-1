import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { DisplayInitialState } from "./displaySlice"

const selectDisplay = (state: RootState) => state.display

export const formDataSelector = createSelector(
    selectDisplay,
    (state: DisplayInitialState) => state.todoFormSubmissionValue
)
