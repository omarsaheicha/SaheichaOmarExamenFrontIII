import { useState } from "react";
import Card from "./Card";

const Formulario = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [card, setCard] = useState(null);
  const [error, setError] = useState("");

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
    // console.log(event.target.value);
  };
  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input1.trim().length < 3 || input1.includes(" ")) {
      setError("Por favor, el nombre debe contener mas de 3 caracteres y no debe contener espacios");
      return;
    }

    if (input2.length < 6) {
      setError("Por favor, el animal debe contener mas de 6 caracteres");
      return;
    }

    setError("");
    setCard(
      <>
        <Card input1={input1} input2={input2} />
      </>
    );
  };

  return (
    <div className="container">
      <h1>Elige un animal:</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input1}
          onChange={handleInput1Change}
          placeholder="Ingresa tu nombre"
        />
        <input
          type="text"
          value={input2}
          onChange={handleInput2Change}
          placeholder="Ingresa tu animal favorito"
        />
        <button className="boton" type="submit">
          Enviar
        </button>
      </form>

      {error && <p>{error}</p>}
      {input1 && input2 && !error && card}
    </div>
  );
};

export default Formulario;
