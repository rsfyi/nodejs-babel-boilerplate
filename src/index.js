import express from 'express';

const app = express();

app.use('/', (req, res) => {
  res.status(200).json({ message: 'Hello from express app' });
});

app.listen(3000, () => {
  console.log('Server is listening successfully on port 3000');
});
