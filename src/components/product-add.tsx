import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hook";
import { useAddProductMutation } from "../services/product";

type Props = {};

const ProductAdd = (props: Props) => {
    const [addProduct, result] = useAddProductMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();
    const onSubmit: SubmitHandler<IProduct> = (data) => {
        //
        addProduct(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="text" {...register("price")} />
                <button>Add</button>
            </form>
        </div>
    );
};

export default ProductAdd;
