import React, { useState } from 'react';
import Todo from './todo';

const App = () => {
    const [inputList, setInputList] = useState("");
    const [item, setItems] = useState([]);
    
    const itemEvent = (e) =>{
      setInputList(e.target.value);
    }
    const listItems = () => {if(!inputList){alert('Add items cannot be blank');}else{
      setItems((oldItems) =>{
        return [...oldItems, inputList];
      });
      setInputList("");}
    };
    const deleteItems = (id) => {
      setItems((oldItems) => {
        return oldItems.filter((val , ind) => {
          return ind !==id;
        });
      });
    };
    
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="Add Items" value = {inputList} onChange={itemEvent} />
         <button onClick = {listItems}>+</button> 
          <ol> 
            {item.map((itemval,ind) =>{
              return (
              <>
               <Todo key = {ind}
                      id = {ind}
                      text = {itemval}
                      deleteItems = {deleteItems}
                />
              </>)
            })
            }
        </ol>
        </div>
      </div>
      
    </>
      
  )
}

export default App
