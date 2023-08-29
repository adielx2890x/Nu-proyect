import React, { useState } from "react";

function ShopList() {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState("");
  const [taskDonneCount, setTaksDonneCount] = useState(0);

  const handleAddItem = () => {
    if (newItems.trim() !== "") {
      setItems([...items, { text: newItems, completed: false }]); // items [manzanas]
      setNewItems("");
    }

    //Agrega items
  };

  const handleCompleted = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems); //completa items

    const completedItems = updatedItems.filter(item => item.completed);
    setTaksDonneCount(completedItems.length);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleCompleted(index)}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <p> Articulos Completados : {taskDonneCount}</p>

      
        <input
          type="text"
          value={newItems}
          onChange={(e) => setNewItems(e.target.value)}
          placeholder="Agregar artículio"
        />
        <button onClick={handleAddItem}> Agregar</button>
      
    </div>
  );
}

export default ShopList;
