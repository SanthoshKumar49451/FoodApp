import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../../../Frontend/src/assets/assets';

const Orders = ({ url }) => {
  const [data, setData] = useState([]);

  // Fetch all orders from the backend
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/allorders");
      if (response.data.success) {
        setData(response.data.data || []); // Ensure data is an array
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Failed to fetch orders");
    }
  };

  // Handle the status change
  const status = async (event, orderId) => {
    const newStatus = event.target.value;
    console.log(newStatus);
    
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: newStatus,
      });

      if (response.data.success) {
     
        
        toast.success("Order status updated successfully");
        await fetchAllOrders(); // Re-fetch orders after the status update
      } else {
        toast.error("Failed to update order status");
      }
    } catch (error) {
      toast.error("Error updating order status");
    }
  };

  // Fetch orders on initial load
  useEffect(() => {
    fetchAllOrders();
  
    
  }, []);

  return (
    <div className="order-add">
      <h3>Orders</h3>
      <div className="order-list">
        {data.map((item, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {item.items?.map((foodItem, foodIndex) =>
                  foodIndex === item.items.length - 1
                    ? `${foodItem.name} x${foodItem.quantity}`
                    : `${foodItem.name} x${foodItem.quantity}, `
                ) || "No items"}
              </p>
              <p className="order-item-name">
                {item.address.firstName + " " + item.address.lastName}
              </p>
              <p className="order-item-address">
                {item.address.street + ', '}
              </p>
              <p>{item.address.city + ', '}</p>
              <p>{item.address.state + ", "}</p>
              <p className="order-item-phone">{item.address.phone}</p>
            </div>
            <p>Items: {item.items.length}</p>
            <p>${item.amount}</p>
            <select onChange={(e) => status(e, item._id)} value={item.status}>
              <option value="food processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

