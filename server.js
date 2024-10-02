const http = require("http");
const fs = require("fs");
const {numero_aleatorio} = require("./meus_modulos/utils.js");

http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Bem-vindo!</h2>");
    res.end();
  } else if (req.url === "/sobre" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Nome: Pablo </br> Idade: 19 </br> Curso: Eng. Software</h2>");
    res.end();
  } else if (req.url === "/contato" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Telefone: (42) 9 9925-2772 </br> Email: pabloglara@outlook.com</h2>");
    res.end();
  } else if (req.url === "/numero" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(numero_aleatorio().toString());
    res.end();
  } else if (req.url.startsWith("/saudacao/") && req.method === "GET") {
    const nome = req.url.split("/")[2];
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Ola, " + nome + "!</h2>");
    res.end();
  }}).listen(3000, () => {
  console.log("Server is listening on port 3000");
});
