import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const WishlistButton = () => {
    const [isAdded, setIsAdded] = useState(false);

    const handleToggle = () => {
        setIsAdded(!isAdded);
    };

    return (
        <button className="btn btn-link" onClick={handleToggle}>
            {isAdded ? (
                <>
                    <AiFillHeart style={{ color: 'red', marginRight: '5px' }} />
                    Remove from Wishlist
                </>
            ) : (
                <>
                    <AiOutlineHeart style={{ marginRight: '5px' }} />
                    Add to Wishlist
                </>
            )}
        </button>
    );
};

export default WishlistButton;
