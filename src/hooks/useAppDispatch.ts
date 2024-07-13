import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/store";

//export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
