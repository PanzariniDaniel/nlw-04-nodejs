import express from 'express';

const _PORT = 3333;
const app = express();

/** GET */
app.get('/users', (request, response) => {
  return response.json({message: "Hello"})
});

/** POST */
app.post('/users', (request, response) => {
  return response.json({message: "Dados salvos"})
});

app.listen(_PORT, () => console.log(`Server is running on port ${_PORT}`));
