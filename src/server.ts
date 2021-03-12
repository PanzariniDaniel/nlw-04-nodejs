import 'reflect-metadata';
import express from 'express';
import "./database";
import { router } from './routes';


const _PORT = 3333;
const app = express();

app.use(express.json());
app.use(router);

app.listen(_PORT, () => console.log(`Server is running on port ${_PORT}`));
