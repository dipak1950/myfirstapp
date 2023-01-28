import React from 'react'

const ToDoHeader = (props) => {

    return (
        <>
            <div className='todo-style'>
                <li>{props.text}</li>
                <i className="fa fa-times" aria-hidden="true"
                    onClick={() => {
                        props.onSelect(props.id)
                    }} />
            </div>
        </>
    )
}

export default ToDoHeader;