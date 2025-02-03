import { createContext, useEffect, useState } from "react";
import axios from "axios"



export const Storecontext = createContext(null);


const StoreContextProvider = (props) => {
    const [cartItems, setCartitems] = useState({})
    const url="http://localhost:4000";
    const [token,setToken]=useState('')
    const[food_list,setFoodList]=useState([])
    
    
    const addToCart = async(itemId) => {
        
        
        if (!cartItems[itemId]) {
            setCartitems(prev => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
            
        }
    }
    const removeCart =async (itemId) => {
        setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
            
        }

    }
    const getTotal = () => {
        let total = 0;
        
        // Add safety checks and error handling
        if (!food_list || !cartItems) return 0;
    
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((pro) => pro._id === item);
                // Add check for itemInfo before accessing price
                if (itemInfo) {
                    total += itemInfo.price * cartItems[item];
                }
            }
        }
        return total;
    }

    const fetchFoodList=async()=>{
        const response=await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
        
        
    }
    const loadCartData=async (token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
        
        
        setCartitems(response.data.cartData||{})

    }
   
    useEffect(()=>{

        async function load() {
            fetchFoodList()
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
                
                
            }
            
        }
        load();
    },[])
    const contextValue = {
        food_list,
        addToCart,
        removeCart,
        cartItems, setCartitems,getTotal,url,token,setToken
    }


    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}


export default StoreContextProvider;