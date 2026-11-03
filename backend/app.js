require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./config/passport');
const connectDB = require('./config/conn');

const app = express();
const port = process.env.PORT || 3000;

const signupRoute = require('./routes/signupRoute');
const loginRoute = require('./routes/loginRoute');
const usersRoute = require('./routes/usersRoute');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));

app.use(session({
  secret: process.env.JWT_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const requireAuth = (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');

  if (!token && !req.user) {
    return res.redirect('/login');
  }

  next();
};

app.use(express.static('public', { index: false }));
app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);
app.use('/api/auth', loginRoute);
app.use('/auth', authRoutes);
app.get("/asd", (req, res) => {
  res.send("Hello World");
});
app.use('/api/users', usersRoute);

app.get('/', requireAuth, (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

const startServer = async () => {
  try {
    await connectDB();

    const server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Stop the running service or set a different PORT in your .env file.`);
        process.exit(1);
      }

      throw error;
    });
  } catch (error) {
    console.error('Unable to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

startServer();