//isso faz o post

fetch("http://localhost:3000/contatos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ nome: "Batman", telefone: "9999-0000" }),
})
  .then((res) => res.json())
  .then((dados) => console.log("Resposta do servidor:", dados));

//Delete

fetch("http://localhost:3000/contatos/COLOQUE_O_NUMERO_AQUI", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((dados) => console.log("Resposta do servidor:", dados));

//Atualizar

fetch("http://localhost:3000/contatos/COLOQUE_O_NUMERO_AQUI", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ nome: "Bruce Wayne", telefone: "Secret" }),
})
  .then((res) => res.json())
  .then((dados) => console.log("Resposta da edição:", dados));
