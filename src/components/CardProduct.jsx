import React from 'react'
import { IoClose } from "react-icons/io5";
import useShop from '../ShopContent'

const CardProduct = () => {

   const {products , removeToCard , total} = useShop();
  return (

    <div className="cart-products">
				<h2>Cart Products</h2>
				{products.map((product) => (
					<div className="cart-product">
						<div className="cart-title-img">
							<img src={product.urlImage} alt="" />
							<span>{product.name}</span>
						</div>

						<h5>${product.price}</h5>
						<span className="delete" onClick={() => removeToCard(product)}>
							<IoClose />
						</span>
					</div>
				))}
				<div className="total-price">
					{/* <h4>Total Price</h4> */}
					<h2>Total Price : ${total}</h2>
				</div>
			</div>
  )
}

export default CardProduct