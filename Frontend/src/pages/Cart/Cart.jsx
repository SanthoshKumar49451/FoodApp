import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../Context/Storecontext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeCart,getTotal,url } = useContext(Storecontext)
const navigate=useNavigate()
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {


            if (cartItems[item._id] > 0) {



              return (
                <div>
                  <div className='cart-items-title cart-items-item'>
                    <img src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p className='cross' onClick={() => removeCart(item._id)}>X</p>

                  </div>
                  <hr />
                </div>

              )

            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delievery fee</p>
              <p>${getTotal()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>
                Total</b><b>
                ${getTotal()===0?0:getTotal()+2}
              </b>
            </div>
           
          </div>
          <button onClick={()=>navigate('/placeorder')} >Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <p>
            If you have ,enter it
          </p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='Enter promocode' />
            <button>
              Submit
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart