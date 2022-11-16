import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../api/apiSlice";
import { IProduct } from "../interfaces/product";

type Props = {};

const Product = (props: Props) => {
    const { data, isLoading } = useGetProductsQuery(undefined);
    if (isLoading) return <div>Loading...</div>;
    // const dispatch = useAppDispatch();
    // const products = useAppSelector((state) => state.products.value);
    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, []);
    return (
        <div>
            <Link to="/admin/products/add">Add</Link>
            {data!.map((product: IProduct) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default Product;
