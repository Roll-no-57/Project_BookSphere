import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import MyOrderCard from '../Components/MyorderCard'; // Capitalized the component name
import { getUserOrders} from './API';


const MyOrders = () => {


    const [products, setProducts] = useState([]);

    const fetchOrders =async () => {
        const response =await getUserOrders();
        setProducts(response.orders);
    }

    useEffect(() => {   
        fetchOrders();
    }, []);

    return (
        <div className=' d-flex flex-wrap'>
            {products.map((book, index) => (
                <MyOrderCard
                    key={index}
                    book={book}
                    index={index}
                    id={index + 1}
                />
            ))}
        </div>
    )
}

export default MyOrders;
