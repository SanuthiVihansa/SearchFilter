import './App.css'
import React,{useState} from "react";
import'./styles.css'

function App() {
//creating an array

const list = ["Banana","Apple","Orange","Mango","Pineapple","Watermelon"];
const [filterList,setFilterList]= useState(list);

const handleSeaech =(event)=>{
  if(event.target.value===""){
    setFilterList(list);
    return;
  }
  const filteredValues = list.filter(
    (item)=>item.toLowerCase().indexOf(event.target.value.toLowerCase())!==-1);
    setFilterList(filterList);
};

  return (
    <div className='app'>
      <div>
        search:<input name='query' type="text" onChange={handleSeaech}/>
      </div>
      {filterList && filterList.map((item,index)=>{
        <div key={index}>{item}</div>
      })}
      
    </div>
  )
}

export default App
