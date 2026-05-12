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

  function excluirContato(idContato) {
    fetch(`http://localhost:3000/contatos/${idContato}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setNome("");
        setTelefone("");
        setiD(null);
        buscarContatos();
      });
  }

  function prepararEdicao(novoContato) {
    setNome(novoContato.nome);
    setTelefone(novoContato.telefone);
    setiD(novoContato.id);
  }

  return (
    <div className="app-container">
      <h1>📞 Meus Contatos</h1>
      <div className="form-group">
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
        <button className="btn-save" onClick={salvarContatos}>
          {id ? "Atualizar Contato" : "Salvar Contato"}
        </button>
      </div>
      <ul>
        {contatos.map((item) => (
          <li key={item.id}>
            <div className="contact-info">
              <span className="contact-name">{item.nome}</span>
              <span className="contact-phone">{item.telefone}</span>
            </div>
            <div className="actions">
              <button className="btn-edit" onClick={() => prepararEdicao(item)}>
                Editar
              </button>
              <button
                className="btn-delete"
                onClick={() => excluirContato(item.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
