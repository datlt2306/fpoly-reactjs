import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { useAddProductMutation } from "../api/apiSlice";

type Props = {};

const ProductAdd = (props: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();

    const [addProduct, { isLoading }] = useAddProductMutation();

    const onSubmit: SubmitHandler<IProduct> = (data) => {
        addProduct({ id: Math.random(), ...data });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="text" {...register("price")} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductAdd;
