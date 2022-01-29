import React ,{useState} from 'react';
import items from './component/Data.js';
import Categories from './component/Categories.js';
import Menu from './component/Menu.js';
function App() {
  const allCategories=['all',...new Set(items.map((item)=>item.category))]
  console.log(allCategories)
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState([allCategories]);
  

  const filterItems=(category) => {
    if(category=='all'){
      setMenuItems(items);
      return;
    }
    const newItems=items.filter((item)=>item.category===category)
    setMenuItems(newItems);
  }
  
  return <main>
    <section className='menu section'>
      <div className="title">
      <h2>Menu</h2>
      <div className="underline"></div>
      </div>       
        <Categories allCategories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems}/>
    </section>

  </main>

}

export default App;
