import React from "react";


const MenuDetails = ({ data }) => {
console.log(data);
    return (
        <>
            {data && data.length && data.map(d => {
               return( <div className="container">
                    <div className="imgDiv"><img href={d.img}></img></div>
                    <div className="descDiv">
                        <div className="title">
                            <p><b>{d.title}</b></p>
                            <p>{d.price}</p>
                        </div>
                        <p>{d.desc}</p>
                    </div>
                </div>
               )
            })

            }

        </>
    )
}

export default MenuDetails;