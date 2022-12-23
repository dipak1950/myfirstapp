import React, { useState } from "react";
import ToDoHeader from "./ToDoHeader";
import './TodoApp.css'

function Todolist() {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (e) => {
        setInputList(e.target.value)
    }

    const listOfItems = () => {

        if (inputList == "") {
            console.log("Please enter value");
        }
        else {
            setItems((oldItems) => {
                return [...oldItems, inputList]
            });
            setInputList("");
        }
    }

    const deleteItems = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        });
    }

    const cleardata = () => {
        setItems([]);
    }

    return (
        <div className="container">
            <div className="app-wrapper">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder='Add a Items..' className='task-input' onChange={itemEvent} value={inputList} />
                <button onClick={listOfItems} className='button-add' type='submit'>
                    Add
                </button>{
                    Items.length > 1 ?
                        <button onClick={cleardata} className="button-add">Clear</button> : ''
                }

                <ol>
                    {
                        Items.map((value, index) => {
                            return (
                                <ToDoHeader
                                    key={index}
                                    id={index}
                                    text={value}
                                    onSelect={deleteItems} />
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Todolist;