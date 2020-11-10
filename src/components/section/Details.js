import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'



export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }

    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <>
            <div className="details-box">
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <div className="p-images"><img c src={item.src} alt=""/></div>
                            <div className="p-details">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart"  onClick={() => addCart(item._id)}>
                                    <div className="add-product">Add to cart</div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            </>
        )
    }
}

export default Details