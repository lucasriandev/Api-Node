import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contatos, setContatos] = useState([]);
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [id, setiD] = useState(null);

  useEffect(() => {
    buscarContatos();
  }, []);

  function buscarContatos() {
    fetch(`http://localhost:3000/contatos`)
      .then((resp) => resp.json())
      .then((dados) => {
        console.log(dados);
        setContatos(dados);
      })
      .catch((error) => {
        console.log(error, "errooo");
      });
  }

  function salvarContatos() {
    const novoContato = {
      nome: nome,
      telefone: telefone,
    };

    if (id) {
      fetch(`http://localhost:3000/contatos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoContato),
      })
        .then((resp) => resp.json())
        .then(() => {
          setNome("");
          setTelefone("");
          setiD(null);
          buscarContatos();
        });
    } else {
      fetch(`http://localhost:3000/contatos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoContato),
      })
        .then((res) => res.json())
        .then(() => {
          setNome("");
          setTelefone("");
          setiD(null);
          buscarContatos();
        });
    }
  }

  function excluirContato() {}

  return (
    <div>
      <h1>Api Node</h1>
      <input
        type="text"
        placeholder="Digite seu nome!"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Digite seu telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />{" "}
      <br></br>
      <button onClick={salvarContatos}>Salvar</button>
      <ul>
        {contatos.map((item) => (
          <li key={item.id}>
            {item.nome} - {item.telefone}
            <button>Editar</button>
            <button>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
