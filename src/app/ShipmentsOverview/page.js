"use client"
import React, {useEffect, useState} from "react";
import NavBar from "@/components/NavBar";
import OrderCard from "@/components/OrderCard";
import axios from "axios";


const ShipmentOverviewPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/order/getAll')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
                    <h1>Orders overview:</h1>
                    {orders.length > 0 ? (
                        orders.map(order => (
                            <OrderCard key={order.id} orderId={order.id} clientDirection={order.clientDirection} status={order.state} products={order.productOrders} />
                        ))
                    ) : (
                        <p>No orders available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShipmentOverviewPage;