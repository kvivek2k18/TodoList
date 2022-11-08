import React, { useState } from 'react'

export default function TodoList() {
    const[activity,setActivity]=useState("");
    const[listData,setlistData]=useState([]);
    function addActivity(){
        setlistData((listData)=>{
            const updatedList=[...listData,activity]
            setActivity('');
            return updatedList
        })
    }
    function removeactivity(i){
        const updatedListData=listData.filter((elem,id)=>{
            return i!=id;
        })
        setlistData(updatedListData);
    }
    function removeAll(){
        setlistData([]);
    }
  return (
    <>
    <div className='container'>
        <div className='header'>Todo List</div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Here is your List :{")"}</p>
        {listData!=[] && listData.map((data,i)=>{
            return(
                <>
                <p key={i}>
                    <div className='listData'>{data}</div>
                    <div className='btn-position'><button onClick={()=>removeactivity(i)}>remove(-)</button></div>
                </p>
                </>
            )
        })}
        {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
    </div>
    </>
  )
}
