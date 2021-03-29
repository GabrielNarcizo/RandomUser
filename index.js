const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send({
      avatar: faker.image.avatar(),
      nome: faker.name.findName(),
      genero: faker.name.gender(),
      nascimento: faker.date.past(50,2000).toLocaleDateString(),
      email: faker.internet.email(),
      senha: faker.internet.password()
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});