import { useSelector } from "react-redux";

import type { RootState } from "@/store";

//export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppSelector = useSelector.withTypes<RootState>();
