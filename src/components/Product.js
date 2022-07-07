import React, { useContext } from 'react'
//import ecommerceContext from '../context/EcommerceContext';
import { Link } from 'react-router-dom';

const Product = ({ id, image }) => {

    return (

        <div className="grid grid-col-4">
            <div>
                <p>

                    <span>
                        <Link to={`products/${id}`}>
                            <img className="product-image" src={image} />
                        </Link>
                    </span>
                </p>
            </div>
        </div>

    )
}

export default Product
