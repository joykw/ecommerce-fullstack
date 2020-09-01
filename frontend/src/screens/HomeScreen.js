import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function HomeScreen(props) {

    const [products, setProduct] = useState([]);
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch(); //replaces 'fetch' in useEffect hook

    //to fetch data from server:
    useEffect(() => {
        dispatch(listProducts());

        return () => {
            //
        };
    }, [])



    return <div><ul className="products">
        {
            products.map(product =>
                <li key={product._id}>
                    <div className="product">
                        <Link to={'/product/' + product._id}>
                            <img className="product-image" src={product.image} alt="product" />
                        </Link>


                        <div className="product-name">
                            <Link to={'/product/' + product._id}></Link>
                        </div>
                        <div className="product-brand">Zara</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">{product.rating} Stars ({product.numReviews})
        </div>
                    </div>
                </li>
            )
        }

    </ul>
    </div>
}
export default HomeScreen;