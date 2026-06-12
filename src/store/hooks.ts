import { type TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// Gunakan hook ini di seluruh komponen menggantikan useDispatch dan useSelector biasa
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
