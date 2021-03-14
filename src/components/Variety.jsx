import React from 'react'

function Variety ({filterItems,category }) {
  console.log(category);
    return (
        <div className="btn-bar">
          {
            category.map((cat)=> {
              return(             
                  <button 
                   onClick={()=> filterItems(cat)}
                   >{cat}</button>                
              )
            })
          }
          
        </div>
    )
}

export default Variety;