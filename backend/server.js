import express from 'express';
import colors from 'colors';
import { config } from 'dotenv';

config();

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  console.log(`Server Running On port:http://localhost//${PORT}`)
);
