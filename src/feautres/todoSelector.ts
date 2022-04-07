import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "app/store"

import { TodoInitialState } from "./todoSlice"

const selectTodo = (state: RootState) => state.todos

export const todoSelector = createSelector(
    selectTodo,
    (state: TodoInitialState) => state.Todo
)

export const editSelector = createSelector(
    selectTodo,
    (state: TodoInitialState) => state.editNewData
)
