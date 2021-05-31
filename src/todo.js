import React from 'react'

const Todo = (props) => {
    return (
        <>
            <div className = "todo_style" >
                 <i className="fas fa-times" onClick = {() => {props.deleteItems(props.id)}}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}
export default Todo ;