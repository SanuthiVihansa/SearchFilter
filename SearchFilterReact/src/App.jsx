import './App.css'
import React,{useState} from "react";
import'./styles.css'

function App() {
//creating an array

const list = ["Banana","Apple","Orange","Mango","Pineapple","Watermelon"];
const [filterList,setFilterList]= useState(list);

const handleSearch =(event)=>{
  if(event.target.value===""){
    setFilterList(list);
    return;
  }
  const filteredValues = list.filter(
    (item)=>item.toLowerCase().indexOf(event.target.value.toLowerCase())!==-1);
    setFilterList(filteredValues);
};

  return (
    <div className='app'>
      <div>
        search:<input name='query' type="text" onChange={handleSearch}/>
      </div>
      {filterList && filterList.map((item,index)=>{
        return(
        <div key={index}>{item}</div>
        );
      })}
      
    </div>
  )
}

export default App
