import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='menus' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Discover fresh, flavorful dishes crafted to satisfy every craving. Order now and enjoy delicious meals delivered straight to your door</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-listitem" key={index}>
                            <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt="Menu_image" />
                            <p>{item.menu_name}</p>


                        </div>
                    )
                })
            }
        </div>
        <hr />

    </div>
  )
}

export default Exploremenu