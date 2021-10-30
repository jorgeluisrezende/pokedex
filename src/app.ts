import express, {Response } from 'express';
import morgan from  'morgan';
import { config } from '../config';
import { ErrorHandler } from './middlewares/ErrorHandler';
import { RequestId } from './middlewares/RequestId';
import { MongoProvider } from './providers/Database/implementations/MongoProvider';
import { router } from './router';

const app: express.Application = express();
const database = new MongoProvider()

database.connect(config.database)

app.use((req, res, next) => RequestId(req, res, next))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan(config.logLevel))
app.use(router)

app.use(ErrorHandler)



export {
    app
}