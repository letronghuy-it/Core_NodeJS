const express = require('express');
const cors = require('cors')
const { PrismaClient } = require('./generated/client');


const app = express();
const port = 4000;
const prisma = new PrismaClient();
app.use(cors());
const path = require('path');
//   Xử lý JSON data
app.use(express.json());


app.use(express.static('public/'));


// app.use('/uploads', express.static(path.join(__dirname, 'public')));
// Xử lý x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }))


app.use('/api',require('./router/api'));

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});


app.listen(port, () => {
  console.log(`Server is running on port  http://localhost:${port}`);
});
