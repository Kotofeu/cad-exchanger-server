import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name } = req.body;
  res.send(`Спасибо за проявленный интерес, ${name}!`); 
});

app.listen(port, () => {
  console.log(`Сервер запущен на ${process.env.APP_NAME}`);
});