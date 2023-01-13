import { useEffect, useState } from "react";
import useShop from "../ShopContent";

const Product = ({product}) => {


	const {addToCart , removeToCard , products } = useShop();
	const [isInCart ,setisInCard] = useState(true);


	useEffect(()=>{

		const isCart = products.filter(find => find.id === product.id);
		
		if(isCart.length > 0){
			setisInCard(false)
		}else{
			setisInCard(true)
		}


	},[products])
	
	
		
	const handleClick = () => {
		if(isInCart) {
			addToCart(product);
		}else{
			removeToCard(product)
		}
		
		
	};



	
	return (
		<div
			className="card"
			style={{
				minHeight: "100%",
				background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${product.urlImage})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}>
			<div className="info">
				<span>{product.name}</span>
				<span className="price">{product.price}</span>
			</div>

			<button
				className={ isInCart ? "btn btn-brimary" : "btn btn-secondary"}
				onClick={handleClick}>
				{isInCart ? "+" : "-"}
			</button>
		</div>
	);
};

export default Product;
