import express, {urlencoded} from 'express';
import cors from 'cors';
import routes from './api/routes';

const app = express();

const allowedOrigins = [`'${process.env.ALLOWED_ORIGIN}'`];
const options: cors.CorsOptions = {origin: allowedOrigins, credentials: true};

app.use(cors(options));
app.set('trust proxy', true);

//parsing incoming JSON payloads
app.use(express.json());
//parsing incoming strings or array payloads
app.use(urlencoded({extended: true}));
//configured routes
app.use('/api/v1', routes());

export default app;
