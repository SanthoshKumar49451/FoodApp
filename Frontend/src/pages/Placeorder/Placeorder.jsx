import React, { useContext, useEffect, useState } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../Context/Storecontext'
import  axios  from 'axios'
import {useNavigate} from 'react-router-dom'

const Placeorder = () => {
  const{getTotal,token,food_list,cartItems,url}=useContext(Storecontext)
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  


  })
  const onChangeHandler=(event)=>{
   const name=event.target.name;
  const  value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    let orderItems=[];
    food_list.forEach(item => {
      if (cartItems[item._id] > 0) {
          orderItems.push({
              _id: item._id,
              name: item.name,
              price: item.price,
              quantity: cartItems[item._id]
          });
      }
  })
      
    

    let orderData={
      address:data,
      items:orderItems,
      amount:getTotal()+2
    }

    let response=await axios.post(`${url}/api/order/order`,orderData,{headers:{token}})
    console.log(response);
    
    if (response.data.success) {
      const{session_url}=response.data;
      window.location.replace(session_url);

      
    }
    else{
      alert("error")
    }
    
    
   
    

  }
  const navigate=useNavigate();
  useEffect(()=>{
    if (!token) {
      navigate('/')
      
      
    }
    else if(getTotal()===0){
      navigate('/cart')
    }
  },[token])

  return (
  <form action="" className='placeorder'onSubmit={onSubmitHandler} >
    <div className="placeorder-left">
      <p className="title">
        Delievery Information
      </p>
      <div className="multi-fields">
        <input type="text" placeholder='First name' name='firstName' onChange={onChangeHandler}  value={data.firstName} />
        <input type="text" placeholder='Last name' name='lastName' onChange={onChangeHandler}  value={data.lastname}  />
      </div> 
      <input type='email' placeholder='Email address' name='email' onChange={onChangeHandler}  value={data.email} /><input type="text"  placeholder='Street' name='street' onChange={onChangeHandler}  value={data.street} />
      <div className="multi-fields">
        <input type="text" placeholder='City' name='city' onChange={onChangeHandler}  value={data.city} />
        <input type="text" placeholder='State' name='state' onChange={onChangeHandler}  value={data.state} />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zipcode' name='zipcode' onChange={onChangeHandler}  value={data.zipcode} />
        <input type="text" placeholder='Country' name='country' onChange={onChangeHandler}  value={data.country} />
      </div>
      <input type="text" placeholder='Phone' name='phone' onChange={onChangeHandler}  value={data.phone} />
    </div>
    <div className="placeorder-right">
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
          <button type='submit' >Proceed to Payment</button>
        </div>

    </div>
  </form>
  )
}

export default Placeorder