import React,{useEffect, useState} from "react";
import {data} from "../data";
import MenuDetails from "../components/MenuDetails";
import "./menuList.css"


const App=()=>{
 const [FilterData,setFilterData] = useState("")
 const [selectedCategory,setSelectedCategory] = useState("");


const selectCategory = (event) => {
       setSelectedCategory(event.target.textContent.toLowerCase());
}
useEffect(()=>{
        if(selectedCategory!="" && selectedCategory!="all"){
            setFilterData(data.filter(d=> d.category==selectedCategory));
        }else{
            setFilterData(data);
        }
},[selectedCategory])
console.log(setFilterData);
    return(
        <div className="main">
            <div className="header">
            <h1>Our Manu</h1>
        <ul className="menu">
            <li className="menu-item" onClick={selectCategory}>All</li>
            <li className="menu-item" onClick={selectCategory}>Breakfast</li>
            <li className="menu-item" onClick={selectCategory}>Lunch</li>
            <li className="menu-item" onClick={selectCategory}>Shakes</li>
        </ul>
            </div>
       <div className="
       menuList">   <MenuDetails data={FilterData}/></div>
     
        </div>
    )
}

export default App;

