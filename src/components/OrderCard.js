"use client"
import React, { useState } from 'react';

const OrderCard = ({ orderId, initialOrderStatus }) => {

    return (
        <div style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "10px"}}>
            <p>Order ID: {orderId}</p>
            <p>Order Status: {initialOrderStatus}</p>
        </div>
    );
};

export default OrderCard;
