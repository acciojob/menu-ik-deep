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
    <div className="menu">
            <button id="filter-btn-0" data-test-id="menu-item-all" onClick={selectCategory}>All</button>
            <button id="filter-btn-1" data-test-id="menu-item-breakfast" onClick={selectCategory}>Breakfast</button>
            <button id="filter-btn-2" data-test-id="menu-item-lunch" onClick={selectCategory}>Lunch</button>
            <button id="filter-btn-3" data-test-id="menu-item-shakes" onClick={selectCategory}>Shakes</button>
        </div>
            </div>
       <div className="
       menuList">   <MenuDetails data={FilterData}/></div>
     
        </div>
    )
}

export default App;

