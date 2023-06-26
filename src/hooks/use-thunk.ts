import { useAppDispatch } from "@/store/hook";
import { useCallback, useState } from "react";
type UseThunkReturnType<T> = [(arg?: T) => Promise<void>, boolean, string | null];

export const useThunk = <T>(thunk: (arg: T) => any): UseThunkReturnType<T> => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const runThunk = useCallback(async (agr?: any) => {
        setIsLoading(true);
        try {
            await dispatch(thunk(agr)).unwrap();
        } catch (err: any) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, thunk]);
    return [runThunk, isLoading, error];
};