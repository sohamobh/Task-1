import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type {
    RootState,
    AppDispatch,
} from "/home/webelight-047/Desktop/Soha/Task-1/task-1/src/app/store"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
