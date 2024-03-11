import './index.css'

import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'

function ProductItemDetails() {
  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchData()
  }, [id])

    const fetchData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (response.ok === true){
        const itemData = await response.json()
        setData(itemData)
    }
  }


  return (
    <div>
      {data && (
        <div className="single-product-bg-container">
            <div className="main-container">
                <p>{data.category}</p>
                <img src={data.image} alt="productCard" className="image" />
                <div className="title-product-details">
                    <h1 className="title">{data.title}</h1>
                    <p>{data.description}</p>
                    <div className="product-details">
                        <p className="price">Rs {data.price}/-</p>
                        <p className="rating">{data.rating.rate}</p>
                        <p>{data.rating.count} available</p>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default ProductItemDetails