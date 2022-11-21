import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { IProduct } from "../interfaces/product";
import { useGetProductsQuery } from "../services/product";

type Props = {};

const Product = (props: Props) => {
    const { data = [] as IProduct[], error, isLoading } = useGetProductsQuery(undefined);

    if (error) return <div>Error</div>;
    if (isLoading) return <div>...Loading</div>;
    return (
        <div>
            <Link to="/admin/products/add">Add</Link>
            {data.map((product: IProduct) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default Product;
