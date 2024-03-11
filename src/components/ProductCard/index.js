import './index.css'
import {Link} from "react-router-dom"

const ProductCard = props => {
    const {productDetails} = props
    const {category, id, image, price, rating, title} = productDetails
    const {rate, count} = rating

    return (
    <Link to={`/products/${id}`} className="link-item">
        <li className="product-item">
            <p>{category}</p>
            <img src={image} alt="productCard" className="image" />
            <div className="title-product-details">
                <h1 className="title">{title}</h1>
                <div className="product-details">
                    <p className="price">Rs {price}/-</p>
                    <p className="rating">{rate}</p>
                    <p>{count} available</p>
                </div>
            </div>
        </li>
    </Link>
    )
}

export default ProductCard