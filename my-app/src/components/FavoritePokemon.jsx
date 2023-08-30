// import React, { useState, useEffect } from "react";
// import {
//   fetchFavorites,
//   addFavorite,
//   updateFavorite,
//   deleteFavorite,
// } from "./FectFavorites";

// function FavoritePokemon() {
//   const [favorites, setFavorites] = useState([]); // Estado para almacenar la lista de favoritos
//   const [newFavorite, setNewFavorite] = useState(""); // Estado para el nuevo favorito

//   //Obtener los favoritos
//   useEffect(() => {
//     // funcion asincrona que llama al api
//     async function getFavorites() {
//       const data = await fetchFavorites(); //Obtengo los favoritos de la api
//       setFavorites(data); //Actualizamos el estado de los favoritos
//     }
//     getFavorites();
//   }, []);

//   //Insertar el favorito : Agregando el valor que tiene newFavorite
//   const handleAddFavorite = async () => {
//     if (newFavorite.trim() !== "") {
//       const addedFavorite = await addFavorite({ name: newFavorite });
//       if (addedFavorite) {
//         //actualizo la lista
//         setFavorites([...favorites, addedFavorite]);
//         //limpio el campo de texto
//         setNewFavorite("");
//       }
//     }
//   };

//   //Actualizar un favorito :Recibir un id un nuevo valor
//   const handleUpdateFavorite = async (id, newName) => {
//     const updatedFavorite = await updateFavorite(id, { name: newName }); // Actualizar el nombre de un favorito en la API
//     if (updatedFavorite) {
//       const updatedFavorites = favorites.map((fav) =>
//         fav.id === id ? updatedFavorite : fav
//       ); // Actualizar el estado con el favorito actualizado
//       setFavorites(updatedFavorites);
//     }
//   };

//   //Borrar un favorito :Recibir un id a borrar
//   const handleDeleteFavorite = async (id) => {
//     await deleteFavorite(id);

//     const newFavorites = favorites.fil;
//   };
// }

// return (
//   <div>
//     <h2>Mis Pokémon Favoritos</h2>
//     <ul>
//       {favorites.map((favorite) => (
//         <li key={favorite.id}>
//           <input
//             type="text"
//             value={favorite.name}
//             onChange={(e) => handleUpdateFavorite(favorite.id, e.target.value)}
//           />
//           <button onClick={() => handleDeleteFavorite(favorite.id)}>
//             Eliminar
//           </button>
//         </li>
//       ))}
//     </ul>
//     <input
//       type="text"
//       placeholder="Nuevo Pokémon Favorito"
//       value={newFavorite}
//       onChange={(e) => setNewFavorite(e.target.value)}
//     />
//     <button onClick={handleAddFavorite}> Agregar Favorito</button>
//   </div>
// );

// export default FavoritePokemon;



//COMPLETO


import React, { useState, useEffect } from 'react';
import { fetchFavorites, addFavorite, updateFavorite, deleteFavorite } from './FectFavorites'; // Importar las funciones de la API de favoritos

function FavoritePokemon() {
  const [favorites, setFavorites] = useState([]); // Estado para almacenar los favoritos
  const [newFavorite, setNewFavorite] = useState(''); // Estado para el nuevo favorito

  useEffect(() => {
    // Cargar los favoritos al montar el componente
    async function fetchAndSetFavorites() {
      const favoritesData = await fetchFavorites(); // Obtener los favoritos de la API
      setFavorites(favoritesData); // Actualizar el estado con los favoritos
    }
    fetchAndSetFavorites();
  }, []);

  const handleAddFavorite = async () => {
    if (newFavorite.trim() !== '') {
      const addedFavorite = await addFavorite({ name: newFavorite }); // Agregar un nuevo favorito a la API
      if (addedFavorite) {
        setFavorites([...favorites, addedFavorite]); // Agregar el nuevo favorito al estado
        setNewFavorite(''); // Limpiar el campo del nuevo favorito
      }
    }
  };

  const handleUpdateFavorite = async (id, newName) => {
    const updatedFavorite = await updateFavorite(id, { name: newName }); // Actualizar el nombre de un favorito en la API
    if (updatedFavorite) {
      const updatedFavorites = favorites.map(fav => (fav.id === id ? updatedFavorite : fav)); // Actualizar el estado con el favorito actualizado
      setFavorites(updatedFavorites);
    }
  };

  const handleDeleteFavorite = async (id) => {
    await deleteFavorite(id); // Eliminar un favorito de la API
    const updatedFavorites = favorites.filter(fav => fav.id !== id); // Filtrar los favoritos para eliminar el favorito eliminado
    setFavorites(updatedFavorites); // Actualizar el estado
  };

  return (
    <div>
      <h2>Mis Pokémon Favoritos</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <input
              type="text"
              value={favorite.name}
              onChange={(e) => handleUpdateFavorite(favorite.id, e.target.value)}
            />
            <button onClick={() => handleDeleteFavorite(favorite.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newFavorite}
        onChange={(e) => setNewFavorite(e.target.value)}
        placeholder="Nuevo Pokémon Favorito"
      />
      <button onClick={handleAddFavorite}>Agregar Favorito</button>
    </div>
  );
}

export default FavoritePokemon;
