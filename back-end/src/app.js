import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import housesRoutes from './api/house/routes';
import eventsManager from './events/eventsManager';
import logEventListener from './events/logEventListener';
import lockEventListener from './events/lockEventListener';

const app = express();
app.use(bodyParser.json());

const port = config.get('APP.PORT');

app.use('/houses', housesRoutes);

app.listen(port, () => {
    console.log(`${config.util.getEnv('NODE_ENV')} server running on port ${port}`);
});

logEventListener.start(eventsManager);
lockEventListener.start(eventsManager);

export default app;