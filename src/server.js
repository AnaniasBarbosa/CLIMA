const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/clima", (req, res) => {
  res.render("clima");
});

//CRIANDO SERVIDOR
app.listen(3000, (error) => {
  if (!error) console.log("SERVIDOR EM EXECUÇÃO");
  else console.log("OCORREU ALGUM ERRO: ", error);
});
