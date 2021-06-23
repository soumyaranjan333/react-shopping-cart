import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="d-flex justify-content-evenly align-items-center m-2 border-bottom border-warning bg-light" >
                <div className=""> {this.props.count} Products</div>
                <div className="">
                <select value={this.props.sort} onClick={this.props.sortProducts} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
               
                <div className="">
                    <select value={this.props.size} onClick={this.props.filterProducts} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected  value="all">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        
                    </select>
                </div>
            </div>
        )
    }
}
