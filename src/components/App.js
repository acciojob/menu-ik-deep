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
        <div id="main" className="main">
            <div className="header">
            <h1>Our Manu</h1>
        <ul className="menu">
            <li id="filter-btn-0" data-test-id="menu-item-all" onClick={selectCategory}>All</li>
            <li id="filter-btn-1" data-test-id="menu-item-breakfast" onClick={selectCategory}>Breakfast</li>
            <li id="filter-btn-2" data-test-id="menu-item-lunch" onClick={selectCategory}>Lunch</li>
            <li id="filter-btn-3" data-test-id="menu-item-shakes" onClick={selectCategory}>Shakes</li>
        </ul>
            </div>
       <div className="
       menuList">   <MenuDetails data={FilterData}/></div>
     
        </div>
    )
}

export default App;

