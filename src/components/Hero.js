import React from "react";

export default function Hero({ children }) {
    return (
        <div>
            <div className="hero">
                <div className="banner">
                    <h1>Buy Now</h1>
                    <p>We have best products</p>
                    {children}
                </div>
            </div>
        </div>
    );
}
