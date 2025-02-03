import React, { useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/Storecontext';

const Fooditem = ({id,name,price,description,image}) => {
 
    const {cartItems,addToCart,removeCart,url}=useContext(Storecontext)
    
    

  return (
    <div className='food-item'>
        <div className="food-item-imagecontainer">
            <img src={url+"/images/"+image} alt="" className='food-item-image' />
            {
                !cartItems[id]?<img src={assets.add_icon_white} alt=""  onClick={()=>addToCart(id)} className='add'/>:<div className='food-item-count'>
                    <img src={assets.remove_icon_red} alt=""  onClick={()=>removeCart(id)} />
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_green} alt=""  onClick={()=>addToCart(id)}/>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price">
                ${price}
            </p>
        </div>
    </div>
  )
}

export default Fooditem