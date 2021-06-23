
import React, { Component } from 'react'
import data from './data.json'
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart'

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems:[],
      size: "",
      sort: "",
    }
  }
  removeFromCart=(item)=>{
    const cartItems=this.state.cartItems.slice()
    this.setState({
      cartItems: cartItems.filter(x=>x._id!==item._id)
    })
    
  }
  addToCart=(product)=>{
    const cartItems=this.state.cartItems.slice();
    let alreadyInCart=false;
    cartItems.forEach(item=>{
      if(item._id===product._id){
        item.count ++;
        alreadyInCart=true;
      }
    })
    if(!alreadyInCart){
      cartItems.push({...product, count:1})
    }
    this.setState({
      cartItems:cartItems
    })
  }
  sortProducts=(e)=> {
    const sort=e.target.value
    this.setState({
      sort:sort,
      products:this.state.products.slice().sort((a,b)=>

        // sort==="lowest"?a.price<b.price?1:-1
        // : sort==="highest"?a.price>b.price?1:-1
        // :a._id>b._id?1:-1

        {if(sort==="lowest"){
          return a.price-b.price
        }else if(sort==="highest"){
          return b.price-a.price
        }else if (a._id>b._id){
          return 1 
        }else{
          return -1
        } }
      )
    })
  }
  filterProducts = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'all') {
      this.setState({
        size: e.target.value,
        products: data.products
      })
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        )

      })
    }

  }

  render() {
    return (
      <div className="cart-container">
        <header><a href="/">React Shopping Cart</a></header>
        <main>
          <div className="content">
            <div className="main">
              <Filter value={this.state.sort} value={this.state.size} filterProducts={this.filterProducts} sortProducts={this.sortProducts} count={this.state.products.length} />
              <div className="row row-cols-1 row-cols-md-3 g-4 m-2 bg-warning"><Products products={this.state.products} addToCart={this.addToCart}/></div>
            </div>
            <div className="sidebar"><Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/></div>
          </div>
        </main>
        <footer>All Right's Reserved @React</footer>
      </div>
    );
  }
}

export default App;
