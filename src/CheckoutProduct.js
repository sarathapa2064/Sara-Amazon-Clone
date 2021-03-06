import React from "react";
import star from './star.png'; 

function CheckoutProduct(id, title, image, price, rating) {
return (
<div className="CheckoutProduct">
<img src={image}/>
<div className="checkoutProduct_info">
<p className="checkoutProduct_title">{title}</p>
<p className="checkoutProduct_price">
<small>$</small>
<strong>{price}</strong>
</p>
<div className="checkoutProduct_rating">
{Array(rating)
.fill()
.map((_) =>(
<p>
<img className="star"src={star}/>
</p>
))}
</div>
<button>Remove From Basket</button>
</div>
</div>
);
}

export default CheckoutProduct;
