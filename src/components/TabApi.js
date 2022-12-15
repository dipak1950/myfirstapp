import React, { useEffect, useState } from "react";

function Tab() {

    const [items, setItems] = useState([]);
    const [type, setType] = useState("users");
    
    let changeTab = (t) => {
        setType(t)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [type])

    return (
        <>
            <button onClick={() => { changeTab("users") }}>Users</button>
            <button onClick={() => { changeTab("Todos") }}>Todos</button>
            <button onClick={() => { changeTab("Photos") }}>Photos</button>
            <button onClick={() => { changeTab("Albums") }}>Albums</button>
            <button onClick={() => { changeTab("Comments") }}>Comments</button>
            <button onClick={() => { changeTab("Posts") }}>Posts</button>

            <h1>{type}</h1>

            {items.map((item) => {
                return (
                    <p>
                        {JSON.stringify(item.id)}
                        {JSON.stringify(item.name)}
                        {JSON.stringify(item.userid)}
                        {JSON.stringify(item.email)}
                        {JSON.stringify(item.address)}
                        {JSON.stringify(item.zipcode)}
                        {JSON.stringify(item.phone)}
                        {JSON.stringify(item.website)}
                        {JSON.stringify(item.postId)}
                        {JSON.stringify(item.title)}
                        {JSON.stringify(item.completed)}
                        {JSON.stringify(item.albumId)}
                        {JSON.stringify(item.url)}
                        {JSON.stringify(item.thumbnailUrl)}
                    </p>
                )
            })}
        </>
    )
}

export default Tab;