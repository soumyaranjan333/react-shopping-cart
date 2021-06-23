import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <>
                {this.props.products.map(product => ( 
                        <div class="col p-3 m-0" key={product._id}>
                            <div class="card image border-0 h-100 bg-warning">
                                <img src={product.image} class="card-img-top border border-warning rounded-circle" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-3 fw-bold text-center">{product.title}</h5>
                                </div>
                                <div class="d-flex flex-wrap justify-content-evenly align-items-center m-3">
                                    <h5 class="card-title fs-1 text-danger">Price: ₹{product.price}</h5>
                                    <button onClick={()=>this.props.addToCart(product)} type="button" class="btn btn-danger fs-3 px-5">Add to cart</button>
                                </div>
                            </div>
                        </div>    
                ))}
            
            </>
        )
    }
}
