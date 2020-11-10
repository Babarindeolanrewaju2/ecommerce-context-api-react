import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'

export class Products extends Component {
static contextType = DataContext;
  render() {
    const {products,addCart} = this.context;
    return (
        <div>
        <p className="items-count">{products.length} items</p>
        <div className="list">
            <div className="product">
               {
                   products.map(product =>(
                       <div className="card" key={product._id}>
                           <Link to={`/product/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3 className="product_brand">
                                   <Link to={`/product/${product._id}`}>{product.brand}</Link>
                               </h3>
                               <p className="product_name">{product.title}</p>
                               <p className="product-price">€{product.price}</p>
                               <button className="add-to-bag" onClick={()=> addCart(product._id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
            </div>
            </div>
    );
  }
}

export default Products

