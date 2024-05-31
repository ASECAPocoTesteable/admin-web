"use client";

import React, { useState } from "react";
import NavBar from "@/components/NavBar";

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

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                <h1>Add new product:</h1>
                <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
                        <p style={{ fontSize: "1.5em", color: "white" }} align={"center"}>Price:</p>
                        <input
                            id="product-price"
                            type="number"
                            value={price}
                            onChange={handlePriceChange}
                            min="0"
                            style={{ padding: "10px", borderRadius: "5px", borderColor: "black", color:"black" }}
                        />
                    </div>

                    <button style={{backgroundColor: "green", color: "white", borderRadius: "5px"}}>Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;
