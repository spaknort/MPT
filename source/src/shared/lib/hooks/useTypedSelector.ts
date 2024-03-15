import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from '../../../store/index'

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector