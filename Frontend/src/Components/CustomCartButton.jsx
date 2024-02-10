import React from 'react';
import { RiShoppingCart2Line } from "react-icons/ri";

const CustomCartButton = ({ onClick }) => {
    return (
        <button className="btn btn-orange" onClick={onClick}>
            <RiShoppingCart2Line style={{ fontSize: '1.2rem', marginRight: '5px' }} />
            Cart
        </button>
    );
};

export default CustomCartButton;
