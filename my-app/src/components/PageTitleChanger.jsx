import React, { useEffect, useState } from "react";
function PageTitleChanger() {
  const [title, setTitle] = useState("Titulo Inicial");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(inputValue);
    setInputValue("");
  };

  useEffect(
    () => {
      document.title = title;
    },
    { title }
  );

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Ingresa Texto Nuevo"
        />
        <button type="submit">Cambiar</button>
      </form>
    </div>
  );
}

export default PageTitleChanger;
