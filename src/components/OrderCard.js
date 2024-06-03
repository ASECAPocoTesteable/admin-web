"use client"
import React, { useState } from 'react';

const OrderCard = ({ orderId, clientDirection, status, warehouseDirection, products }) => {

    return (
        <div style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "10px"}}>
            <p>Order ID: {orderId}</p>
            <p>Order Status: {status}</p>
            <p>Client direction: {clientDirection}</p>
            <p>Warehouse direction: {warehouseDirection}</p>
            {products.length > 0 ? (
                products.map(product => (
                    <p>{product.name} - ${product.price} - {product.quantity}u</p>
                ))
            ): (
                <p>No products available</p>
            )}
        </div>
    );
};

export default OrderCard;
