"use client";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";

const ModifyProductPricePage = () => {
    const [selectedProduct, setSelectedProduct] = useState("");
    const [newPrice, setNewPrice] = useState("0");

    const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    const handlePriceChange = (event) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value) && value >= 0) {
            setNewPrice(value);
        } else {
            setNewPrice("");
        }
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                <h1>Update Product Price:</h1>
                <form style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                        <p style={{fontSize: "1.5em", color: "white"}} align={"center"}>Select product:</p>
                        <select
                            id="product-select"
                            value={selectedProduct}
                            onChange={handleProductChange}
                            style={{padding: "10px", borderRadius: "5px", borderColor: "black", color: "black"}}
                        >
                            <option value="" disabled>Select a product</option>
                            {products.map((product, index) => (
                                <option key={index} value={product}>
                                    {product}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                        <p style={{fontSize: "1.5em", color: "white"}} align={"center"}>New price:</p>
                        <input
                            id="product-price"
                            type="number"
                            value={newPrice}
                            onChange={handlePriceChange}
                            min="0"
                            style={{padding: "10px", borderRadius: "5px", borderColor: "black", color: "black"}}
                        />
                    </div>

                    <button
                        type="button"
                        disabled={!selectedProduct}
                        style={{
                            backgroundColor: selectedProduct ? "green" : "gray",
                            color: "white",
                            borderRadius: "5px",
                            padding: "10px",
                            cursor: selectedProduct ? "pointer" : "not-allowed"
                        }}
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModifyProductPricePage;
