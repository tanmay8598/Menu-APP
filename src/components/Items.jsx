import React from 'react'


function Items ({food}) {
    

    return (
        <div className="container">
            {food.map( (item) => {
                const {id, title, img, category, desc, price} = item;
                return(
                    <div className="card" key={id}>
                        <div className="photo">
                            <img src={img} alt=""/>
                        </div>
                        <div className="text">
                        <div className="detail">
                            <h4 className="product-name"><i>{title}</i></h4>
                            <h4 className="price">{"$"+price}</h4>
                        </div>
                        <div className="underline-2"></div>
                        <p>{desc}</p>
                        </div>                      
                    </div>
                )
            })}
        </div>
    )

}

export default Items;