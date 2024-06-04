"use client";
import React, {useEffect, useState} from "react";
import NavBar from "@/components/NavBar";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ModifyProductPricePage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newPrice, setNewPrice] = useState("");

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/product/getAll')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleProductChange = (event) => {
        const productId = event.target.value;
        const product = products.find(p => p.id === parseInt(productId));
        setSelectedProduct(product);
        setNewPrice(product.price);
    };

    const handlePriceChange = (event) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value) && value >= 0) {
            setNewPrice(value);
        } else {
            setNewPrice("");
        }
    };

    const putModifiedPrice = (event) => {
        event.preventDefault();
        if (!selectedProduct) return;

        axios.put('http://controltowerpt:8080/shop/update/product/price', {
            id: selectedProduct.id,
            price: newPrice
        })
            .then((response) => {
                console.log(response.data);
                toast.success("Precio del producto actualizado con éxito");
            })
            .catch((error) => {
                toast.error(`Error: ${error.response ? error.response.data : error.message}`);
            });
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar />
            <ToastContainer />
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                <h1>Actualizar precio del producto:</h1>
                <form onSubmit={putModifiedPrice} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                        <p style={{fontSize: "1.5em", color: "white"}} align={"center"}>Selecciona el producto:</p>
                        <select
                            id="product-select"
                            value={selectedProduct ? selectedProduct.id : ""}
                            onChange={handleProductChange}
                            style={{padding: "10px", borderRadius: "5px", borderColor: "black", color: "black"}}
                        >
                            <option value="" disabled>Selecciona un producto</option>
                            {products.map(product => (
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedProduct && (
                        <>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                                <p style={{fontSize: "1.5em", color: "white"}} align={"center"}>Nombre del producto:</p>
                                <p style={{
                                    fontSize: "1.5em",
                                    color: "black",
                                    backgroundColor: "white",
                                    padding: "10px",
                                    borderRadius: "5px"
                                }}>{selectedProduct.name}</p>
                            </div>

                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                                <p style={{fontSize: "1.5em", color: "white"}} align={"center"}>Precio actual:</p>
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
                                type="submit"
                                style={{
                                    backgroundColor: "green",
                                    color: "white",
                                    borderRadius: "5px",
                                    padding: "10px"
                                }}
                            >
                                Confirmar
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ModifyProductPricePage;
