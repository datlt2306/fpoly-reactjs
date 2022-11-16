import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hook";
import { fetchProduct } from "../slice/product";
import { useGetProductQuery } from "../api/apiSlice";

type Props = {};

const ProductAdd = (props: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const { data, isLoading, error } = useGetProductQuery(id);

    const onSubmit: SubmitHandler<IProduct> = (data) => {};
    useEffect(() => {
        reset(data);
    }, [data]);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="text" {...register("price")} />
            </form>
        </div>
    );
};

export default ProductAdd;
