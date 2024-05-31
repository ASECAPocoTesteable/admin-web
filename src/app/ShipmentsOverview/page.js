"use client"
import React from "react";
import NavBar from "@/components/NavBar";
import OrderCard from "@/components/OrderCard";


const ShipmentOverviewPage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
            <NavBar/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
                    <h1>Orders overview:</h1>
                    <OrderCard orderId="123" initialOrderStatus="to prepare"/>
                </div>
            </div>
        </div>
    );
};

export default ShipmentOverviewPage;