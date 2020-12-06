
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const cahptersRouter = require('./routes/chapters');
const mediaRouter = require('./routes/media');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const lessonsRouter = require('./routes/lessons');
const myCoursesRouter = require('./routes/myCourses');

const imageCoursesRouter = require('./routes/imageCourses');
const refreshTokensRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const verifyToken = require('./middlewares/verifyToken');
const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/chapters', verifyToken, cahptersRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/media', mediaRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);
app.use('/lessons', verifyToken,lessonsRouter);
app.use('/refresh-tokens', refreshTokensRouter);
app.use('/image-courses',verifyToken, imageCoursesRouter);
app.use('/my-courses', verifyToken, myCoursesRouter);


app.use('/mentors', verifyToken, mentorsRouter);
module.exports = app;
