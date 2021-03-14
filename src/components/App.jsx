import React, { useState } from 'react'
import Items from './Items'
import menu from './Data'
import Variety from './Variety'

const allCategories = ['All', ...new Set(menu.map((item) => item.category))];


function App() {
  console.log();

  const [food, setFood] = useState(menu);
  const [category, setCategory] = useState(allCategories)

  function filterItems (category){
    if(category === 'All'){
      setFood(menu);
      return;
    }
    const genre = menu.filter((item) => item.category === category )
    setFood(genre);
  }


  return (
    <div className="App">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        </div>
        <Variety category={category} filterItems={filterItems}/>        
        <Items food={food}/>
    </div>
  );
}

export default App;
