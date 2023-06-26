import { useAppDispatch } from "@/store/hook";
import { useCallback, useState } from "react";
type UseThunkReturnType = [() => Promise<void>, boolean, string | null];

export const useThunk = (thunk: any): UseThunkReturnType => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const runThunk = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(thunk()).unwrap();
        } catch (err: any) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, thunk]);
    return [runThunk, isLoading, error];
};