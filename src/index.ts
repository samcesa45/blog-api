import {createServer} from 'http';
import app from './server';
import './config/database/connect';
const server = createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`#### SERVER RUNNING ON PORT: ${process.env.PORT}`);
});
