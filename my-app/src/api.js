export const fetchRandomCharacter = async() => {
    try {
        // aca es sonde vamos a hacer la llamada al api
        const response = await fetch ('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        console.log(data);
        return data.results[randomIndex];
    } catch (error){
        console.error('Error fetching the data', error);
        throw error;
    }
}