//Importing modules
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import path from 'path';

//Importing routes
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import taskRoutes from './routes/task.routes';
import userRoutesViews from './routes/user.routes.views';
import taskRoutesViews from './routes/task.routes.views';

const app = express();

//Middlewares
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(morgan('dev'));

//Config view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

//Routes views
app.get('/', (req, res) => {
	res.render('pages/home');
});

app.use('/users', userRoutesViews);
app.use('/tasks', taskRoutesViews);

//Routes API
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api', authRoutes);

export default app;
