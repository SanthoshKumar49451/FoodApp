import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Hearder/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import Footer from '../../components/Footer/Footer'
import Appdownload from '../../components/Appdownload/Appdownload'

const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category} />
      <Appdownload/>
   
    </div>
  )
}

export default Home