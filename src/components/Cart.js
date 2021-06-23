import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <div className=" m-1 bg-light p-3 border-bottom border-warning">
                    {this.props.cartItems.length === 0 ? (
                        <div className="text-danger ">Cart is empty.</div>
                    ) : (
                        <div className="text-primary border-primary">You have {this.props.cartItems.length} in the cart.</div>
                    )
                    }
                </div>
                <div>
                    {this.props.cartItems.map(item => (
                        <div class="card mb-3" style={{}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={item.image} style={{ maxWidth: 100 }} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title fs-4">{item.title}</h5>
                                    </div>
                                    <div className="text-center m-5">
                                        {item.price} X {item.count}
                                        <button type="button" class="ms-4 fs-4 btn btn-info" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {this.props.cartItems.length!==0 && (
                    <div className="text-center text-danger fw-bold fs-3">Total: {" "}₹
                    {this.props.cartItems.reduce((a,c)=>a + (c.price*c.count) , 0)}
                    <button type="button" class="mx-5 px-5 fs-4 btn btn-danger">Proceed</button>
                </div>
                )}
                
            </div>
        )
    }
}
