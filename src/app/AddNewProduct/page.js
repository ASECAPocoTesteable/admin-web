"use client";

import React, {useState} from "react";
import NavBar from "@/components/NavBar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddNewProduct = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handlePriceChange = (event) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value) && value > 0) {
            setPrice(value);
        } else {
            setPrice(0);
        }
    };

    const postNewProduct = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/shop/product/add', {
            name: productName,
            price: price
        })
            .then((response) => {
                console.log(response.data);
                toast.success("Producto agregado con éxito");
            })
            .catch((error) => {
                toast.error(`Error: ${error.response ? error.response.data : error.message}`);
            });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar />
            <ToastContainer />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                <h1>Añadir nuevo producto:</h1>
                <form onSubmit={postNewProduct} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                        <p style={{ fontSize: "1.5em", color: "white" }} align={"center"}>Nombre de producto:</p>
                        <input
                            id="product-name"
                            type="text"
                            value={productName}
                            onChange={handleProductNameChange}
                            style={{ padding: "10px", borderRadius: "5px", borderColor: "black", color:"black" }}
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                        <p style={{ fontSize: "1.5em", color: "white" }} align={"center"}>Precio:</p>
                        <input
                            id="product-price"
                            type="number"
                            value={price}
                            onChange={handlePriceChange}
                            min="0"
                            style={{ padding: "10px", borderRadius: "5px", borderColor: "black", color:"black" }}
                        />
                    </div>

                    <button type="submit" style={{backgroundColor: "green", color: "white", borderRadius: "5px"}}>
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;
