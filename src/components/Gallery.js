import React from "react";
import './Title.css'

function Gallery() {

    let images = ["./images/G-1.jpg", "./images/G-2.jpg", "./images/G-3.jpg", "./images/G-4.jpg", "./images/G-5.jpg", "./images/G-6.jpg", "./images/G-7.jpg", "./images/G-8.jpg", "./images/G-9.jpg", "./images/G-10.jpg", "./images/G-11.jpg", "./images/G-12.jpg", "./images/G-13.jpg", "./images/G-14.jpg", "./images/G-15.jpg", "./images/G-16.jpg"]

    return (
        <div className="gallery">
            {
                images.map((image) => {
                    return (
                        <div className="item">
                            <img src={image} />
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Gallery;
