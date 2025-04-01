import express from 'express';
import { StatusCodes } from 'http-status-codes';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/index.js';

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());


app.get('/ping', (req, res) => {
    return res.json({
        message: 'pong'
    });
});

app.use('/api', apiRouter)

// For not found
app.all('*', (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Not found'
    });
});

app.listen(PORT, () => {
    console.log(`Successfully started the server on ${PORT}`);
})