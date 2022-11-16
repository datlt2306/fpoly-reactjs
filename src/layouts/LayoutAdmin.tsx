import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {};

const LayoutAdmin = (props: Props) => {
    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/admin/products">Produt</Link>
                <Link to="/admin/products/1/edit">Edit</Link>
            </header>
            <aside>Sidebar</aside>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
};

export default LayoutAdmin;
