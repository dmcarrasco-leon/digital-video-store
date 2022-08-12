import React from 'react'
//import ecommerceContext from '../context/EcommerceContext';
import { Link } from 'react-router-dom';

const Product = ({ id, smallImage }) => {

    return (

        <div className="grid grid-col-4">
            <div>
                <p>

                    <span>
                        <Link to={`/products/${id}`} >
                            <img className="product-image" src={smallImage} />
                        </Link>
                    </span>
                </p>
            </div>
        </div>

    )
}

export default Product
