const express = require('express');
const bodyparser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const authRoutes = require('./modules/auth/routes');
const employeeRoutes = require('./modules/employee/routes');
const departmentRoutes = require('./modules/department/routes');
const skillsRoutes = require('./modules/skills/routes');
const positionRoutes = require('./modules/position/routes');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./config');
const app = express();

mongoose.connect(keys.mongoURI).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.log(error);
});

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/uploads', express.static('uploads'));
app.use(express.static('client/dist/client'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/client', 'index.html'));
});

app.get('**', (req, res) => {
  res.redirect('/');
});

app.use('/api/auth', authRoutes);
app.use('/api/employee', passport.authenticate('jwt', { session: false }), employeeRoutes);
app.use('/api/department', passport.authenticate('jwt', { session: false }), departmentRoutes);
app.use('/api/skills', passport.authenticate('jwt', { session: false }), skillsRoutes);
app.use('/api/position', passport.authenticate('jwt', { session: false }), positionRoutes);

module.exports = app;