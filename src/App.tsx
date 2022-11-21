import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hook";
import ProductAdd from "./components/product-add";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutWebsite from "./layouts/LayoutWebsite";
import { login } from "./slice/auth";
const ProductEdit = React.lazy(() => import("./components/product-edit"));
const Product = React.lazy(() => import("./components/product"));

function App() {
    const dispatch = useAppDispatch();
    const isLogin = useAppSelector((state) => state.auth.isLogin);

    return (
        <div className="App">
            state isLogin {isLogin ? "Đã login" : "Chưa login"}
            <button onClick={() => dispatch(login())}>Change state</button>
            <Routes>
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={<h1>Home Page</h1>} />
                    <Route path="about" element={<h1>About Page</h1>} />
                </Route>
                <Route path="/admin" element={<LayoutAdmin />}>
                    <Route index element={<h1>Dashboard</h1>} />
                    <Route path="products" element={<Product />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/edit" element={<ProductEdit />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
