import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                <div className="cart-item">
                    {
                        cart.map(item =>(
                            <div className="basket-items" key={item._id}>
                                <img className="basket-product__img" src={item.src} alt=""/>
                                <div className="box basket-product__brand">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                </div>
                                <div className="basket-product__item">
                                <div className="add-quantity">
                                        <div className="count" onClick={() => reduction(item._id)}> - </div>
                                        <span className="count" >{item.count}</span>
                                        <div className="count" onClick={() => increase(item._id)}> + </div>
                                </div>
                                </div>
                                <div className="count_delete" onClick={() => removeProduct(item._id)}>x</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <div className="payment" >
                            <div><Link to="/payment">Payment</Link> </div>
                            <h3>Total: ${total}</h3>
                        </div>
                    </div>
                    </div>
                </>
                )
            }
        }
}

export default Cart