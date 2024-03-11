import {Component} from 'react'

import './index.css'
import ProductCard from "../ProductCard"

class Products extends Component{
    state = {
        products: [],
        categories: [],
        selectedCategory: "All",
    }

    onClickCategory = (event) => {
        this.setState({selectedCategory: event.target.value})
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        if (response.ok === true){
            const productsData = await response.json()

            let categoryList = ["All"]
            productsData.forEach(eachProduct => {
                if (!categoryList.includes(eachProduct.category)){
                    categoryList = [...categoryList, eachProduct.category]
                }
            this.setState({categories: categoryList, products: productsData})
            })
        }
    }


    render(){
        const {categories, products, selectedCategory} = this.state

        return (
            <>
                <ul className="categories-list">{categories.map(eachCategory => (
                    <li className="category-item" key={eachCategory}>
                        <button 
                            className={`categories-button ${eachCategory === selectedCategory && "custom-button"}`} 
                            onClick={this.onClickCategory} type="button" value={eachCategory}>{eachCategory}
                        </button>
                    </li>
                ))}</ul>
                <ul className="products-list">
                    {products.map(eachProduct => (
                        eachProduct.category === selectedCategory ? (
                            <ProductCard productDetails={eachProduct} key={eachProduct.id} />
                        ) : selectedCategory === "All" && <ProductCard productDetails={eachProduct} key={eachProduct.id} />
                    ))}
                </ul>
            </>
        )
    }
}

export default Products