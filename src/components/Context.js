import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Musubi maxi black leather tote",
                "src": "https://m.hng.io/catalog/product/8/3/831270_ivory_4.jpg",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Kasha white seersucker blouse",
                "src": "https://m.hng.io/catalog/product/8/2/827687_dark_brown_5.jpg",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "count": 1
            },
            {
                "_id": "3",
                "title": "Mini Luna 24kt gold vermeil-plated drop earrings",
                "src": "https://m.hng.io/catalog/product/8/2/822317_yellow_4.jpg",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nafsika Skourtis",
                "src": "https://m.hng.io/catalog/product/8/2/829244_white_4.jpg",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 635,
                "count": 1
            },
            {
                "_id": "5",
                "title": "Cerra blue cotton-blend jumper",
                "src": "https://m.hng.io/catalog/product/8/2/829798_gold_3.jpg",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "count": 1
            },
            {
                "_id": "6",
                "title": "Cyrilla intarsia pleated midi skirt",
                "src": "https://m.hng.io/catalog/product/8/2/829137_blue_and_other_4.jpg",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "count": 1
            },
            {
                "_id": "7",
                "title": "Freshman light blue belted trench coat",
                "src": "https://m.hng.io/catalog/product/8/2/827949_black_5.jpg",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "count": 1
            },
            {
                "_id": "8",
                "title": "Navy cable-knit wool-blend cardigan",
                "src": "https://m.hng.io/catalog/product/8/3/831060_green_4.jpg",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "count": 1
            }
        ],
        cart: [],
        total: 0
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };

  render() {
    const {products, cart,total} = this.state;
    const {addCart,reduction,increase,removeProduct,getTotal} = this;

    return (
        <DataContext.Provider 
        value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
            {this.props.children}
        </DataContext.Provider>
    );
  }
}

