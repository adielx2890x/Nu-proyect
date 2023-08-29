import React, { useState, useEffect } from "react";

function RickAndMortyV1() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setCharacter(data.results[randomIndex]);
        setLoading(false);
      } catch (error) {
        console.error("Error Obteniendo datos", error);
      }
    };

    fetchResult();
  }, []);

  return (
    <div>
      <h1>Personaje de Rick and Morty</h1>
      {loading ? (
        <p> Cargando un personaje ...</p>
      ) : (
        <div>
          <h2> {character.name}</h2>
          <img src={character.image} alt={character.name}></img>
        </div>
      )}
    </div>
  );
}

export default RickAndMortyV1;
