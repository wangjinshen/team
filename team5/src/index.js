import app from './app';
import router from './routes';

app.model(require('./models/example').default);
app.router(router);
app.start('#root');
