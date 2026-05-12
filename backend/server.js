const http = require("http");
let contatos = [{ nome: "Lucas" }, { nome: "Maria" }, { nome: "Joao" }];

const servidor = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/contatos" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(contatos));
  } else if (req.url === "/contatos" && req.method === "POST") {
    let corpoDaRequisicao = "";
    req.on("data", (pedaco) => {
      corpoDaRequisicao += pedaco;
    });
    req.on("end", () => {
      let novoContato = JSON.parse(corpoDaRequisicao);
      novoContato.id = Date.now();
      contatos.push(novoContato);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(novoContato));
    });
  } else if (req.url.startsWith("/contatos/") && req.method === "DELETE") {
    let idDaUrl = req.url.split("/")[2];
    contatos = contatos.filter((contato) => contato.id != idDaUrl);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ mensagem: "Contato deletado!" }));
  } else if (req.url.startsWith("/contatos") && req.method === "PUT") {
    let idDaUrl = req.url.split("/")[2];
    let corpoDaRequisicao = "";
    req.on("data", (pedaco) => {
      corpoDaRequisicao += pedaco;
    });
    req.on("end", () => {
      let indexDoContato = contatos.findIndex(
        (contato) => contato.id == idDaUrl,
      );
      if (indexDoContato !== -1) {
        let dadosAtualizado = JSON.parse(corpoDaRequisicao);
        dadosAtualizado.id = Number(idDaUrl);
        contatos[indexDoContato] = dadosAtualizado;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(dadosAtualizado));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end("Contato nao encontrado");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

servidor.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
