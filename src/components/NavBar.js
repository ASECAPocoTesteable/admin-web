import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width: "100%",
            padding: "10px",
            backgroundColor: "#f8f8f8",
            boxShadow: "0 4px 2px -2px gray"
        }}>
            <Link href="/AddNewProduct">
                <button style={{
                    backgroundColor: "white",
                    color: "black",
                    flex: "1",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer"
                }}>
                    Add new product
                </button>
            </Link>

            <Link href="/ModifyPrice">
                <button style={{
                    backgroundColor: "white",
                    color: "black",
                    flex: "1",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer"
                }}>
                    Modify price
                </button>
            </Link>
            <Link href="/ShipmentsOverview">
                <button style={{
                    backgroundColor: "white",
                    color: "black",
                    flex: "1",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer"
                }}>
                    Orders
                </button>
            </Link>
        </div>
    );
};

export default NavBar;