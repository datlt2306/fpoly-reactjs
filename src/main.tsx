import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productApi } from "./api/apiSlice";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
