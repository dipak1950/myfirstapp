import React, { useEffect, useState } from "react";

function PageWidth() {

    const [width, setWidth] = useState(window.innerWidth);

    let handleresize = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleresize)
    })

    return (
        <>
            <h1>
                This Page Width is {width}
            </h1>
        </>
    )
}

export default PageWidth;